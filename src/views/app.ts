import { initMatrixBackground, type MatrixController } from "../effects/matrix-background";
import { experienceItems, type ExperienceItem } from "/data/experience";
import { profileLinks, profilePhotos } from "/data/profile";
import fox01Url from "../animations/fox/fox_01.png";
import fox02Url from "../animations/fox/fox_02.png";
import fox03Url from "../animations/fox/fox_03.png";
import fox04Url from "../animations/fox/fox_04.png";
import fox05Url from "../animations/fox/fox_05.png";
import fox06Url from "../animations/fox/fox_06.png";
import fox07Url from "../animations/fox/fox_07.png";
import fox08Url from "../animations/fox/fox_08.png";
import photoMe9Url from "../assets/photo_me9.jpg";
import figma1Url from "../assets/figma1.jpg";
import project2Url from "../assets/project2.jpg";
import project3Url from "../assets/project3.jpg";
import project4Url from "../assets/project4.jpg";
import project5Url from "../assets/project5.jpg";
import project7Url from "../assets/project7.jpg";

const animationFrameUrls = import.meta.glob("../animations/**/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const foxAnimationFrames = [
  fox01Url,
  fox02Url,
  fox03Url,
  fox04Url,
  fox05Url,
  fox06Url,
  fox07Url,
  fox08Url,
];

import neposeda_uiUrl from "../assets/gallery-neposeda-ui.png";
import neposeda_desktopUrl from "../assets/gallery-neposeda-desktop.png";
import neposeda_mobileUrl from "../assets/gallery-neposeda-mobile.png";
import ecoreef_figmaUrl from "../assets/gallery-ecoreef-figma.png";
import planner_figmaUrl from "../assets/gallery-planner-figma.png";
import budget_figmaUrl from "../assets/gallery-budget-figma.png";
import budget_screenUrl from "../assets/gallery-budget-screen.png";
import green_figmaUrl from "../assets/gallery-green-figma.png";
import kontur_figmaUrl from "../assets/gallery-kontur-figma.png";

const projectImageUrls: Record<string, string> = {
  "neposeda-ui": neposeda_uiUrl,
  "neposeda-desktop": neposeda_desktopUrl,
  "neposeda-mobile": neposeda_mobileUrl,
  "ecoreef-figma": ecoreef_figmaUrl,
  "planner-figma": planner_figmaUrl,
  "budget-figma": budget_figmaUrl,
  "budget-screen": budget_screenUrl,
  "green-figma": green_figmaUrl,
  "kontur-figma": kontur_figmaUrl,

  figma1: figma1Url,
  project2: project2Url,
  project3: project3Url,
  project4: project4Url,
  project5: project5Url,
  project7: project7Url,
};

const profileImageUrls: Record<string, string> = {
  "photo-me-9": photoMe9Url,
};

const FOX_LOADER_COOLDOWN_MS = 60_000;
const FOX_LOADER_STORAGE_KEY = "deazi-fox-loader-last-auto-played-at-v2";

const decodedFrames = new Map<string, Promise<void>>();

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
initProjectSectionNotice();


