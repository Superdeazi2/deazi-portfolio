import avatarUrl from "/assets/avatar.png";
import photoMe1Url from "/assets/photo_me1.png";
import photoMe2Url from "/assets/photo_me2.png";
import photoMe3Url from "/assets/photo_me3.png";
import photoMe4Url from "/assets/photo_me4.png";
import photoMe5Url from "/assets/photo_me5.jpg";
import photoMe6Url from "/assets/photo_me6.jpg";
import photoMe7Url from "/assets/photo_me7.jpg";
import photoMe8Url from "/assets/photo_me8.jpg";
import photoMe9Url from "/assets/photo_me9.jpg";
import resumeProjectUrl from "/assets/resume-project.txt?url";

export const profile = {
  name: "Mikhail Russkikh",
  role: "Frontend Developer",
  stackLine: "React / JavaScript / TypeScript / Tailwind CSS",
  shortText:
    "Frontend-разработчик. Работаю с сайтами, админками и веб-интерфейсами. Верстаю адаптивные страницы по Figma, делаю компоненты, формы и подключаю frontend к backend.",
  aboutText: [
    "Меня зовут Михаил Русских, я frontend-разработчик.",
    "Работал над коммерческими сайтами, админками и веб-интерфейсами. Больше всего мне нравится делать понятные и аккуратные страницы: сверстать макет, адаптировать под разные экраны, подключить данные и довести интерфейс до рабочего состояния.",
    "Сейчас ищу frontend-работу и хочу развиваться в команде, где можно делать реальные проекты и расти как разработчик.",
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
  hhUrl: "https://perm.hh.ru/resume/a4721098ff10a7855d0039ed1f4b38437a4746",
  portfolioUrl: "https://deazi-c87e25.gitlab.io",
  resumeProjectUrl,
};

export const mainStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Zustand",
  "Vite",
  "Git",
  "Figma",
  "Ruby on Rails",
  "PostgreSQL",
];

export const canDoItems = [
  "сверстать страницу по макету Figma",
  "сделать адаптив под телефон, планшет и ПК",
  "собрать форму, карточки, слайдер или галерею",
  "подключить данные с backend через API",
  "поправить существующий интерфейс и визуальные баги",
  "привести страницу к аккуратному виду",
];

export const quickStats = [
  {
    value: "1+ год",
    label: "коммерческого frontend-опыта",
  },
  {
    value: "4 проекта",
    label: "в коммерческой разработке",
  },
  {
    value: "React / Tailwind",
    label: "основной frontend-стек",
  },
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
    id: "photo-me-1",
    title: "",
    src: photoMe1Url,
  },
  {
    id: "photo-me-2",
    title: "",
    src: photoMe2Url,
  },
  {
    id: "photo-me-3",
    title: "",
    src: photoMe3Url,
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
  {
    id: "photo-me-6",
    title: "",
    src: photoMe6Url,
  },
  {
    id: "photo-me-7",
    title: "",
    src: photoMe7Url,
  },
  {
    id: "photo-me-8",
    title: "",
    src: photoMe8Url,
  },
  {
    id: "avatar",
    title: "",
    src: avatarUrl,
  },
];
