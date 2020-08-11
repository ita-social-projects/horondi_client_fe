export const SHOW_FILTER_BUTTON_TEXT = [
  {
    lang: 'uk',
    value: 'Показати фільтри'
  },
  {
    lang: 'eng',
    value: 'Show Filter'
  }
];

export const HIDE_FILTER_BUTTON_TEXT = [
  {
    lang: 'uk',
    value: 'Сховати фільтри'
  },
  {
    lang: 'eng',
    value: 'Hide Filter'
  }
];

export const NONE_PATTERN = [
  {
    lang: 'uk',
    value: 'Немає'
  },
  {
    lang: 'eng',
    value: 'None '
  }
];

export const SEARCH_TEXT = ['Пошук', 'Search'];

export const PRICE_TEXT = ['Ціна', 'Price Range'];

export const CATERGORY_TEXT = ['Категорії', 'Category'];

export const COLORS_TEXT = ['Колір', 'Colors'];

export const PATTERN_TEXT = ['Гобелен', 'Pattern'];

export const IS_HOT_TEXT = ['Популярні', 'Hot Products'];

export const FILTER_BUTTON_TEXT = ['Фільтр', 'Filter'];

export const CLEAR_FILTER_BUTTON_TEXT = ['Очистити', 'Clear Filter'];

export const SORT_BY_TEXT = [
  { lang: 'uk', value: 'Сортувати за:' },
  { lang: 'eng', value: 'Sort by:' }
];

export const SORT_BY_SELECT_OPTIONS = [
  {
    lang: [
      {
        lang: 'uk',
        value: 'популярністю'
      },
      { lang: 'eng', value: 'popularity' }
    ],
    optionValue: {
      name: 'popularity',
      value: -1
    }
  },
  {
    lang: [
      { lang: 'uk', value: 'від дорогих до дешевих' },
      { lang: 'eng', value: 'price (high to low) ' }
    ],
    optionValue: {
      name: 'sortDesc',
      value: -1
    }
  },
  {
    lang: [
      { lang: 'uk', value: 'від дешевих до дорогих' },
      { lang: 'eng', value: 'price (low to high) ' }
    ],
    optionValue: { name: 'sortAsc', value: 1 }
  },
  {
    lang: [
      { lang: 'uk', value: 'рейтингом' },
      { lang: 'eng', value: 'rate' }
    ],
    optionValue: {
      name: 'rate',
      value: -1
    }
  }
];

export const ITEMS_PER_PAGE = [
  {
    title: 'nine products per page',
    value: 9
  },
  { title: 'eighteen products per page', value: 18 },
  { title: 'thirty products per page', value: 30 }
];