function initMatrixMotionToggle(controller: MatrixController | null) {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-matrix-toggle]")];
  if (!buttons.length) return;

  const sync = () => {
    const enabled = controller?.isMotionEnabled() ?? false;
    buttons.forEach((button) => {
      button.classList.toggle("is-active", enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.setAttribute(
        "aria-label",
        enabled ? "Остановить анимации" : "Включить анимации",
      );
      button.title = enabled ? "Остановить анимации" : "Включить анимации";
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
    [...document.querySelectorAll<HTMLImageElement>("[data-critical-image]")].map(async (image) => {
      if (image.complete && image.naturalWidth > 0) return;

      try {
        await image.decode();
      } catch {
        await new Promise<void>((resolve) => {
          image.addEventListener("load", () => resolve(), { once: true });
          image.addEventListener("error", () => resolve(), { once: true });
        });
      }
    }),
  );

  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const safetyTimeout = new Promise<void>((resolve) => window.setTimeout(resolve, 1400));

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

    const link = target.closest<HTMLAnchorElement>("a[href]");
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

function bindBundledImage(image: HTMLImageElement, src: string) {
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
  document.querySelectorAll<HTMLImageElement>("[data-header-fox]").forEach((image) => {
    bindBundledImage(image, fox01Url);
  });

  document.querySelectorAll<HTMLImageElement>("[data-fox-loader-image]").forEach((image) => {
    bindBundledImage(image, fox01Url);
  });

  document.querySelectorAll<HTMLImageElement>("[data-profile-photo]").forEach((image) => {
    const key = image.dataset.profilePhoto;
    if (key && profileImageUrls[key]) bindBundledImage(image, profileImageUrls[key]);
  });

  document.querySelectorAll<HTMLImageElement>("[data-project-image]").forEach((image) => {
    const key = image.dataset.projectImage;
    if (key && projectImageUrls[key]) bindBundledImage(image, projectImageUrls[key]);
  });
}

function getAnimationFrames(folder: string) {
  return Object.entries(animationFrameUrls)
    .filter(([path]) => path.slice(0, path.lastIndexOf("/")).endsWith(`/animations/${folder}`))
    .sort(([firstPath], [secondPath]) =>
      firstPath.localeCompare(secondPath, undefined, { numeric: true }),
    )
    .map(([, url]) => url);
}


function preloadFrames(frames: string[]) {
  return Promise.all(frames.map((url) => {
    let pending = decodedFrames.get(url);
    if (!pending) {
      pending = new Promise<void>((resolve) => {
        const image = new Image();
        image.onload = () => {
          image.decode().catch(() => {}).then(() => resolve());
        };
        image.onerror = () => resolve();
        image.src = url;
      });
      decodedFrames.set(url, pending);
    }
    return pending;
  }));
}

function startFrameLoop(
  showFrame: (url: string) => void,
  initialFrames: string[],
  delay = 110,
) {
  let frames = initialFrames;
  let frameIndex = 0;
  let lastFrameTime = performance.now();

  const render = () => {
    const frame = frames[frameIndex];
    if (frame) showFrame(frame);
  };

  const setFrames = (nextFrames: string[], nextDelay = delay) => {
    if (!nextFrames.length) return;
    if (frames !== nextFrames) frameIndex = 0;
    frames = nextFrames;
    delay = nextDelay;
    lastFrameTime = performance.now();
    render();
  };

  let frameRequest = 0;
  const isEnabled = () => matrixController?.isMotionEnabled() ?? !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loop = (time: number) => {
    frameRequest = 0;
    if (!isEnabled() || document.hidden) return;
    // requestAnimationFrame naturally pauses in background tabs. Resetting the
    // timestamp after a long gap prevents sprite animations from trying to
    // catch up when the tab becomes visible again.
    if (time - lastFrameTime >= delay) {
      frameIndex = (frameIndex + 1) % frames.length;
      lastFrameTime = time;
      render();
    }

    frameRequest = window.requestAnimationFrame(loop);
  };

  const syncMotion = () => {
    if (frameRequest) window.cancelAnimationFrame(frameRequest);
    frameRequest = 0;
    lastFrameTime = performance.now();
    if (isEnabled() && !document.hidden) frameRequest = window.requestAnimationFrame(loop);
  };
  render();
  window.addEventListener("deazi-motion-change", syncMotion);
  document.addEventListener("visibilitychange", syncMotion);
  syncMotion();

  return setFrames;
}

function initFoxLoader() {
  const loader = document.querySelector<HTMLElement>("[data-fox-loader]");
  const image = loader?.querySelector<HTMLImageElement>("[data-fox-loader-image]");
  const triggers = [...document.querySelectorAll<HTMLButtonElement>("[data-header-fox-trigger]")];

  if (!loader || !image || !foxAnimationFrames.length) {
    loader?.remove();
    return;
  }

  let isPlaying = false;
  let inMemoryLastAutoPlayedAt = 0;

  const delay = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

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
      // Keep the cooldown in memory if storage is unavailable.
    }
  };

  const canAutoPlay = () => Date.now() - getLastAutoPlayedAt() >= FOX_LOADER_COOLDOWN_MS;

  const hideLoader = () => {
    loader.classList.add("is-hiding");
    loader.classList.remove("is-playing", "is-frame-ready");
    window.setTimeout(() => loader.classList.remove("is-hiding"), 240);
  };

  const showFrame = (src: string) => {
    image.src = src;
    loader.classList.add("is-frame-ready");
  };

  const play = async (mode: "auto" | "manual") => {
    if (isPlaying) return false;
    if (mode === "auto" && !canAutoPlay()) return false;

    isPlaying = true;
    if (mode === "auto") rememberAutoPlayedNow();

    await preloadFrames(foxAnimationFrames);
    showFrame(foxAnimationFrames[0]);
    loader.classList.remove("is-hiding");
    loader.classList.add("is-playing");

    for (const frame of foxAnimationFrames) {
      await showFrame(frame);
      await delay(135);
    }

    await delay(180);
    hideLoader();
    isPlaying = false;
    return true;
  };

  // Manual clicks ALWAYS play. They intentionally do not read or update the
  // one-minute automatic-loader cooldown.
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => void play("manual"));
  });

  // Only the automatic animation on the main page uses the one-minute cooldown.
  if (document.body.dataset.page === "index" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) void play("auto");
}

