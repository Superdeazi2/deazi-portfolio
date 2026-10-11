import { createHash } from "node:crypto";
import { readdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);
const jsDir = new URL("js/", distDir);
const cssDir = new URL("css/", distDir);

await normalizeJavaScript();
await formatCss();
await normalizeHtmlScripts();

async function normalizeJavaScript() {
  let jsFiles = (await readdir(jsDir)).filter((fileName) => fileName.endsWith(".js"));

  if (!jsFiles.length) {
    return;
  }

  const appEntry = jsFiles.find((fileName) => /^app\d+\.js$/.test(fileName));

  if (appEntry) {
    await rm(new URL("app.js", jsDir), { force: true });
    await rename(new URL(appEntry, jsDir), new URL("app.js", jsDir));
    jsFiles = (await readdir(jsDir)).filter((fileName) => fileName.endsWith(".js"));
  }

  await Promise.all(
    jsFiles
      .filter((fileName) => fileName !== "app.js")
      .map((fileName) => rm(new URL(fileName, jsDir))),
  );
}

async function normalizeHtmlScripts() {
  const htmlFiles = (await readdir(distDir)).filter((fileName) => fileName.endsWith(".html"));
  const jsVersion = createHash("sha256").update(await readFile(new URL("app.js", jsDir))).digest("hex").slice(0, 12);
  const cssVersion = createHash("sha256").update(await readFile(new URL("style.css", cssDir))).digest("hex").slice(0, 12);
  const scripts = `    <script type="module" crossorigin src="./js/app.js?v=${jsVersion}"></script>`;

  await Promise.all(
    htmlFiles.map(async (fileName) => {
      const filePath = new URL(fileName, distDir);
      const html = await readFile(filePath, "utf8");
      const withoutScripts = html.replace(
        /\s*<script type="module" crossorigin src="(?:\.\/)?js\/[^"]+"><\/script>/g,
        "",
      );
      const nextHtml = withoutScripts
        .replace(/href="\/logo\.svg"/g, 'href="./logo.svg"')
        .replace(/href="\/css\//g, 'href="./css/')
        .replace(/href="(?:\.\/)?css\/style\.css(?:\?[^"]*)?"/g, `href="./css/style.css?v=${cssVersion}"`)
        .replace(/href="\/images\//g, 'href="./images/')
        .replace(/src="\/images\//g, 'src="./images/')
        .replace(/\s*<\/head>/, `\n${scripts}\n  </head>`);

      await writeFile(filePath, nextHtml);
    }),
  );
}

async function formatCss() {
  const cssFiles = (await readdir(cssDir)).filter((fileName) => fileName.endsWith(".css"));

  await Promise.all(
    cssFiles.map(async (fileName) => {
      const filePath = join(cssDir.pathname, fileName);
      const css = await readFile(filePath, "utf8");
      await writeFile(filePath, prettifyCss(normalizeCssUrls(css)));
    }),
  );
}

function normalizeCssUrls(css) {
  return css
    .replace(/url\((["']?)\/images\//g, "url($1../images/")
    .replace(/url\((["']?)\/fonts\//g, "url($1../fonts/");
}

function prettifyCss(css) {
  return css
    .replaceAll("*/", "*/\n")
    .replaceAll("{", "{\n  ")
    .replaceAll(";", ";\n  ")
    .replaceAll("}", "\n}\n")
    .replaceAll("\n  \n", "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim() + "\n";
}
