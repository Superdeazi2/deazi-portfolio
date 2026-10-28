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
    id: "aliot-current",
    title: "ALIOT / EcoReef",
    role: "Frontend Developer · проектная работа",
    period: "06.2026 – 10.2026",
    repositoryPrivate: true,
    shortDescription: "Дорабатывал React-интерфейс управления освещением",
    description: "Работал с существующим приложением: дорабатывал интерфейсы, состояние и взаимодействие с API",
    responsibilities: [
      "дорабатывал интерфейс на React и TypeScript",
      "работал с настройками и состоянием приложения на Zustand",
      "подключал изменения интерфейса к REST API",
      "проверял расчётную логику и граничные сценарии тестами",
    ],
    stack: ["React", "TypeScript", "Zustand", "REST API", "GitLab"],
  },
  {
    id: "keylink",
    title: "KeyLink",
    role: "Frontend Developer · совместная разработка",
    period: "10.2025 – 01.2026",
    siteUrl: "https://keylink.events/",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription:
      "Многостраничный сайт на Ruby on Rails, Tailwind CSS и JavaScript.",
    description:
      "Дорабатывал адаптивные страницы и административные интерфейсы в существующем Rails-приложении: контентные блоки с изображениями, слайдер и навигацию между проектами.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал галереи, карусели, пагинацию и интерактивные блоки",
      "участвовал в разработке админ-панели",
      "расширял контентные блоки и управление изображениями",
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
    period: "06.2025 – 08.2025",
    siteUrl: "https://aagency.agency/ru",
    repositoryLabel: "GitLab",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Адаптивный сайт по макетам Figma.",
    description:
      "Совместно с другим разработчиком создавал дизайн и интерфейсы: адаптивные страницы, анимации, слайдеры и карусели в приложении Rails.",
    responsibilities: [
      "верстал адаптивные страницы по макетам Figma",
      "делал анимации, слайдеры, карусели и fullscreen-блоки",
      "совместно прорабатывал дизайн и интерфейсы",
      "подключал frontend к Ruby on Rails",
      "работал с GitLab и вносил правки по задачам заказчика",
    ],
    stack: ["Ruby on Rails", "Tailwind CSS", "JavaScript", "GitLab", "Figma"],
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
    period: "12.2023 – 02.2024",
    siteUrl: null,
    repositoryLabel: "GitHub",
    repositoryUrl: null,
    repositoryPrivate: true,
    shortDescription: "Сайт для продукта Контур.Маркет.",
    description:
      "Подготовил макеты в Figma и адаптивную вёрстку сайта на Bootstrap, работал с интерфейсом формы обратной связи.",
    responsibilities: [
      "собрал требования и подготовил техническое задание",
      "сделал макеты сайта и логотип в Figma",
      "сверстал адаптивный сайт на Bootstrap",
      "добавил светлую и тёмную тему",
      "сделал форму обратной связи",
      "работал с Git, GitHub и Fork",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git",
      "Figma",
    ],
  },
];