function initPageIcons() {
  document.querySelectorAll<HTMLElement>("[data-page-icon]").forEach((icon) => {
    const folder = icon.dataset.pageIcon;
    if (!folder) return;
    const frames = getAnimationFrames(folder);
    if (!frames.length) return;
    // Keep decoded frame elements mounted: the first hover never swaps uncached CSS images.
    const images = frames.map((url, index) => {
      const image = document.createElement("img");
      image.src = url;
      image.alt = "";
      image.draggable = false;
      image.className = "page-sprite__frame";
      image.style.visibility = index === 0 ? "visible" : "hidden";
      icon.append(image);
      return image;
    });
    let ready = false;
    let hovered = false;
    let focused = false;
    let frameIndex = 0;
    let lastFrameTime = 0;
    let frameRequest = 0;
    const show = (index: number) => {
      images[frameIndex].style.visibility = "hidden";
      frameIndex = index;
      images[frameIndex].style.visibility = "visible";
    };
    const loop = (time: number) => {
      frameRequest = 0;
      if ((!hovered && !focused) || document.hidden || !ready) return;
      if (time - lastFrameTime >= 90) {
        show((frameIndex + 1) % frames.length);
        lastFrameTime = time;
      }
      frameRequest = window.requestAnimationFrame(loop);
    };
    const sync = () => {
      if (frameRequest) window.cancelAnimationFrame(frameRequest);
      frameRequest = 0;
      lastFrameTime = performance.now();
      if ((hovered || focused) && !document.hidden && ready) frameRequest = window.requestAnimationFrame(loop);
      else show(0);
    };
    icon.addEventListener("pointerenter", () => { hovered = true; sync(); });
    icon.addEventListener("pointerleave", () => { hovered = false; sync(); });
    icon.addEventListener("focus", () => { focused = true; sync(); });
    icon.addEventListener("blur", () => { focused = false; sync(); });
    document.addEventListener("visibilitychange", sync);
    void Promise.all(images.map((image) => image.decode().catch(() => {}))).then(() => { ready = true; sync(); });
  });
}

