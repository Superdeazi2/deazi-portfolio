export type ExperienceItem = {
  id: string;
  title: string;
  role: string;
  period: string;
  siteUrl?: string | null;
  repositoryUrl?: string | null;
  repositoryLabel?: string;
  repositoryPrivate?: boolean;
  shortDescription: string;
  description: string;
  responsibilities?: string[];
  stack: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "keylink",
    title: "KEY.LINK",
    role: "Frontend Developer",
    period: "10.25 – 01.26",
    siteUrl: "https://keylink.events/",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription:
      "Многостраничный сайт на Ruby on Rails, Tailwind CSS и JavaScript.",
    description:
      "Делал адаптивные страницы, галереи, карусели, пагинацию и админ-панель для управления контентом, проектами, фотографиями и SEO.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал галереи, карусели, пагинацию и интерактивные блоки",
      "участвовал в разработке админ-панели",
      "настраивал управление контентом, проектами, фотографиями и SEO",
      "интегрировал frontend с backend",
    ],
    stack: [
      "Ruby on Rails",
      "Tailwind CSS",
      "JavaScript",
      "PostgreSQL",
      "GitLab",
      "Figma",
    ],
  },
  {
    id: "aagency",
    title: "A.AGENCY",
    role: "Frontend Developer",
    period: "06.25 – 08.25",
    siteUrl: "https://aagency.agency/ru",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Адаптивный сайт по макетам Figma.",
    description:
      "Делал анимации, слайдеры, карусели, fullscreen-блоки и поддержку двух языков: русский и английский.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал анимации, слайдеры, карусели и fullscreen-блоки",
      "добавлял поддержку русского и английского языка",
      "подключал frontend к Ruby on Rails",
      "работал с GitLab и вносил правки по задачам заказчика",
    ],
    stack: ["Ruby on Rails", "Tailwind CSS", "JavaScript", "GitLab", "Figma"],
  },
  {
    id: "aliot",
    title: "Aliot",
    role: "Frontend Developer",
    period: "10.24 – 04.25",
    siteUrl: null,
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Интерфейс управления светодиодной лампой на React.",
    description:
      "Делал формы, графики, тёмную тему, адаптивную верстку и работу с настройками через Zustand.",
    responsibilities: [
      "разрабатывал интерфейс управления лампой на React",
      "делал макеты и прототипы в Figma",
      "верстал адаптивные страницы, формы и графики",
      "настраивал работу с API",
      "использовал Zustand для хранения настроек и состояния интерфейса",
      "добавил тёмную тему и небольшие анимации",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Zustand", "REST API", "Figma"],
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
    description:
      "Делал макеты в Figma, адаптивную верстку на Bootstrap, форму обратной связи, простую админ-панель и подключение к PostgreSQL через Node.js.",
    responsibilities: [
      "собрал требования и подготовил техническое задание",
      "сделал макеты сайта и логотип в Figma",
      "сверстал адаптивный сайт на Bootstrap",
      "добавил светлую и тёмную тему",
      "сделал форму обратной связи",
      "подключил сохранение заявок через Node.js и PostgreSQL",
      "сделал простую админ-панель с авторизацией",
      "работал с Git, GitHub и Fork",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "PostgreSQL",
      "Git",
      "Figma",
    ],
  },
];
