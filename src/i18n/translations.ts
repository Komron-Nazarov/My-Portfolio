export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",

    // Auth
    login: "Login",
    register: "Register",

    // Hero
    hero: {
      eyebrow: "SOFTWARE DEVELOPER",
      titleFirst: "I build",
      titleSecond: "digital products.",
      description:
        "I build web applications, backend systems and mobile interfaces — from architecture and engineering to a working product.",
      projects: "View projects",
      contact: "Get in touch",
      available: "Open to new opportunities",
      based: "Web · Backend · Mobile",
      role: "Software Developer",
      currentlyBuilding: "Currently building",
      digitalProducts: "Digital products",
      scroll: "Scroll",
    },

    // Admin
    admin: "Admin",
    addProject: "Add Project",
    updateProject: "Update Project",
    delete: "Delete",
    edit: "Edit",
    slug: "Slug",
    title: "Title",
    description: "Description",
    image: "Image URL",
    stack: "Stack",
    github: "GitHub",
    demo: "Demo",
    loading: "Loading...",
  },

  ru: {
    // Навигация
    home: "Главная",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",

    // Авторизация
    login: "Войти",
    register: "Регистрация",

    // Hero
    hero: {
      eyebrow: "РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
      titleFirst: "Создаю",
      titleSecond: "цифровые продукты.",
      description:
        "Разрабатываю веб-приложения, backend-системы и мобильные интерфейсы — от архитектуры и разработки до рабочего продукта.",
      projects: "Смотреть проекты",
      contact: "Связаться",
      available: "Открыт к новым проектам",
      based: "Web · Backend · Mobile",
      role: "Software Developer",
      currentlyBuilding: "Сейчас разрабатываю",
      digitalProducts: "Цифровые продукты",
      scroll: "Листайте",
    },

    // Админ-панель
    admin: "Админ",
    addProject: "Добавить проект",
    updateProject: "Обновить проект",
    delete: "Удалить",
    edit: "Редактировать",
    slug: "Слаг",
    title: "Название",
    description: "Описание",
    image: "Ссылка на изображение",
    stack: "Стек",
    github: "GitHub",
    demo: "Демо",
    loading: "Загрузка...",
  },
} as const;

export type Language = keyof typeof translations;