async function initCat() {
  const container = document.querySelector("[data-cat-animation]");
  const defaultFrames = getAnimationFrames("cat");
  const hoverFrames = getAnimationFrames("cat/hover");

  if (!container || !defaultFrames.length || !hoverFrames.length) return;

  const image = document.createElement("img");
  image.className = "easter-egg-cat";
  image.alt = "Анимированный кот";
  image.draggable = false;
  container.append(image);

  image.src = defaultFrames[0];
  await preloadFrames([...defaultFrames, ...hoverFrames]);
  const setFrames = startFrameLoop((url) => (image.src = url), defaultFrames, 120);
  image.addEventListener("pointerenter", () => setFrames(hoverFrames));
  image.addEventListener("pointerleave", () => setFrames(defaultFrames));
}

function setResumeLinks() {
  document.querySelectorAll<HTMLAnchorElement>("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.hhUrl;
  });
}


function initScrollTopButtons() {
  const buttons = [...document.querySelectorAll<HTMLButtonElement>("[data-scroll-top]")];

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
        behavior: "smooth",
      });
    });
  });

  updateScrollTopVisibility();
  window.requestAnimationFrame(() => {
    buttons.forEach((button) => button.classList.add("is-initialized"));
  });
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
}

function renderExperienceLists() {
  const template = document.querySelector<HTMLTemplateElement>("#experience-card-template");
  const tagTemplate = document.querySelector<HTMLTemplateElement>("#skill-tag-template");
  const linkTemplate = document.querySelector<HTMLTemplateElement>("#action-link-template");

  if (!template || !tagTemplate || !linkTemplate) {
    return;
  }

  document.querySelectorAll<HTMLElement>("[data-experience-list]").forEach((list) => {
    const variant = list.dataset.experienceList === "full" ? "full" : "preview";
    list.replaceChildren(
      ...experienceItems.map((item) =>
        createExperienceCard(template, tagTemplate, linkTemplate, item, variant),
      ),
    );
  });
}

function createExperienceCard(
  template: HTMLTemplateElement,
  tagTemplate: HTMLTemplateElement,
  linkTemplate: HTMLTemplateElement,
  item: ExperienceItem,
  variant: "preview" | "full",
) {
  const card = template.content.firstElementChild?.cloneNode(true) as HTMLElement;

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

function fillStack(card: HTMLElement, template: HTMLTemplateElement, stack: string[]) {
  const stackBlock = card.querySelector("[data-stack]");

  stackBlock?.replaceChildren(
    ...stack.map((skill) => {
      const tag = template.content.firstElementChild?.cloneNode(true) as HTMLElement;
      tag.textContent = skill;
      return tag;
    }),
  );
}

function fillResponsibilities(card: HTMLElement, responsibilities: string[]) {
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
    }),
  );

  block.classList.remove("hidden");
}

