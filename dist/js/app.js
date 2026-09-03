const __vite_glob_0_0 = "" + new URL("../images/cat_01.png", import.meta.url).href;
const __vite_glob_0_1 = "" + new URL("../images/cat_02.png", import.meta.url).href;
const __vite_glob_0_2 = "" + new URL("../images/cat_03.png", import.meta.url).href;
const __vite_glob_0_3 = "" + new URL("../images/cat_04.png", import.meta.url).href;
const __vite_glob_0_4 = "" + new URL("../images/cat_05.png", import.meta.url).href;
const __vite_glob_0_5 = "" + new URL("../images/cat_06.png", import.meta.url).href;
const __vite_glob_0_6 = "" + new URL("../images/cat_07.png", import.meta.url).href;
const __vite_glob_0_7 = "" + new URL("../images/cat_08.png", import.meta.url).href;
const __vite_glob_0_8 = "" + new URL("../images/cat_hover_01.png", import.meta.url).href;
const __vite_glob_0_9 = "" + new URL("../images/cat_hover_02.png", import.meta.url).href;
const __vite_glob_0_10 = "" + new URL("../images/cat_hover_03.png", import.meta.url).href;
const __vite_glob_0_11 = "" + new URL("../images/cat_hover_04.png", import.meta.url).href;
const __vite_glob_0_12 = "" + new URL("../images/cat_hover_05.png", import.meta.url).href;
const __vite_glob_0_13 = "" + new URL("../images/cat_hover_06.png", import.meta.url).href;
const __vite_glob_0_14 = "" + new URL("../images/cat_hover_07.png", import.meta.url).href;
const __vite_glob_0_15 = "" + new URL("../images/cat_hover_08.png", import.meta.url).href;
const __vite_glob_0_16 = "" + new URL("../images/fox_01.png", import.meta.url).href;
const __vite_glob_0_17 = "" + new URL("../images/fox_02.png", import.meta.url).href;
const __vite_glob_0_18 = "" + new URL("../images/fox_03.png", import.meta.url).href;
const __vite_glob_0_19 = "" + new URL("../images/fox_04.png", import.meta.url).href;
const __vite_glob_0_20 = "" + new URL("../images/fox_05.png", import.meta.url).href;
const __vite_glob_0_21 = "" + new URL("../images/fox_06.png", import.meta.url).href;
const __vite_glob_0_22 = "" + new URL("../images/fox_07.png", import.meta.url).href;
const __vite_glob_0_23 = "" + new URL("../images/fox_08.png", import.meta.url).href;
const __vite_glob_0_24 = "" + new URL("../images/page_icon_1_01.png", import.meta.url).href;
const __vite_glob_0_25 = "" + new URL("../images/page_icon_1_02.png", import.meta.url).href;
const __vite_glob_0_26 = "" + new URL("../images/page_icon_1_03.png", import.meta.url).href;
const __vite_glob_0_27 = "" + new URL("../images/page_icon_1_04.png", import.meta.url).href;
const __vite_glob_0_28 = "" + new URL("../images/page_icon_1_05.png", import.meta.url).href;
const __vite_glob_0_29 = "" + new URL("../images/page_icon_1_06.png", import.meta.url).href;
const __vite_glob_0_30 = "" + new URL("../images/page_icon_1_07.png", import.meta.url).href;
const __vite_glob_0_31 = "" + new URL("../images/page_icon_1_08.png", import.meta.url).href;
const __vite_glob_0_32 = "" + new URL("../images/page_icon_1_09.png", import.meta.url).href;
const __vite_glob_0_33 = "" + new URL("../images/page_icon_1_10.png", import.meta.url).href;
const __vite_glob_0_34 = "" + new URL("../images/page_icon_2_01.png", import.meta.url).href;
const __vite_glob_0_35 = "" + new URL("../images/page_icon_2_02.png", import.meta.url).href;
const __vite_glob_0_36 = "" + new URL("../images/page_icon_2_03.png", import.meta.url).href;
const __vite_glob_0_37 = "" + new URL("../images/page_icon_2_04.png", import.meta.url).href;
const __vite_glob_0_38 = "" + new URL("../images/page_icon_2_05.png", import.meta.url).href;
const __vite_glob_0_39 = "" + new URL("../images/page_icon_2_06.png", import.meta.url).href;
const __vite_glob_0_40 = "" + new URL("../images/page_icon_2_07.png", import.meta.url).href;
const __vite_glob_0_41 = "" + new URL("../images/page_icon_2_08.png", import.meta.url).href;
const __vite_glob_0_42 = "" + new URL("../images/page_icon_2_09.png", import.meta.url).href;
const __vite_glob_0_43 = "" + new URL("../images/page_icon_2_10.png", import.meta.url).href;
const __vite_glob_0_44 = "" + new URL("../images/page_icon_2_11.png", import.meta.url).href;
const __vite_glob_0_45 = "" + new URL("../images/page_icon_2_12.png", import.meta.url).href;
const MATRIX_CANVAS_CLASS = "matrix-background";
const MATRIX_STORAGE_KEY = "deazi-matrix-motion-enabled";
const MATRIX_GLYPHS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";
function readMotionPreference() {
  try {
    return window.localStorage.getItem(MATRIX_STORAGE_KEY) !== "0";
  } catch {
    return true;
  }
}
function storeMotionPreference(enabled) {
  try {
    window.localStorage.setItem(MATRIX_STORAGE_KEY, enabled ? "1" : "0");
  } catch {
  }
}
function initMatrixBackground() {
  const matrixWindow = window;
  matrixWindow.__deaziMatrixController?.destroy();
  const host = document.querySelector(".bg") ?? document.body;
  const canvas = document.createElement("canvas");
  canvas.className = MATRIX_CANVAS_CLASS;
  canvas.setAttribute("aria-hidden", "true");
  host.prepend(canvas);
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) {
    canvas.remove();
    return null;
  }
  const fontSize = 17;
  const columnGap = 24;
  let width = 0;
  let height = 0;
  let streams = [];
  let animationFrame = 0;
  let previousTime = performance.now();
  let motionEnabled = readMotionPreference();
  let pageVisible = !document.hidden;
  let isDestroyed = false;
  const randomGlyph = () => MATRIX_GLYPHS[Math.floor(Math.random() * MATRIX_GLYPHS.length)] ?? "0";
  const createStreams = () => {
    const columns = Math.ceil(width / columnGap);
    streams = Array.from({ length: columns }, (_, column) => ({
      x: column * columnGap + Math.random() * 4,
      y: Math.random() * (height + 260),
      speed: 24 + Math.random() * 34,
      length: 9 + Math.floor(Math.random() * 18),
      phase: Math.random() * Math.PI * 2
    }));
  };
  const configureCanvas = (preservePositions = false) => {
    const oldWidth = width;
    const oldHeight = height;
    const oldStreams = streams;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.max(1, Math.floor(width * dpr));
    canvas.height = Math.max(1, Math.floor(height * dpr));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.textBaseline = "top";
    context.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
    if (!preservePositions || !oldStreams.length || !oldWidth || !oldHeight) {
      createStreams();
      return;
    }
    const columns = Math.ceil(width / columnGap);
    const yScale = height / oldHeight;
    streams = Array.from({ length: columns }, (_, column) => {
      const previous = oldStreams[Math.min(column, oldStreams.length - 1)];
      if (!previous) {
        return {
          x: column * columnGap + Math.random() * 4,
          y: Math.random() * (height + 260),
          speed: 24 + Math.random() * 34,
          length: 9 + Math.floor(Math.random() * 18),
          phase: Math.random() * Math.PI * 2
        };
      }
      return {
        ...previous,
        x: column * columnGap + previous.x % columnGap,
        y: previous.y * yScale
      };
    });
  };
  const renderFrame = (time, advance) => {
    const delta = advance ? Math.min((time - previousTime) / 1e3, 0.05) : 0;
    previousTime = time;
    context.clearRect(0, 0, width, height);
    for (const stream of streams) {
      const sway = Math.sin(time * 35e-5 + stream.phase) * 1.4;
      for (let index = 0; index < stream.length; index += 1) {
        const y = stream.y + index * fontSize;
        if (y < -fontSize || y > height + fontSize) continue;
        const alpha = index === 0 ? 0.9 : Math.max(0.06, 0.45 - index * 0.026);
        context.fillStyle = index === 0 ? "rgba(180, 255, 195, 0.90)" : `rgba(38, 176, 72, ${alpha})`;
        context.fillText(randomGlyph(), stream.x + sway, y);
      }
      if (!advance) continue;
      stream.y -= stream.speed * delta;
      if (stream.y + stream.length * fontSize < -24) {
        stream.y = height + 40 + Math.random() * 220;
        stream.speed = 24 + Math.random() * 34;
        stream.length = 9 + Math.floor(Math.random() * 18);
      }
    }
  };
  const stopAnimation = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  };
  const draw = (time) => {
    animationFrame = 0;
    if (isDestroyed || !motionEnabled || !pageVisible) return;
    if (time - previousTime > 250) {
      previousTime = time;
      renderFrame(time, false);
    } else {
      renderFrame(time, true);
    }
    if (!isDestroyed && motionEnabled && pageVisible) {
      animationFrame = window.requestAnimationFrame(draw);
    }
  };
  const startAnimation = () => {
    if (isDestroyed || !motionEnabled || !pageVisible || animationFrame) return;
    previousTime = performance.now();
    animationFrame = window.requestAnimationFrame(draw);
  };
  const setMotionEnabled = (enabled) => {
    if (isDestroyed || motionEnabled === enabled) return;
    motionEnabled = enabled;
    storeMotionPreference(enabled);
    stopAnimation();
    if (motionEnabled) {
      startAnimation();
    }
  };
  const handleVisibilityChange = () => {
    pageVisible = !document.hidden;
    stopAnimation();
    previousTime = performance.now();
    if (!pageVisible) return;
    renderFrame(previousTime, false);
    startAnimation();
  };
  const handlePageHide = () => {
    pageVisible = false;
    stopAnimation();
    previousTime = performance.now();
  };
  const handlePageShow = () => {
    pageVisible = !document.hidden;
    stopAnimation();
    previousTime = performance.now();
    renderFrame(previousTime, false);
    startAnimation();
  };
  const handleResize = () => {
    stopAnimation();
    configureCanvas(true);
    previousTime = performance.now();
    renderFrame(previousTime, false);
    startAnimation();
  };
  const controller = {
    isMotionEnabled: () => motionEnabled,
    setMotionEnabled,
    toggleMotion: () => {
      setMotionEnabled(!motionEnabled);
      return motionEnabled;
    },
    destroy: () => {
      if (isDestroyed) return;
      isDestroyed = true;
      stopAnimation();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("pageshow", handlePageShow);
      canvas.remove();
      if (matrixWindow.__deaziMatrixController === controller) {
        delete matrixWindow.__deaziMatrixController;
      }
    }
  };
  configureCanvas(false);
  renderFrame(previousTime, false);
  startAnimation();
  window.addEventListener("resize", handleResize, { passive: true });
  document.addEventListener("visibilitychange", handleVisibilityChange);
  window.addEventListener("pagehide", handlePageHide);
  window.addEventListener("pageshow", handlePageShow);
  matrixWindow.__deaziMatrixController = controller;
  return controller;
}
const experienceItems = [
  {
    id: "keylink",
    title: "KeyLink",
    role: "Frontend Developer",
    period: "10.2025 – 01.2026",
    siteUrl: "https://keylink.events/",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Многостраничный сайт на Ruby on Rails, Tailwind CSS и JavaScript.",
    description: "Делал адаптивные страницы, галереи, карусели, пагинацию и админ-панель для управления контентом, проектами, фотографиями и SEO.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал галереи, карусели, пагинацию и интерактивные блоки",
      "участвовал в разработке админ-панели",
      "настраивал управление контентом, проектами, фотографиями и SEO",
      "интегрировал frontend с backend"
    ],
    stack: [
      "Ruby on Rails",
      "Tailwind CSS",
      "JavaScript",
      "PostgreSQL",
      "GitLab",
      "Figma"
    ]
  },
  {
    id: "aagency",
    title: "A.AGENCY",
    role: "Frontend Developer",
    period: "06.2025 – 08.2025",
    siteUrl: "https://aagency.agency/ru",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Адаптивный сайт по макетам Figma.",
    description: "Делал анимации, слайдеры, карусели, fullscreen-блоки и поддержку двух языков: русский и английский.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал анимации, слайдеры, карусели и fullscreen-блоки",
      "добавлял поддержку русского и английского языка",
      "подключал frontend к Ruby on Rails",
      "работал с GitLab и вносил правки по задачам заказчика"
    ],
    stack: ["Ruby on Rails", "Tailwind CSS", "JavaScript", "GitLab", "Figma"]
  },
  {
    id: "aliot",
    title: "Aliot",
    role: "Frontend Developer",
    period: "10.2024 – 04.2025",
    siteUrl: null,
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Интерфейс управления светодиодной лампой на React.",
    description: "Делал формы, графики, тёмную тему, адаптивную верстку и работу с настройками через Zustand.",
    responsibilities: [
      "разрабатывал интерфейс управления лампой на React",
      "делал макеты и прототипы в Figma",
      "верстал адаптивные страницы, формы и графики",
      "настраивал работу с API",
      "использовал Zustand для хранения настроек и состояния интерфейса",
      "добавил тёмную тему и небольшие анимации"
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Zustand", "REST API", "Figma"]
  },
  {
    id: "soft-online",
    title: "Софт-Онлайн",
    role: "Frontend Developer",
    period: "12.2023 – 02.2024",
    siteUrl: null,
    repositoryLabel: "GitHub",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Сайт для продукта Контур.Маркет.",
    description: "Делал макеты в Figma, адаптивную верстку на Bootstrap, форму обратной связи, простую админ-панель и подключение к PostgreSQL через Node.js.",
    responsibilities: [
      "собрал требования и подготовил техническое задание",
      "сделал макеты сайта и логотип в Figma",
      "сверстал адаптивный сайт на Bootstrap",
      "добавил светлую и тёмную тему",
      "сделал форму обратной связи",
      "подключил сохранение заявок через Node.js и PostgreSQL",
      "сделал простую админ-панель с авторизацией",
      "работал с Git, GitHub и Fork"
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "PostgreSQL",
      "Git",
      "Figma"
    ]
  }
];
const photoMe4Url = "" + new URL("../images/photo_me4.png", import.meta.url).href;
const photoMe5Url = "" + new URL("../images/photo_me5.jpg", import.meta.url).href;
const photoMe9Url = "" + new URL("../images/photo_me9.jpg", import.meta.url).href;
const resumeProjectUrl = "" + new URL("../docs/resume-project.txt", import.meta.url).href;
const profileLinks = {
  resumeProjectUrl
};
const profilePhotos = [
  {
    id: "photo-me-9",
    title: "",
    src: photoMe9Url
  },
  {
    id: "photo-me-4",
    title: "",
    src: photoMe4Url
  },
  {
    id: "photo-me-5",
    title: "",
    src: photoMe5Url
  }
];
const fox01Url = "" + new URL("../images/fox_01.png", import.meta.url).href;
const fox02Url = "" + new URL("../images/fox_02.png", import.meta.url).href;
const fox03Url = "" + new URL("../images/fox_03.png", import.meta.url).href;
const fox04Url = "" + new URL("../images/fox_04.png", import.meta.url).href;
const fox05Url = "" + new URL("../images/fox_05.png", import.meta.url).href;
const fox06Url = "" + new URL("../images/fox_06.png", import.meta.url).href;
const fox07Url = "" + new URL("../images/fox_07.png", import.meta.url).href;
const fox08Url = "" + new URL("../images/fox_08.png", import.meta.url).href;
const figma1Url = "" + new URL("../images/figma1.jpg", import.meta.url).href;
const project2Url = "" + new URL("../images/project2.jpg", import.meta.url).href;
const project3Url = "" + new URL("../images/project3.jpg", import.meta.url).href;
const project4Url = "" + new URL("../images/project4.jpg", import.meta.url).href;
const project5Url = "" + new URL("../images/project5.jpg", import.meta.url).href;
const project7Url = "" + new URL("../images/project7.jpg", import.meta.url).href;
const animationFrameUrls = /* @__PURE__ */ Object.assign({
  "../animations/cat/cat_01.png": __vite_glob_0_0,
  "../animations/cat/cat_02.png": __vite_glob_0_1,
  "../animations/cat/cat_03.png": __vite_glob_0_2,
  "../animations/cat/cat_04.png": __vite_glob_0_3,
  "../animations/cat/cat_05.png": __vite_glob_0_4,
  "../animations/cat/cat_06.png": __vite_glob_0_5,
  "../animations/cat/cat_07.png": __vite_glob_0_6,
  "../animations/cat/cat_08.png": __vite_glob_0_7,
  "../animations/cat/hover/cat_hover_01.png": __vite_glob_0_8,
  "../animations/cat/hover/cat_hover_02.png": __vite_glob_0_9,
  "../animations/cat/hover/cat_hover_03.png": __vite_glob_0_10,
  "../animations/cat/hover/cat_hover_04.png": __vite_glob_0_11,
  "../animations/cat/hover/cat_hover_05.png": __vite_glob_0_12,
  "../animations/cat/hover/cat_hover_06.png": __vite_glob_0_13,
  "../animations/cat/hover/cat_hover_07.png": __vite_glob_0_14,
  "../animations/cat/hover/cat_hover_08.png": __vite_glob_0_15,
  "../animations/fox/fox_01.png": __vite_glob_0_16,
  "../animations/fox/fox_02.png": __vite_glob_0_17,
  "../animations/fox/fox_03.png": __vite_glob_0_18,
  "../animations/fox/fox_04.png": __vite_glob_0_19,
  "../animations/fox/fox_05.png": __vite_glob_0_20,
  "../animations/fox/fox_06.png": __vite_glob_0_21,
  "../animations/fox/fox_07.png": __vite_glob_0_22,
  "../animations/fox/fox_08.png": __vite_glob_0_23,
  "../animations/page_icon_1/page_icon_1_01.png": __vite_glob_0_24,
  "../animations/page_icon_1/page_icon_1_02.png": __vite_glob_0_25,
  "../animations/page_icon_1/page_icon_1_03.png": __vite_glob_0_26,
  "../animations/page_icon_1/page_icon_1_04.png": __vite_glob_0_27,
  "../animations/page_icon_1/page_icon_1_05.png": __vite_glob_0_28,
  "../animations/page_icon_1/page_icon_1_06.png": __vite_glob_0_29,
  "../animations/page_icon_1/page_icon_1_07.png": __vite_glob_0_30,
  "../animations/page_icon_1/page_icon_1_08.png": __vite_glob_0_31,
  "../animations/page_icon_1/page_icon_1_09.png": __vite_glob_0_32,
  "../animations/page_icon_1/page_icon_1_10.png": __vite_glob_0_33,
  "../animations/page_icon_2/page_icon_2_01.png": __vite_glob_0_34,
  "../animations/page_icon_2/page_icon_2_02.png": __vite_glob_0_35,
  "../animations/page_icon_2/page_icon_2_03.png": __vite_glob_0_36,
  "../animations/page_icon_2/page_icon_2_04.png": __vite_glob_0_37,
  "../animations/page_icon_2/page_icon_2_05.png": __vite_glob_0_38,
  "../animations/page_icon_2/page_icon_2_06.png": __vite_glob_0_39,
  "../animations/page_icon_2/page_icon_2_07.png": __vite_glob_0_40,
  "../animations/page_icon_2/page_icon_2_08.png": __vite_glob_0_41,
  "../animations/page_icon_2/page_icon_2_09.png": __vite_glob_0_42,
  "../animations/page_icon_2/page_icon_2_10.png": __vite_glob_0_43,
  "../animations/page_icon_2/page_icon_2_11.png": __vite_glob_0_44,
  "../animations/page_icon_2/page_icon_2_12.png": __vite_glob_0_45
});
const foxAnimationFrames = [
  fox01Url,
  fox02Url,
  fox03Url,
  fox04Url,
  fox05Url,
  fox06Url,
  fox07Url,
  fox08Url
];
const projectImageUrls = {
  figma1: figma1Url,
  project2: project2Url,
  project3: project3Url,
  project4: project4Url,
  project5: project5Url,
  project7: project7Url
};
const profileImageUrls = {
  "photo-me-9": photoMe9Url
};
const FOX_LOADER_COOLDOWN_MS = 6e4;
const FOX_LOADER_STORAGE_KEY = "deazi-fox-loader-last-auto-played-at-v2";
setBundledImageSources();
setResumeLinks();
initStablePageReveal();
initPageTransitions();
const matrixController = initMatrixBackground();
initMatrixMotionToggle(matrixController);
initFoxLoader();
initPageIcons();
initCat();
initScrollTopButtons();
renderExperienceLists();
initStackCarousel();
initPhotoGallery();
initProjectLightbox();
initContactDock();
function initMatrixMotionToggle(controller) {
  const buttons = [...document.querySelectorAll("[data-matrix-toggle]")];
  if (!buttons.length) return;
  const sync = () => {
    const enabled = controller?.isMotionEnabled() ?? false;
    buttons.forEach((button) => {
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.setAttribute(
        "aria-label",
        enabled ? "Остановить движение фона" : "Продолжить движение фона"
      );
      button.title = enabled ? "Остановить фон" : "Продолжить фон";
    });
  };
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      controller?.toggleMotion();
      sync();
    });
  });
  sync();
}
function initStablePageReveal() {
  const body = document.body;
  const waitForCriticalImages = Promise.all(
    [...document.querySelectorAll("[data-critical-image]")].map(async (image) => {
      if (image.complete && image.naturalWidth > 0) return;
      try {
        await image.decode();
      } catch {
        await new Promise((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      }
    })
  );
  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const safetyTimeout = new Promise((resolve) => window.setTimeout(resolve, 1400));
  void Promise.race([Promise.all([fontsReady, waitForCriticalImages]), safetyTimeout]).then(() => {
    window.requestAnimationFrame(() => body.classList.add("site-ready"));
  });
  window.addEventListener("pageshow", () => {
    body.classList.remove("is-page-leaving");
    body.classList.add("site-ready");
  });
}
function initPageTransitions() {
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a[href]");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;
    const isPageNavigation = /\/(?:index|about|experience)\.html$/.test(url.pathname);
    if (!isPageNavigation) return;
    event.preventDefault();
    document.body.classList.add("is-page-leaving");
    window.setTimeout(() => {
      window.location.href = url.href;
    }, 170);
  });
}
function bindBundledImage(image, src) {
  image.classList.remove("is-image-ready", "is-image-error");
  image.src = src;
  const reveal = () => {
    if (image.naturalWidth > 0) {
      image.classList.add("is-image-ready");
      image.classList.remove("is-image-error");
    } else {
      image.classList.add("is-image-error");
    }
  };
  if (image.complete) {
    reveal();
    return;
  }
  image.addEventListener("load", reveal, { once: true });
  image.addEventListener("error", reveal, { once: true });
}
function setBundledImageSources() {
  document.querySelectorAll("[data-header-fox]").forEach((image) => {
    bindBundledImage(image, fox01Url);
  });
  document.querySelectorAll("[data-fox-loader-image]").forEach((image) => {
    bindBundledImage(image, fox01Url);
  });
  document.querySelectorAll("[data-profile-photo]").forEach((image) => {
    const key = image.dataset.profilePhoto;
    if (key && profileImageUrls[key]) bindBundledImage(image, profileImageUrls[key]);
  });
  document.querySelectorAll("[data-project-image]").forEach((image) => {
    const key = image.dataset.projectImage;
    if (key && projectImageUrls[key]) bindBundledImage(image, projectImageUrls[key]);
  });
}
function getAnimationFrames(folder) {
  return Object.entries(animationFrameUrls).filter(([path]) => path.slice(0, path.lastIndexOf("/")).endsWith(`/animations/${folder}`)).sort(
    ([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, void 0, { numeric: true })
  ).map(([, url]) => url);
}
function preloadFrames(frames) {
  return Promise.all(
    frames.map(
      (url) => new Promise((resolve) => {
        const image = new Image();
        image.onload = image.onerror = () => resolve();
        image.src = url;
      })
    )
  );
}
function startFrameLoop(showFrame, initialFrames, delay = 110) {
  let frames = initialFrames;
  let frameIndex = 0;
  let lastFrameTime = performance.now();
  const render = () => {
    const frame = frames[frameIndex];
    if (frame) showFrame(frame);
  };
  const setFrames = (nextFrames) => {
    if (!nextFrames.length) return;
    frames = nextFrames;
    frameIndex = 0;
    lastFrameTime = performance.now();
    render();
  };
  const loop = (time) => {
    if (time - lastFrameTime >= delay) {
      frameIndex = (frameIndex + 1) % frames.length;
      lastFrameTime = time;
      render();
    }
    window.requestAnimationFrame(loop);
  };
  render();
  window.requestAnimationFrame(loop);
  return setFrames;
}
function initFoxLoader() {
  const loader = document.querySelector("[data-fox-loader]");
  const image = loader?.querySelector("[data-fox-loader-image]");
  const triggers = [...document.querySelectorAll("[data-header-fox-trigger]")];
  if (!loader || !image || !foxAnimationFrames.length) {
    loader?.remove();
    return;
  }
  let isPlaying = false;
  let inMemoryLastAutoPlayedAt = 0;
  const delay = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));
  const getLastAutoPlayedAt = () => {
    try {
      return Number(window.localStorage.getItem(FOX_LOADER_STORAGE_KEY) ?? 0) || 0;
    } catch {
      return inMemoryLastAutoPlayedAt;
    }
  };
  const rememberAutoPlayedNow = () => {
    const now = Date.now();
    inMemoryLastAutoPlayedAt = now;
    try {
      window.localStorage.setItem(FOX_LOADER_STORAGE_KEY, String(now));
    } catch {
    }
  };
  const canAutoPlay = () => Date.now() - getLastAutoPlayedAt() >= FOX_LOADER_COOLDOWN_MS;
  const hideLoader = () => {
    loader.classList.add("is-hiding");
    loader.classList.remove("is-playing", "is-frame-ready");
    window.setTimeout(() => loader.classList.remove("is-hiding"), 240);
  };
  const showFrame = async (src) => {
    loader.classList.remove("is-frame-ready");
    image.src = src;
    try {
      await image.decode();
    } catch {
      await new Promise((resolve) => {
        if (image.complete) return resolve();
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }
    if (image.naturalWidth > 0) loader.classList.add("is-frame-ready");
  };
  const play = async (mode) => {
    if (isPlaying) return false;
    if (mode === "auto" && !canAutoPlay()) return false;
    isPlaying = true;
    if (mode === "auto") rememberAutoPlayedNow();
    await showFrame(foxAnimationFrames[0]);
    loader.classList.remove("is-hiding");
    loader.classList.add("is-playing");
    await preloadFrames(foxAnimationFrames);
    for (const frame of foxAnimationFrames) {
      await showFrame(frame);
      await delay(135);
    }
    await delay(180);
    hideLoader();
    isPlaying = false;
    return true;
  };
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => void play("manual"));
  });
  if (document.body.dataset.page === "index") void play("auto");
}
function initPageIcons() {
  document.querySelectorAll("[data-page-icon]").forEach((icon) => {
    const folder = icon.dataset.pageIcon;
    if (!folder) return;
    const frames = getAnimationFrames(folder);
    if (frames.length) {
      startFrameLoop((url) => icon.style.backgroundImage = `url("${url}")`, frames, 90);
    }
  });
}
function initCat() {
  const container = document.querySelector("[data-cat-animation]");
  const defaultFrames = getAnimationFrames("cat");
  const hoverFrames = getAnimationFrames("cat/hover");
  if (!container || !defaultFrames.length || !hoverFrames.length) return;
  const image = document.createElement("img");
  image.className = "easter-egg-cat";
  image.alt = "Анимированный кот";
  image.draggable = false;
  container.append(image);
  void preloadFrames([...defaultFrames, ...hoverFrames]);
  const setFrames = startFrameLoop((url) => image.src = url, defaultFrames, 120);
  image.addEventListener("pointerenter", () => setFrames(hoverFrames));
  image.addEventListener("pointerleave", () => setFrames(defaultFrames));
}
function setResumeLinks() {
  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.resumeProjectUrl;
  });
}
function initScrollTopButtons() {
  const buttons = [...document.querySelectorAll("[data-scroll-top]")];
  if (!buttons.length) {
    return;
  }
  const updateScrollTopVisibility = () => {
    const shouldShow = window.scrollY > 100;
    buttons.forEach((button) => button.classList.toggle("is-visible", shouldShow));
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  updateScrollTopVisibility();
  window.requestAnimationFrame(() => {
    buttons.forEach((button) => button.classList.add("is-initialized"));
  });
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
}
function initContactDock() {
  const docks = [...document.querySelectorAll("[data-contact-dock]")];
  if (!docks.length) return;
  const setOpen = (dock, open) => {
    dock.classList.toggle("is-open", open);
    dock.querySelector("[data-contact-trigger]")?.setAttribute(
      "aria-expanded",
      String(open)
    );
  };
  docks.forEach((dock) => {
    const trigger = dock.querySelector("[data-contact-trigger]");
    if (!trigger) return;
    setOpen(dock, true);
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(dock, !dock.classList.contains("is-open"));
    });
    dock.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(dock, false);
        trigger.focus();
      }
    });
  });
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    docks.forEach((dock) => {
      if (!dock.contains(target)) setOpen(dock, false);
    });
  });
}
function renderExperienceLists() {
  const template = document.querySelector("#experience-card-template");
  const tagTemplate = document.querySelector("#skill-tag-template");
  const linkTemplate = document.querySelector("#action-link-template");
  if (!template || !tagTemplate || !linkTemplate) {
    return;
  }
  document.querySelectorAll("[data-experience-list]").forEach((list) => {
    const variant = list.dataset.experienceList === "full" ? "full" : "preview";
    list.replaceChildren(
      ...experienceItems.map(
        (item) => createExperienceCard(template, tagTemplate, linkTemplate, item, variant)
      )
    );
  });
}
function createExperienceCard(template, tagTemplate, linkTemplate, item, variant) {
  const card = template.content.firstElementChild?.cloneNode(true);
  card.id = item.id;
  setText(card, "[data-role]", item.role);
  setText(card, "[data-title]", item.title);
  setText(card, "[data-period]", item.period);
  setText(card, "[data-short]", item.shortDescription);
  setText(card, "[data-description]", item.description);
  fillStack(card, tagTemplate, item.stack);
  fillActions(card, linkTemplate, item, variant);
  if (variant === "full") {
    fillResponsibilities(card, item.responsibilities ?? []);
    if (item.repositoryPrivate) {
      card.querySelector("[data-private-repository]")?.classList.remove("hidden");
    }
  }
  return card;
}
function fillStack(card, template, stack) {
  const stackBlock = card.querySelector("[data-stack]");
  stackBlock?.replaceChildren(
    ...stack.map((skill) => {
      const tag = template.content.firstElementChild?.cloneNode(true);
      tag.textContent = skill;
      return tag;
    })
  );
}
function fillResponsibilities(card, responsibilities) {
  const block = card.querySelector("[data-responsibilities-block]");
  const list = card.querySelector("[data-responsibilities]");
  if (!responsibilities.length || !block || !list) {
    return;
  }
  list.replaceChildren(
    ...responsibilities.map((text) => {
      const item = document.createElement("li");
      item.textContent = `– ${text}`;
      return item;
    })
  );
  block.classList.remove("hidden");
}
function fillActions(card, template, item, variant) {
  const actions = card.querySelector("[data-actions]");
  if (!actions) {
    return;
  }
  const buttons = [];
  if (variant === "preview") {
    buttons.push(createLink(template, `./experience.html#${item.id}`, "Подробнее"));
  }
  if (item.siteUrl) {
    buttons.push(createLink(template, item.siteUrl, "Сайт", true));
  }
  if (variant === "full" && item.repositoryUrl) {
    buttons.push(createLink(template, item.repositoryUrl, item.repositoryLabel ?? "Репозиторий", true));
  }
  actions.replaceChildren(...buttons);
}
function createLink(template, href, label, external = false) {
  const link = template.content.firstElementChild?.cloneNode(true);
  link.href = href;
  link.textContent = label;
  if (external) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
}
function setText(parent, selector, text) {
  const element = parent.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}
