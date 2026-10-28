import photoMe4Url from "/assets/photo_me4.png";
import photoMe5Url from "/assets/photo_me5.jpg";
import photoMe9Url from "/assets/photo_me9.jpg";

export const profile = {
  name: "Mikhail Russkikh",
  role: "Frontend Developer",
  stackLine: "React / TypeScript / JavaScript / Tailwind CSS",
  shortText:
    "Frontend-разработчик с коммерческим опытом. Разрабатываю веб-интерфейсы и админ-панели на React и TypeScript, работаю с API, состоянием приложения, формами и серверными данными.",
  aboutText: [
    "Я Михаил Русских, frontend-разработчик из Перми. Разрабатываю интерфейсы на React, TypeScript и JavaScript — от адаптивной страницы до взаимодействия с API и состоянием приложения.",
    "В ALIOT / EcoReef дорабатывал React-интерфейс управления оборудованием, настройки и работу с API, в KeyLink и A.AGENCY создавал и дорабатывал сайты вместе с другим разработчиком",
    "Умею разобраться в поведении интерфейса, найти причину ошибки и довести изменение до проверяемого результата. В работе уделяю внимание обработке ошибок, удобству на мобильных устройствах и тестам для расчётной логики.",
    "В собственных проектах расширяю опыт: разрабатываю административную панель, realtime-чат и сервис коротких ссылок. Их код и демо доступны в портфолио. Ищу frontend-команду, где смогу брать ответственность за конкретные задачи и развивать продукт вместе с коллегами.",
  ],
};

export const profileLinks = {
  email: "deazinew@mail.ru",
  emailUrl: "mailto:deazinew@mail.ru",
  telegramUrl: "https://t.me/SuperDeazi",
  telegramLabel: "@SuperDeazi",
  githubUrl: "https://github.com/Superdeazi2",
  githubLabel: "Superdeazi2",
  gitlabUrl: "https://gitlab.com/Deazi",
  gitlabLabel: "Deazi",
  hhUrl: "https://hh.ru/resume/a0a1eac0ff0f3cb0490039ed1f50774c6f6157",
  portfolioUrl: "https://deazi-c87e25.gitlab.io",
};

export const mainStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React Router",
  "TanStack Query",
  "Zustand",
  "REST API",
  "Git",
  "Figma",
];

export type ProfilePhoto = {
  id: string;
  title: string;
  src: string;
};

export const profilePhotos: ProfilePhoto[] = [
  {
    id: "photo-me-9",
    title: "",
    src: photoMe9Url,
  },
  {
    id: "photo-me-4",
    title: "",
    src: photoMe4Url,
  },
  {
    id: "photo-me-5",
    title: "",
    src: photoMe5Url,
  },
];