function fillActions(
  card: HTMLElement,
  template: HTMLTemplateElement,
  item: ExperienceItem,
  variant: "preview" | "full",
) {
  const actions = card.querySelector("[data-actions]");

  if (!actions) {
    return;
  }

  const buttons: HTMLAnchorElement[] = [];

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

function createLink(template: HTMLTemplateElement, href: string, label: string, external = false) {
  const link = template.content.firstElementChild?.cloneNode(true) as HTMLAnchorElement;

  link.href = href;
  link.textContent = label;

  if (external) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  return link;
}

function setText(parent: HTMLElement, selector: string, text: string) {
  const element = parent.querySelector(selector);

  if (element) {
    element.textContent = text;
  }
}

function initStackCarousel() {
  const block = document.querySelector<HTMLElement>(".stack-carousel");
  const button = block?.querySelector<HTMLButtonElement>("[data-stack-toggle]");

  if (!block || !button) {
    return;
  }

  button.addEventListener("click", () => {
    const isExpanded = block.classList.toggle("is-expanded");
    button.textContent = isExpanded ? "Свернуть стек" : "Показать весь стек";
  });
}

function initPhotoGallery() {
  const gallery = document.querySelector<HTMLElement>(".profile-gallery");
  const modal = document.querySelector<HTMLDivElement>("#photo-modal");
  let mainImage = document.querySelector<HTMLImageElement>("[data-main-photo]");
  let modalImg = document.querySelector<HTMLImageElement>("#photo-modal-img");
  const counter = document.querySelector<HTMLDivElement>("#photo-counter");

  if (!gallery || !modal || !mainImage || !modalImg) {
    return;
  }

  let activeIndex = 0;
  let previousBodyOverflow = "";

  let photoRequest = 0;
  const preparePhoto = (photo: typeof profilePhotos[number]) => {
    const inline = mainImage!.cloneNode(false) as HTMLImageElement;
    const full = modalImg!.cloneNode(false) as HTMLImageElement;
    inline.removeAttribute("data-critical-image");
    [inline, full].forEach(image => { image.src = photo.src; image.loading = "eager"; });
    let failed = false;
    const ready = Promise.all([inline.decode(), full.decode()]).then(() => {
      [inline, full].forEach(image => {
        image.classList.add("is-image-ready");
        image.classList.remove("is-image-error");
      });
      return true;
    }, () => { failed = true; return false; });
    return { inline, full, ready, hasFailed: () => failed };
  };
  const prepared = profilePhotos.map(preparePhoto);
  const setActivePhoto = (index: number) => {
    activeIndex = (index + profilePhotos.length) % profilePhotos.length;
    const requestedIndex = activeIndex;
    const request = ++photoRequest;
    const photo = prepared[requestedIndex];
    const apply = () => {
      if (request !== photoRequest) return;
      mainImage!.replaceWith(photo.inline);
      modalImg!.replaceWith(photo.full);
      mainImage = photo.inline;
      modalImg = photo.full;
      mainImage.style.visibility = "";
      modalImg.style.visibility = "";
      gallery.removeAttribute("aria-busy");
      modal.removeAttribute("aria-busy");
      if (counter) counter.textContent = `${requestedIndex + 1} / ${profilePhotos.length}`;
    };
    if (photo.inline.complete && photo.inline.naturalWidth > 0 && photo.full.complete && photo.full.naturalWidth > 0) {
      void photo.ready.then(ok => { if (ok) apply(); });
    } else {
      mainImage!.style.visibility = "hidden";
      modalImg!.style.visibility = "hidden";
      gallery.setAttribute("aria-busy", "true");
      modal.setAttribute("aria-busy", "true");
      if (counter) counter.textContent = "Загрузка фото…";
      void photo.ready.then(ok => {
        if (ok) apply();
        else if (request === photoRequest) {
          mainImage!.style.visibility = "";
          modalImg!.style.visibility = "";
          gallery.removeAttribute("aria-busy");
          modal.removeAttribute("aria-busy");
          if (counter) counter.textContent = "Фото не загрузилось. Попробуйте ещё раз";
        }
      });
    }
  };

  const openModal = (index = activeIndex) => {
    if (modal.classList.contains("pointer-events-none")) previousBodyOverflow = document.body.style.overflow;
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

  const showNext = (step: number) => {
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

  const restorePhoto = () => {
    // A cached page may return after image decoding failed or while a request was suspended.
    [mainImage!, modalImg!].forEach(image => {
      if (image.complete && image.naturalWidth > 0) {
        image.classList.add("is-image-ready");
        image.classList.remove("is-image-error");
        image.style.visibility = "";
      }
    });
    if (prepared[activeIndex].hasFailed() || !mainImage!.complete || mainImage!.naturalWidth === 0) {
      prepared[activeIndex] = preparePhoto(profilePhotos[activeIndex]);
    }
    setActivePhoto(activeIndex);
  };
  window.addEventListener("pageshow", restorePhoto);
  window.addEventListener("online", restorePhoto);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) restorePhoto(); });
  setActivePhoto(0);
}

