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
const avatarUrl = "" + new URL("../images/avatar.png", import.meta.url).href;
const photoMe1Url = "" + new URL("../images/photo_me1.png", import.meta.url).href;
const photoMe2Url = "" + new URL("../images/photo_me2.png", import.meta.url).href;
const photoMe3Url = "" + new URL("../images/photo_me3.png", import.meta.url).href;
const photoMe4Url = "" + new URL("../images/photo_me4.png", import.meta.url).href;
const photoMe5Url = "" + new URL("../images/photo_me5.jpg", import.meta.url).href;
const photoMe6Url = "" + new URL("../images/photo_me6.jpg", import.meta.url).href;
const photoMe7Url = "" + new URL("../images/photo_me7.jpg", import.meta.url).href;
const photoMe8Url = "" + new URL("../images/photo_me8.jpg", import.meta.url).href;
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
    id: "photo-me-1",
    title: "",
    src: photoMe1Url
  },
  {
    id: "photo-me-2",
    title: "",
    src: photoMe2Url
  },
  {
    id: "photo-me-3",
    title: "",
    src: photoMe3Url
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
  },
  {
    id: "photo-me-6",
    title: "",
    src: photoMe6Url
  },
  {
    id: "photo-me-7",
    title: "",
    src: photoMe7Url
  },
  {
    id: "photo-me-8",
    title: "",
    src: photoMe8Url
  },
  {
    id: "avatar",
    title: "",
    src: avatarUrl
  }
];
const figma1Url = "" + new URL("../images/figma1.jpg", import.meta.url).href;
const project2Url = "" + new URL("../images/project2.jpg", import.meta.url).href;
const project3Url = "" + new URL("../images/project3.jpg", import.meta.url).href;
const project4Url = "" + new URL("../images/project4.jpg", import.meta.url).href;
const project5Url = "" + new URL("../images/project5.jpg", import.meta.url).href;
const project7Url = "" + new URL("../images/project7.jpg", import.meta.url).href;
const projectImageUrls = {
  figma1: figma1Url,
  project2: project2Url,
  project3: project3Url,
  project4: project4Url,
  project5: project5Url,
  project7: project7Url
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
  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.resumeProjectUrl;
  });
}
function setProfilePhotos() {
  const mainPhoto = document.body.dataset.page === "about" ? profilePhotos.find((photo) => photo.id === "photo-me-4") : profilePhotos[0];
  if (!mainPhoto) {
    return;
  }
  document.querySelectorAll("[data-profile-photo]").forEach((image) => {
    image.src = mainPhoto.src;
  });
}
function setProjectImages() {
  document.querySelectorAll("[data-project-image]").forEach((image) => {
    const imageKey = image.dataset.projectImage;
    const imageUrl = projectImageUrls[imageKey];
    if (imageUrl) {
      image.src = imageUrl;
    }
  });
}
function initScrollTopButtons() {
  document.querySelectorAll("[data-scroll-top]").forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
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
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
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
