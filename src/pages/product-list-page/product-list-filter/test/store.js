const store = {
  Categories: {
    categories: [
      {
        _id: '6048f900fc3c0b3b34fd4992',
        code: 'accessories',
        name: [
          {
            value: 'Аксесуари',
            lang: 'ua'
          },
          {
            value: 'Accesories',
            lang: 'en'
          }
        ],
        images: [
          {
            large: 'large_4051se11kmfkhw0k_123049100_3282559045204105_4875429010179950802_o.jpg'
          },
          {
            medium: 'medium_4051se11kmfkhw0k_123049100_3282559045204105_4875429010179950802_o.jpg'
          },
          {
            small: 'small_4051se11kmfkhw0k_123049100_3282559045204105_4875429010179950802_o.jpg'
          },
          {
            thumbnail:
              'thumbnail_4051se11kmfkhw0k_123049100_3282559045204105_4875429010179950802_o.jpg'
          }
        ],
        available: null
      },
      {
        _id: '6043bdeb3e06ad3edcdb7b2d',
        code: 'backpacks',
        name: [
          {
            value: 'Рюкзаки',
            lang: 'ua'
          },
          {
            value: 'Backpacks',
            lang: 'en'
          }
        ],
        images: [
          {
            large: 'large_4051se11kmfiz59l_103.png'
          },
          {
            medium: 'medium_4051se11kmfiz59l_103.png'
          },
          {
            small: 'small_4051se11kmfiz59l_103.png'
          },
          {
            thumbnail: 'thumbnail_4051se11kmfiz59l_103.png'
          }
        ],
        available: null
      }
    ],
    sort: {
      name: 1
    },
    filters: {
      _id: [],
      search: ''
    },
    category: null,
    categoryLoading: false,
    categoryError: null,
    isDeleteDialogOpen: true,
    deleteId: '6048f900fc3c0b3b34fd4992',
    switchId: '6043bdeb3e06ad3edcdb7b2d'
  }
};

export default store;
