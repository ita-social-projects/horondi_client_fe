export const LANGUAGE = 1;

export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

export const HOMEPAGE_LOOKS_IMAGES = [
  'https://horondi.blob.core.windows.net/horondi/our-looks/img1.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img2.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img3.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img4.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img5.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img6.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img7.jpg',
  'https://horondi.blob.core.windows.net/horondi/our-looks/img8.jpg'
];

export const ABOUT_US_IMAGES = {
  hero: './images/about-us/hero-bg.jpg',
  horondi_1: './images/about-us/horondi.jpg',
  horondi_2: './images/about-us/horondi-2.jpg',
  horondi_3: './images/about-us/horondi-3.jpg',
  workPlace_1: './images/about-us/work-place.jpg',
  workPlace_2: './images/about-us/work-place-2.jpg'
};

export const CABINET_OPTIONS_NOT_LOGGED = {
  0: {
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logIn: 'Увійти'
  },
  1: {
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logIn: 'Log in'
  }
};

export const CABINET_OPTIONS_LOGGED = {
  0: {
    profile: 'Профіль',
    wishlist: 'Список уподобань',
    changeTheme: 'Змінити тему',
    logOut: 'Вийти'
  },
  1: {
    profile: 'Profile',
    wishlist: 'Wishlist',
    changeTheme: 'Change theme',
    logOut: 'Log out'
  }
};

export const HOMEPAGE_TITLES = {
  0: {
    catalog: 'Каталог',
    look: 'Стиль Горонді'
  },
  1: {
    catalog: 'Catalog',
    look: 'Horondi style'
  }
};

export const LOGO = 'HORONDI';
export const URL_LANGUAGE = 'en';

export const FOOTER_CATALOGS = {
  0: { title: 'Каталоги' },
  1: { title: 'Catalogs' }
};
export const FOOTER_INFORMATION = {
  0: {
    title: 'Інформація',
    items: [
      { id: 1, url: '/about-us', item: 'Про нас' },
      { id: 2, url: '#', item: 'Матеріали' },
      { id: 3, url: '#', item: 'Оплата і доставка' },
      { id: 4, url: '#', item: 'Умови конфіденційності' }
    ]
  },
  1: {
    title: 'Information',
    items: [
      { id: 1, url: '/about-us', item: 'About us' },
      { id: 2, url: '#', item: 'Materials' },
      { id: 3, url: '#', item: 'Payment & shipping' },
      { id: 4, url: '#', item: 'Privacy policy' }
    ]
  }
};

export const FOOTER_CONTACTS = {
  0: {
    title: 'Контакти',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Львів, вул.Угорська,2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Показати на мапі'
    }
  },
  1: {
    title: 'Contacts',
    items: [
      { id: 1, url: '#', item: '+38 012 345 678' },
      { id: 2, url: '#', item: 'horondi@gmail.com' },
      { id: 3, url: '#', item: 'Lviv, Ugorska str.2' }
    ],
    map: {
      id: 4,
      url:
        'https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A3%D0%B3%D0%BE%D1%80%D1%81%D1%8C%D0%BA%D0%B0,+2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8130045,24.0348852,17z/data=!3m1!4b1!4m5!3m4!1s0x473ae7fa9be7c3b5:0xb30b2516d705bae6!8m2!3d49.8130011!4d24.0370739',
      item: 'Show on map'
    }
  }
};

export const FOOTER_SOCIAL_NETWORK_LINKS = {
  0: {
    title: 'Ми в соцмережах'
  },
  1: {
    title: 'Social networks'
  },
  facebook: 'https://www.facebook.com/Horondi',
  instagram: 'https://www.instagram.com/horondi'
};