function initStackCarousel() {
  const block = document.querySelector(".stack-carousel");
  const button = block?.querySelector("[data-stack-toggle]");
  if (!block || !button) {
    return;
  }
  button.addEventListener("click", () => {
    const isExpanded = block.classList.toggle("is-expanded");
    button.textContent = isExpanded ? "Свернуть стек" : "Показать весь стек";
  });
}
function initPhotoGallery() {
  const gallery = document.querySelector(".profile-gallery");
  const modal = document.querySelector("#photo-modal");
  const mainImage = document.querySelector("[data-main-photo]");
  const modalImg = document.querySelector("#photo-modal-img");
  const counter = document.querySelector("#photo-counter");
  if (!gallery || !modal || !mainImage || !modalImg) {
    return;
  }
  let activeIndex = 0;
  let previousBodyOverflow = "";
  const setActivePhoto = (index) => {
    activeIndex = (index + profilePhotos.length) % profilePhotos.length;
    const photo = profilePhotos[activeIndex];
    mainImage.src = photo.src;
    modalImg.src = photo.src;
    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${profilePhotos.length}`;
    }
  };
  const openModal = (index = activeIndex) => {
    previousBodyOverflow = document.body.style.overflow;
    setActivePhoto(index);
    document.body.style.overflow = "hidden";
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
  };
  const closeModal = () => {
    document.body.style.overflow = previousBodyOverflow;
    modal.classList.remove("opacity-100", "pointer-events-auto");
    modal.classList.add("opacity-0", "pointer-events-none");
  };
  const showNext = (step) => {
    if (modal.classList.contains("pointer-events-none")) {
      setActivePhoto(activeIndex + step);
      return;
    }
    openModal(activeIndex + step);
  };
  gallery.querySelector("[data-photo-open]")?.addEventListener("click", () => openModal());
  gallery.querySelector("[data-photo-inline-prev]")?.addEventListener("click", () => showNext(-1));
  gallery.querySelector("[data-photo-inline-next]")?.addEventListener("click", () => showNext(1));
  modal.querySelector("[data-photo-close]")?.addEventListener("click", closeModal);
  modal.querySelector("[data-photo-prev]")?.addEventListener("click", () => showNext(-1));
  modal.querySelector("[data-photo-next]")?.addEventListener("click", () => showNext(1));
  modal.querySelector("[data-photo-image]")?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("pointer-events-none")) {
      return;
    }
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") showNext(-1);
    if (event.key === "ArrowRight") showNext(1);
  });
  setActivePhoto(0);
}
function initProjectLightbox() {
  const lightbox = document.querySelector("#lightbox");
  const lightboxImg = document.querySelector("#lightbox-img");
  if (!lightbox || !lightboxImg) {
    return;
  }
  let previousBodyOverflow = "";
  const openLightbox = (image) => {
    previousBodyOverflow = document.body.style.overflow;
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    document.body.style.overflow = "hidden";
    lightbox.classList.remove("opacity-0", "pointer-events-none");
    lightbox.classList.add("opacity-100", "pointer-events-auto");
  };
  const closeLightbox = () => {
    document.body.style.overflow = previousBodyOverflow;
    lightbox.classList.remove("opacity-100", "pointer-events-auto");
    lightbox.classList.add("opacity-0", "pointer-events-none");
  };
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      if (!image) {
        return;
      }
      openLightbox(image);
    });
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.classList.contains("pointer-events-none")) {
      closeLightbox();
    }
  });
}
