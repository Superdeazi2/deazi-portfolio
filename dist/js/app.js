const experienceItems = [
  {
    id: "keylink",
    title: "KeyLink Agency",
    role: "Frontend Developer",
    period: "10.25 – 01.26",
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
    title: "Aagency",
    role: "Frontend Developer",
    period: "06.25 – 08.25",
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
    title: "Aliot / EcoReef",
    role: "Frontend Developer",
    period: "10.24 – 04.25",
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
    period: "12.23 – 02.24",
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
const avatarUrl = "/images/avatar.png";
const photo2026JanuaryUrl = "/images/photo_2026-01-13_13-58-41.jpg";
const photo2026MarchFirstUrl = "/images/photo_2026-03-27_13-03-46.jpg";
const photo2026MarchSecondUrl = "/images/photo_2026-03-27_13-04-32.jpg";
const photo2026JuneFirstUrl = "/images/photo_2026-06-15_22-31-08.jpg";
const photo2026JuneMainUrl = "/images/photo_2026-06-15_22-33-31.jpg";
const photoMe1Url = "/images/photo_me1.png";
const photoMe2Url = "/images/photo_me2.png";
const photoMe3Url = "/images/photo_me3.png";
const photoMe4Url = "/images/photo_me4.png";
const resumeProjectUrl = "/docs/resume-project.txt";
const profileLinks = {
  resumeProjectUrl
};
const profilePhotos = [
  {
    id: "photo-2026-06-15-main",
    title: "",
    src: photo2026JuneMainUrl
  },
  {
    id: "avatar",
    title: "",
    src: avatarUrl
  },
  {
    id: "photo-2026-06-15",
    title: "",
    src: photo2026JuneFirstUrl
  },
  {
    id: "photo-2026-03-27-1",
    title: "",
    src: photo2026MarchFirstUrl
  },
  {
    id: "photo-2026-03-27-2",
    title: "",
    src: photo2026MarchSecondUrl
  },
  {
    id: "photo-2026-01-13",
    title: "",
    src: photo2026JanuaryUrl
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
  }
];
setResumeLinks();
renderExperienceLists();
initStackCarousel();
initPhotoGallery();
initProjectLightbox();
function setResumeLinks() {
  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    link.href = profileLinks.resumeProjectUrl;
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
