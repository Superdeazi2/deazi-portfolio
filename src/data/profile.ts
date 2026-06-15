import avatarUrl from "/assets/avatar.png";
import photo2026JanuaryUrl from "/assets/photo_2026-01-13_13-58-41.jpg";
import photo2026MarchFirstUrl from "/assets/photo_2026-03-27_13-03-46.jpg";
import photo2026MarchSecondUrl from "/assets/photo_2026-03-27_13-04-32.jpg";
import photo2026JuneFirstUrl from "/assets/photo_2026-06-15_22-31-08.jpg";
import photo2026JuneMainUrl from "/assets/photo_2026-06-15_22-33-31.jpg";
import photoMe1Url from "/assets/photo_me1.png";
import photoMe2Url from "/assets/photo_me2.png";
import photoMe3Url from "/assets/photo_me3.png";
import photoMe4Url from "/assets/photo_me4.png";
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
  hhUrl: "https://hh.ru/resume/a0a1eac0ff0f3cb0490039ed1f50774c6f6157",
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
    id: "photo-2026-06-15-main",
    title: "",
    src: photo2026JuneMainUrl,
  },
  {
    id: "avatar",
    title: "",
    src: avatarUrl,
  },
  {
    id: "photo-2026-06-15",
    title: "",
    src: photo2026JuneFirstUrl,
  },
  {
    id: "photo-2026-03-27-1",
    title: "",
    src: photo2026MarchFirstUrl,
  },
  {
    id: "photo-2026-03-27-2",
    title: "",
    src: photo2026MarchSecondUrl,
  },
  {
    id: "photo-2026-01-13",
    title: "",
    src: photo2026JanuaryUrl,
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
];
