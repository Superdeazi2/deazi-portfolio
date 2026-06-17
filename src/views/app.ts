import { experienceItems, type ExperienceItem } from "/data/experience";
import { profileLinks, profilePhotos } from "/data/profile";
import figma1Url from "/assets/figma1.jpg";
import project2Url from "/assets/project2.jpg";
import project3Url from "/assets/project3.jpg";
import project4Url from "/assets/project4.jpg";
import project5Url from "/assets/project5.jpg";
import project7Url from "/assets/project7.jpg";

const projectImageUrls = {
  figma1: figma1Url,
  project2: project2Url,
  project3: project3Url,
  project4: project4Url,
  project5: project5Url,
  project7: project7Url,
};

setResumeLinks();
setProfilePhotos();
setProjectImages();
initScrollTopButtons();
renderExperienceLists();
initStackCarousel();
initPhotoGallery();
initProjectLightbox();

function setResumeLinks() {
  document.querySelectorAll<HTMLAnchorElement>("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.resumeProjectUrl;
  });
}

function setProfilePhotos() {
  const mainPhoto =
    document.body.dataset.page === "about"
      ? profilePhotos.find((photo) => photo.id === "photo-me-4")
      : profilePhotos[0];

  if (!mainPhoto) {
    return;
  }

  document.querySelectorAll<HTMLImageElement>("[data-profile-photo]").forEach((image) => {
    image.src = mainPhoto.src;
  });
}

function setProjectImages() {
  document.querySelectorAll<HTMLImageElement>("[data-project-image]").forEach((image) => {
    const imageKey = image.dataset.projectImage as keyof typeof projectImageUrls;
    const imageUrl = projectImageUrls[imageKey];

    if (imageUrl) {
      image.src = imageUrl;
    }
  });
}

function initScrollTopButtons() {
  document.querySelectorAll<HTMLButtonElement>("[data-scroll-top]").forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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

  document.querySelectorAll<HTMLButtonElement>("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector<HTMLImageElement>("img");

      if (!image) {
        return;
      }

      lightboxImg.src = image.src;
      lightboxImg.alt = image.alt;
      lightbox.classList.remove("opacity-0", "pointer-events-none");
      lightbox.classList.add("opacity-100", "pointer-events-auto");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("opacity-100", "pointer-events-auto");
    lightbox.classList.add("opacity-0", "pointer-events-none");
  });
}