function initProjectLightbox() {
  const viewer = document.querySelector<HTMLDialogElement>("#project-viewer");
  const carousel = document.querySelector<HTMLElement>("[data-project-carousel]");
  let viewerImage = viewer?.querySelector<HTMLImageElement>("[data-viewer-image]");
  if (!viewer || !viewerImage || !carousel) return;
  const allSlides = [...carousel.querySelectorAll<HTMLButtonElement>("[data-carousel-slide]")];
  const modes = [...document.querySelectorAll<HTMLButtonElement>("[data-gallery-mode]")];
  const panel = viewer.querySelector<HTMLElement>("#gallery-slides")!;
  const menu = viewer.querySelector<HTMLButtonElement>("[data-viewer-menu]")!;
  const thumbnails = viewer.querySelector<HTMLElement>("[data-viewer-thumbnails]")!;
  // Decode each actual viewer element ahead of time; changing src alone can keep painting the old frame.
  const preparedImages = new Map(allSlides.map(slide => {
    const source = slide.querySelector<HTMLImageElement>("img")!;
    source.loading = "eager";
    const image = viewerImage!.cloneNode(false) as HTMLImageElement;
    image.src = source.src;
    image.alt = source.alt;
    image.loading = "eager";
    let decoded = false;
    const ready = image.decode().then(() => { decoded = true; return true; }, () => false);
    return [slide, { image, ready, isDecoded: () => decoded }] as const;
  }));
  let imageRequest = 0;
  const stage = viewer.querySelector<HTMLElement>(".project-viewer__stage")!;
  const canvas = viewer.querySelector<HTMLElement>(".project-viewer__canvas")!;
  const zoomButton = viewer.querySelector<HTMLButtonElement>("[data-viewer-zoom]")!;
  let zoomed = false;
  const setZoom = (value: boolean) => {
    zoomed = value;
    stage.classList.toggle("is-zoomed", value);
    zoomButton.setAttribute("aria-pressed", String(value));
    zoomButton.setAttribute("aria-label", value ? "Показать изображение целиком" : "Увеличить изображение");
    zoomButton.textContent = value ? "Целиком" : "Увеличить";
    canvas.scrollTo(value ? Math.max(0, (canvas.scrollWidth - canvas.clientWidth) / 2) : 0, 0);
  };
  zoomButton.addEventListener("click", () => setZoom(!zoomed));
  const positions: Record<string, number> = { interfaces: 0, figma: 0 };
  let mode = "interfaces";
  let previousOverflow = "";
  const slides = () => allSlides.filter(slide => slide.dataset.galleryGroup === mode);
  const setPanel = (open: boolean) => {
    panel.hidden = !open;
    menu.setAttribute("aria-expanded", String(open));
  };
  const update = () => {
    setZoom(false);
    const current = slides();
    const index = positions[mode];
    allSlides.forEach(slide => { slide.hidden = slide !== current[index]; });
    modes.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.galleryMode === mode)));
    const counter = `${index + 1} / ${current.length}`;
    carousel.querySelector<HTMLElement>("[data-carousel-counter]")!.textContent = counter;
    const prepared = preparedImages.get(current[index]);
    const request = ++imageRequest;
    if (prepared && viewer.open) {
      const apply = () => {
        if (request !== imageRequest || !viewer.open) return;
        viewerImage!.replaceWith(prepared.image);
        viewerImage = prepared.image;
        viewerImage.style.visibility = "";
        canvas.style.setProperty("--viewer-image-width", `${Math.min(viewerImage.naturalWidth, 2200)}px`);
        viewer.querySelector<HTMLElement>("[data-viewer-description]")!.textContent = current[index].dataset.slideDescription ?? "";
        stage.removeAttribute("aria-busy");
        viewer.querySelector<HTMLElement>("[data-viewer-caption]")!.textContent = prepared.image.alt;
        viewer.querySelector<HTMLElement>("[data-viewer-counter]")!.textContent = counter;
      };
      if (prepared.isDecoded()) apply();
      else {
        viewerImage!.style.visibility = "hidden";
        stage.setAttribute("aria-busy", "true");
        viewer.querySelector<HTMLElement>("[data-viewer-description]")!.textContent = "";
        viewer.querySelector<HTMLElement>("[data-viewer-caption]")!.textContent = "Загрузка изображения…";
        viewer.querySelector<HTMLElement>("[data-viewer-counter]")!.textContent = "";
        void prepared.ready.then(ok => {
          if (request !== imageRequest || !viewer.open) return;
          if (ok) apply();
          else {
            stage.removeAttribute("aria-busy");
            viewer.querySelector<HTMLElement>("[data-viewer-caption]")!.textContent = "Не удалось загрузить изображение";
          }
        });
      }
    }
    viewer.querySelector<HTMLElement>("[data-viewer-total]")!.textContent = `(${current.length})`;
    thumbnails.replaceChildren(...current.map((slide, i) => {
      const source = slide.querySelector<HTMLImageElement>("img")!;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-thumbnail";
      button.setAttribute("aria-label", `Слайд ${i + 1}: ${source.alt}`);
      button.setAttribute("aria-current", String(i === index));
      const preview = document.createElement("img");
      preview.src = source.src;
      preview.alt = "";
      const label = document.createElement("span");
      label.textContent = `${i + 1}. ${source.alt}`;
      button.append(preview, label);
      button.addEventListener("click", () => {
        positions[mode] = i;
        update();
        // Restore focus after replacing the thumbnail list.
        const selected = thumbnails.querySelector<HTMLButtonElement>('[aria-current="true"]');
        if (window.matchMedia("(max-width: 700px)").matches) { setPanel(false); menu.focus(); }
        else selected?.focus();
      });
      return button;
    }));
  };
  const step = (delta: number) => {
    positions[mode] = (positions[mode] + delta + slides().length) % slides().length;
    update();
  };
  modes.forEach(button => button.addEventListener("click", () => { mode = button.dataset.galleryMode!; update(); document.dispatchEvent(new Event("gallerymodechange")); }));
  allSlides.forEach(slide => slide.addEventListener("click", () => {
    previousOverflow = document.body.style.overflow;
    setPanel(false);
    viewer.showModal();
    document.body.style.overflow = "hidden";
    update();
  }));
  carousel.querySelector("[data-carousel-prev]")?.addEventListener("click", () => step(-1));
  carousel.querySelector("[data-carousel-next]")?.addEventListener("click", () => step(1));
  viewer.querySelector("[data-viewer-prev]")?.addEventListener("click", () => step(-1));
  viewer.querySelector("[data-viewer-next]")?.addEventListener("click", () => step(1));
  viewer.querySelector("[data-viewer-close]")?.addEventListener("click", () => viewer.close());
  menu.addEventListener("click", () => setPanel(panel.hidden));
  const keyboard = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); step(event.key === "ArrowLeft" ? -1 : 1); }
    if (event.key === "Escape" && !panel.hidden) { event.preventDefault(); setPanel(false); menu.focus(); }
  };
  carousel.addEventListener("keydown", keyboard);
  viewer.addEventListener("keydown", keyboard);
  [carousel, viewer.querySelector<HTMLElement>(".project-viewer__stage")!].forEach(surface => {
    let startX = 0, startY = 0;
    surface.addEventListener("touchstart", event => { startX = event.touches[0].clientX; startY = event.touches[0].clientY; }, { passive: true });
    surface.addEventListener("touchend", event => {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (surface === stage && zoomed) return;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) step(dx > 0 ? -1 : 1);
    }, { passive: true });
  });
  viewer.addEventListener("click", event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener("close", () => { imageRequest++; stage.removeAttribute("aria-busy"); document.body.style.overflow = previousOverflow; slides()[positions[mode]]?.focus(); });
  update();
}

