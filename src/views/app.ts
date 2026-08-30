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

const projectImageUrls: Record<string, string> = {
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
        enabled ? "Остановить движение фона" : "Продолжить движение фона",
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
  return Promise.all(
    frames.map(
      (url) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = image.onerror = () => resolve();
          image.src = url;
        }),
    ),
  );
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

  const setFrames = (nextFrames: string[]) => {
    if (!nextFrames.length) return;
    frames = nextFrames;
    frameIndex = 0;
    lastFrameTime = performance.now();
    render();
  };

  const loop = (time: number) => {
    // requestAnimationFrame naturally pauses in background tabs. Resetting the
    // timestamp after a long gap prevents sprite animations from trying to
    // catch up when the tab becomes visible again.
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

  const showFrame = async (src: string) => {
    loader.classList.remove("is-frame-ready");
    image.src = src;

    try {
      await image.decode();
    } catch {
      await new Promise<void>((resolve) => {
        if (image.complete) return resolve();
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    }

    if (image.naturalWidth > 0) loader.classList.add("is-frame-ready");
  };

  const play = async (mode: "auto" | "manual") => {
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

  // Manual clicks ALWAYS play. They intentionally do not read or update the
  // one-minute automatic-loader cooldown.
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => void play("manual"));
  });

  // Only the automatic animation on the main page uses the one-minute cooldown.
  if (document.body.dataset.page === "index") void play("auto");
}

function initPageIcons() {
  document.querySelectorAll<HTMLElement>("[data-page-icon]").forEach((icon) => {
    const folder = icon.dataset.pageIcon;

    if (!folder) return;

    const frames = getAnimationFrames(folder);

    if (frames.length) {
      startFrameLoop((url) => (icon.style.backgroundImage = `url("${url}")`), frames, 90);
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
  const setFrames = startFrameLoop((url) => (image.src = url), defaultFrames, 120);
  image.addEventListener("pointerenter", () => setFrames(hoverFrames));
  image.addEventListener("pointerleave", () => setFrames(defaultFrames));
}

function setResumeLinks() {
  document.querySelectorAll<HTMLAnchorElement>("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.resumeProjectUrl;
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

function initContactDock() {
  const docks = [...document.querySelectorAll<HTMLElement>("[data-contact-dock]")];
  if (!docks.length) return;

  const setOpen = (dock: HTMLElement, open: boolean) => {
    dock.classList.toggle("is-open", open);
    dock.querySelector<HTMLButtonElement>("[data-contact-trigger]")?.setAttribute(
      "aria-expanded",
      String(open),
    );
  };

  docks.forEach((dock) => {
    const trigger = dock.querySelector<HTMLButtonElement>("[data-contact-trigger]");
    if (!trigger) return;

    // Contacts start expanded on every page load.
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
  const mainImage = document.querySelector<HTMLImageElement>("[data-main-photo]");
  const modalImg = document.querySelector<HTMLImageElement>("#photo-modal-img");
  const counter = document.querySelector<HTMLDivElement>("#photo-counter");

  if (!gallery || !modal || !mainImage || !modalImg) {
    return;
  }

  let activeIndex = 0;
  let previousBodyOverflow = "";

  const setActivePhoto = (index: number) => {
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

  setActivePhoto(0);
}

function initProjectLightbox() {
  const lightbox = document.querySelector<HTMLDivElement>("#lightbox");
  const lightboxImg = document.querySelector<HTMLImageElement>("#lightbox-img");

  if (!lightbox || !lightboxImg) {
    return;
  }

  let previousBodyOverflow = "";

  const openLightbox = (image: HTMLImageElement) => {
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

  document.querySelectorAll<HTMLButtonElement>("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector<HTMLImageElement>("img");

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
