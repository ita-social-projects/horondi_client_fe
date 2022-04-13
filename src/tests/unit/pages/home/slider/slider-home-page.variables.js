import { getAllSlides } from '../../../../../pages/home/operations/slider/slider.queries';

export const mockSlides = [
  {
    request: { query: getAllSlides },
    result: {
      loading: false,
      data: {
        getAllSlides: {
          items: [
            {
              _id: '60439b323e06ad3edcdb7b07',
              images: { large: 'large_id73cf0klxwzmqo_slider_1.png' },
              show: true,
              link: 'news/604398f9a7532c33dcb326dc-spivachka-garza-pro-brend-horondi',
              title: [
                { lang: 'ua', value: 'Співачка GARZA про бренд HORONDI' },
                { lang: 'en', value: 'Singer GARZA about the HORONDI brand' }
              ],
              description: [
                {
                  lang: 'ua',
                  value:
                    'Українська співачка GARZA — дівчина, яка цінує свободу, знаходиться в стані абсолютної любові та гармонії'
                },
                {
                  lang: 'en',
                  value:
                    'Ukrainian singer GARZA - a girl who values ​​freedom, is in a state of absolute love and harmony'
                }
              ],
              translations_key: '6186ac9e4ab2540c5938a012'
            },
            {
              _id: '6043a7bf3e06ad3edcdb7b0a',
              images: { large: 'large_id73cf0klxx1h21_slider_2.png' },
              show: true,
              link: 'news/60439c4ca7532c33dcb326dd-alternatyva-vsim-ryukzakam-ryukzaky-z-yaskravym-hobelenom-yak-novyi-trend-sezonu',
              title: [
                {
                  lang: 'ua',
                  value:
                    'В Україні почали виготовляти валізи з перероблених пластикових пляшок: як вони виглядають\t'
                },
                {
                  lang: 'en',
                  value:
                    'In Ukraine, began to make suitcases from recycled plastic bottles: what they look like'
                }
              ],
              description: [
                {
                  lang: 'ua',
                  value: 'Валізи мають унікальний дизайн, досягнутий за рахунок матеріалу.'
                },
                {
                  lang: 'en',
                  value: 'Suitcases have a unique design achieved through the material.'
                }
              ],
              translations_key: '6186ae8b4ab2540c5938a015'
            },
            {
              _id: '6043a7ed3e06ad3edcdb7b0b',
              images: { large: 'large_id73cf0klxwzmqo_slider_1.png' },
              show: true,
              link: 'news/60439fd3a7532c33dcb326df-aby-rozkrytysya-yak-troyandy-navesni-naikrashchi-ryukzaky-teploho-sezonu-2021',
              title: [
                {
                  lang: 'ua',
                  value: 'Аби розкритися, як троянди навесні: найкращі сукні теплого сезону 2021'
                },
                {
                  lang: 'en',
                  value: 'To reveal how roses spring: the best dresses of the warm season 2021'
                }
              ],
              description: [
                {
                  lang: 'ua',
                  value: 'Найкращі образи, що асоціюються з розквітом.'
                },
                {
                  lang: 'en',
                  value: 'The best images associated with prosperity.'
                }
              ],
              translations_key: '6186aef14ab2540c5938a016'
            }
          ]
        }
      }
    }
  }
];