function initProjectSectionNotice() {
  const notice = document.querySelector<HTMLElement>("[data-section-notice]");
  const sections = [...document.querySelectorAll<HTMLElement>("[data-project-section]")];
  if (!notice || !sections.length) return;
  const name = notice.querySelector<HTMLElement>("[data-section-name]")!;
  const prev = notice.querySelector<HTMLButtonElement>("[data-section-prev]")!;
  const next = notice.querySelector<HTMLButtonElement>("[data-section-next]")!;
  const toggle = document.querySelector<HTMLButtonElement>("[data-section-toggle]")!;
  const preferenceKey = "deazi-section-notice-enabled-v1";
  let enabled = true;
  try { enabled = localStorage.getItem(preferenceKey) !== "off"; } catch { /* Optional preference storage. */ }
  const syncToggle = () => {
    const label = enabled ? "Скрыть уведомления разделов" : "Включить уведомления разделов";
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    toggle.querySelector("[data-section-lock]")!.setAttribute("d", enabled ? "M8 11V7a4 4 0 0 1 7.5-2" : "M8 11V7a4 4 0 0 1 8 0v4");
  };
  let active = -1;
  let queued = false;
  let fadeTimer = 0;
  const hide = () => {
    clearTimeout(fadeTimer);
    notice.classList.remove("is-announcing");
    notice.inert = true;
    notice.setAttribute("aria-hidden", "true");
  };
  const announce = () => {
    if (!enabled) { hide(); return; }
    notice.inert = false;
    notice.setAttribute("aria-hidden", "false");
    notice.classList.add("is-announcing");
    clearTimeout(fadeTimer);
    fadeTimer = window.setTimeout(() => {
      notice.classList.remove("is-announcing");
      notice.inert = true;
      notice.setAttribute("aria-hidden", "true");
    }, 2000);
  };
  const measureHeader = () => {
    const header = document.querySelector<HTMLElement>(".site-nav");
    const top = `${Math.max(64, header?.getBoundingClientRect().bottom ?? 64) + 12}px`;
    notice.style.setProperty("--notice-top", top);
    toggle.style.setProperty("--notice-top", top);
  };
  const update = () => {
    queued = false;
    const readingLine = Math.min(innerHeight * .3, 220);
    let index = 0;
    sections.forEach((section, i) => { if (section.getBoundingClientRect().top <= readingLine) index = i; });
    const section = sections[index];
    const mode = document.querySelector<HTMLButtonElement>('.project-showcase [data-gallery-mode][aria-pressed="true"]');
    const title = section.id === "project-gallery" ? mode?.textContent ?? section.dataset.projectSection! : section.dataset.projectSection!;
    if (active === index && name.textContent === title) return;
    active = index;
    name.textContent = title;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      name.getAnimations().forEach(animation => animation.cancel());
      name.animate([{ opacity: 0, transform: "translateY(4px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 260, easing: "ease-out" });
    }
    prev.hidden = index === 0;
    next.hidden = index === sections.length - 1;
    prev.setAttribute("aria-label", `Перейти: ${sections[index - 1]?.dataset.projectSection ?? ""}`);
    next.setAttribute("aria-label", `Перейти: ${sections[index + 1]?.dataset.projectSection ?? ""}`);
    announce();
  };
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
  const go = (delta: number) => {
    const section = sections[active + delta];
    if (!section) return;
    const headerBottom = document.querySelector(".site-nav")?.getBoundingClientRect().bottom ?? 64;
    window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top - headerBottom - (innerWidth <= 640 ? notice.getBoundingClientRect().height + 24 : 20), behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", () => { measureHeader(); schedule(); });
  document.addEventListener("gallerymodechange", schedule);
  toggle.addEventListener("click", () => {
    enabled = !enabled;
    try { localStorage.setItem(preferenceKey, enabled ? "on" : "off"); } catch { /* Keep the current visit usable. */ }
    syncToggle();
    if (enabled) announce(); else hide();
  });
  syncToggle();
  measureHeader();
  update();
}
