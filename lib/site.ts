export const SITE_URL = "https://chip-gudermes.ru";

export const BUSINESS = {
  name: "Chiptuning.gudermes",
  shortName: "Chiptuning.gudermes",
  phone: "+79380232893",
  phoneDisplay: "8 938 023-28-93",
  whatsapp: "https://wa.me/79380232893",
  instagram: "https://www.instagram.com/chiptuning.gudermes/",
  latitude: 43.343266,
  longitude: 46.097857,
  streetAddress: "Проспект Терешковой, 1",
  addressLocality: "Гудермес",
  addressRegion: "Чеченская Республика",
  addressCountry: "RU",
  fullAddress: "Проспект Терешковой, 1, Гудермес",
  twoGisUrl: "https://2gis.ru/gudermes/geo/70030076166881715",
} as const;

export const MAP_LINKS = {
  yandex: `https://yandex.ru/maps/?rtext=~${BUSINESS.latitude},${BUSINESS.longitude}&rtt=auto`,
  google: `https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.latitude},${BUSINESS.longitude}`,
  twoGisRoute: `https://2gis.ru/routeSearch/rsType/car/to/${BUSINESS.longitude},${BUSINESS.latitude}`,
  twoGis: BUSINESS.twoGisUrl,
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const MAIN_NAV: NavItem[] = [
  { href: "/avtoelektrik/", label: "Автоэлектрик" },
  { href: "/diagnostika/", label: "Диагностика" },
  { href: "/chip-tuning/", label: "Чип-тюнинг" },
  { href: "/changan/", label: "Changan" },
  { href: "/contacts/", label: "Контакты" },
];

export type ServiceCard = {
  title: string;
  text: string;
  href: string;
};

export const HOME_SERVICES: ServiceCard[] = [
  {
    title: "Автоэлектрика",
    text: "Диагностика и настройка электронных систем автомобиля, поиск неисправностей и программные работы.",
    href: "/avtoelektrik/",
  },
  {
    title: "Диагностика автомобиля",
    text: "Компьютерная диагностика, проверка ошибок и оценка состояния электронных систем.",
    href: "/diagnostika/",
  },
  {
    title: "Чип-тюнинг",
    text: "Настройка программного обеспечения двигателя под конкретный автомобиль и задачу владельца.",
    href: "/chip-tuning/",
  },
  {
    title: "Адаптация двигателя",
    text: "Адаптационные процедуры после работ с электронными системами и блоками управления.",
    href: "/#adaptaciya-dvigatelya",
  },
  {
    title: "Адаптация АКПП",
    text: "Настройка и адаптация автоматической коробки передач после обслуживания или ремонта.",
    href: "/#adaptaciya-akpp",
  },
  {
    title: "Русификация Changan",
    text: "Русификация мультимедиа и доступные программные работы для автомобилей Changan.",
    href: "/changan/",
  },
  {
    title: "Чистка форсунок",
    text: "Проверка и очистка форсунок для восстановления корректной работы топливной системы.",
    href: "/#chistka-forsunok",
  },
  {
    title: "Замена свечей",
    text: "Замена свечей зажигания и проверка состояния системы зажигания.",
    href: "/#zamena-svechey",
  },
  {
    title: "Настройка заслонок",
    text: "Диагностика, очистка и адаптация дроссельных заслонок.",
    href: "/avtoelektrik/#nastrojka-zaslonok",
  },
];

export type RelatedLink = {
  href: string;
  title: string;
  text: string;
};

export const RELATED_BY_PAGE: Record<string, RelatedLink[]> = {
  home: [
    {
      href: "/avtoelektrik/",
      title: "Автоэлектрик",
      text: "Диагностика и настройка электроники автомобиля",
    },
    {
      href: "/diagnostika/",
      title: "Диагностика",
      text: "Компьютерная диагностика автомобиля в Гудермесе",
    },
    {
      href: "/chip-tuning/",
      title: "Чип-тюнинг",
      text: "Настройка ПО двигателя и программные работы",
    },
    {
      href: "/changan/",
      title: "Changan",
      text: "Русификация мультимедиа и адаптация",
    },
  ],
  avtoelektrik: [
    {
      href: "/diagnostika/",
      title: "Диагностика автомобиля",
      text: "Компьютерная диагностика и поиск неисправностей",
    },
    {
      href: "/changan/",
      title: "Русификация Changan",
      text: "Программные работы и настройка мультимедиа",
    },
    {
      href: "/chip-tuning/",
      title: "Чип-тюнинг",
      text: "Настройка двигателя и программные адаптации",
    },
  ],
  diagnostika: [
    {
      href: "/chip-tuning/",
      title: "Чип-тюнинг",
      text: "После диагностики можно оценить целесообразность настройки",
    },
    {
      href: "/avtoelektrik/",
      title: "Автоэлектрик",
      text: "Работа с электронными системами и блоками управления",
    },
    {
      href: "/changan/",
      title: "Changan",
      text: "Диагностика и русификация автомобилей Changan",
    },
  ],
  "chip-tuning": [
    {
      href: "/diagnostika/",
      title: "Диагностика",
      text: "Проверка автомобиля перед чип-тюнингом",
    },
    {
      href: "/avtoelektrik/",
      title: "Автоэлектрик",
      text: "Электронные системы, адаптации и блоки управления",
    },
    {
      href: "/changan/",
      title: "Changan",
      text: "Русификация и программные работы",
    },
  ],
  changan: [
    {
      href: "/diagnostika/",
      title: "Диагностика",
      text: "Автодиагностика и проверка электронных систем",
    },
    {
      href: "/avtoelektrik/",
      title: "Автоэлектрик",
      text: "Настройка электроники и программные работы",
    },
    {
      href: "/chip-tuning/",
      title: "Чип-тюнинг",
      text: "Настройка двигателя, если это уместно для авто",
    },
  ],
  contacts: [
    {
      href: "/avtoelektrik/",
      title: "Автоэлектрик",
      text: "Диагностика и настройка электроники",
    },
    {
      href: "/diagnostika/",
      title: "Диагностика",
      text: "Компьютерная диагностика автомобиля",
    },
    {
      href: "/chip-tuning/",
      title: "Чип-тюнинг",
      text: "Настройка ПО и адаптации",
    },
  ],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Где находится автосервис?",
    answer:
      "Chiptuning.gudermes находится в Гудермесе по адресу: проспект Терешковой, 1. Маршрут можно построить в Яндекс Картах, Google Maps или 2ГИС.",
  },
  {
    question: "Как записаться?",
    answer:
      "Позвоните по номеру 8 938 023-28-93 или напишите в WhatsApp. Кратко опишите автомобиль и задачу — так будет проще сориентировать по времени.",
  },
  {
    question: "Что входит в диагностику автомобиля?",
    answer:
      "Обычно это подключение диагностического оборудования, считывание ошибок, проверка параметров электронных систем и понятное объяснение результата. Компьютерная диагностика помогает сузить круг причин, но не всегда заменяет осмотр и дополнительные проверки.",
  },
  {
    question: "Нужно ли делать диагностику перед чип-тюнингом?",
    answer:
      "Желательно. Перед настройкой важно понимать состояние двигателя и электронных систем. Если есть неисправности, сначала лучше устранить их, а уже затем обсуждать чип-тюнинг.",
  },
  {
    question: "Что такое адаптация АКПП?",
    answer:
      "Это программная настройка автоматической коробки после обслуживания, ремонта или сброса параметров. Адаптация помогает коробке корректнее подстраиваться под режимы работы автомобиля.",
  },
  {
    question: "Можно ли русифицировать Changan?",
    answer:
      "Да. В сервисе выполняется русификация мультимедиа Changan, а также доступны диагностика, адаптация и другие программные работы — в зависимости от комплектации конкретного автомобиля.",
  },
  {
    question: "Сколько времени занимает работа?",
    answer:
      "Всё зависит от задачи и состояния автомобиля. Диагностика обычно занимает меньше времени, чем чип-тюнинг, адаптации или русификация. Точнее скажем после короткого описания проблемы по телефону или в WhatsApp.",
  },
];
