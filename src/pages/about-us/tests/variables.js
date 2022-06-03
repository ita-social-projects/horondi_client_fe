import { getBusinessTextByCode } from '../operation/about-us.queries';
import { ABOUT_US_CODE } from '../constants';

export const uaTitle = 'Рюкзаки як терапія';
export const enTitle = 'Backpacks as therapy';
export const firstSectionUaTitle = 'Сашко Горонді';
export const firstSectionEnTitle = 'Sashko Horondi';
export const imgLabel = 'IMG';
export const mockFirstSectionId = '8aa1162e-cac7-11ec-9d64-0242ac120002';
export const mockTranslationsKey = '61801f62d63e5d40d8f09f07';

export const mockBusinessPage = {
  __typename: 'BusinessText',
  _id: '5fa034039a59a906f0610e37',
  code: 'about-us',
  languages: ['ua', 'en'],
  sectionsImgs: [
    {
      id: '8aa1162e-cac7-11ec-9d64-0242ac120002',
      name: 'Rectangle 779.png',
      src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu48agl3fzuh6u_Rectangle 779.png'
    },
    {
      id: 'afe09df6-cac7-11ec-9d64-0242ac120002',
      name: '55fc9d691404556b556461c240f08b21.jpg',
      src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn0aa0_55fc9d691404556b556461c240f08b21.jpg'
    },
    {
      id: 'bbe3959a-cac7-11ec-9d64-0242ac120002',
      name: 'image 282.jpg',
      src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn488z_image 282.jpg'
    }
  ],
  footerImg: {
    name: 'small_vgu4cfsl2yn4y8o_36edf87e720064745a4d759cedcf32af.jpg',
    src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu48agl3fzvlk7_small_vgu4cfsl2yn4y8o_36edf87e720064745a4d759cedcf32af.jpg'
  },
  translationsKey: '61801f62d63e5d40d8f09f07'
};

export const mockTranslated = {
  title: 'Рюкзаки як терапія',
  sections: [
    {
      id: '8aa1162e-cac7-11ec-9d64-0242ac120002',
      title: 'Сашко Горонді',
      text: '<p>Привіт!! Я Олександр Горонді – засновник бренду HORONDI. Народився та виріс на Закарпатті і по правді кажучи - перші 20 років мого життя були далеко не самим приємними для спогадів чи розповідей. У мене не було на кого рівнятись, від кого черпати натхнення та отримувати знання про навколишній світ, як жити в ньому і по яких правилах. Тому, не маючи початково закладеного підґрунту правильних моральний та духовних цінностей - я був підлітком, який легко потрапляє під вплив. Хоч я і робив погані речі в житті, поганою людиною я себе не вважав. Робив все те, що робили люди кругом, мовчки і без зайвих запитань.</p><p><br></p><p>Проте, десь у глибині ще жив той справжній я, якого доводилось приховувати, щоб мати змогу існувати в середовищі, де я зростав. Я завжди хотів вірити, що десь у світі для кожного з нас є особливе місце. Місце, де кожний з нас може наповнитись барвами життя, розквітнути як весняна квітка розцвітає під теплими проміннями ранішнього сонця, приносити радість оточуючим тебе людям. І, якби сталось так, що тим першим «вчителем», якого я зустрів на своєму шляху був би хтось куди більш доброзичливий тоді хтозна як все склалось б.</p>',
      img: {
        name: 'Rectangle 779.png',
        src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu43j8l2z679al_Rectangle 779.png'
      }
    },
    {
      id: 'afe09df6-cac7-11ec-9d64-0242ac120002',
      title: '',
      text: '<p>Але сталось як сталось і я вдячний цьому, бо ця, хоч і терниста, стежка привела мене сюди. Шлях був довгий, але це історія зі щасливим кінцем і мені вдалось віднайти себе і зайнятись власним ремеслом. Це справа, яка дарує радість людям навколо. Справа – заради якої я просинаюсь зранку. Справа, яка мотивує мене рухатись вперед.</p><p>Можливо, не варто було писати цього всього вище, так як не виключено, що ціль Вашого візиту просто купити річ, яка буде служити Вам багато років і дарувати радість. Але HORONDI - це не просто речі, які пошиті десь далеко за кордоном автоматизованими станками для шиття. HORONDI - це дещо більше. Кожна річ, будь це наплічник, гаманець чи сумочка – всі вони наділені душею, кожній з них я віддаю частинку своєї любові і в такий спосіб маю можливість розділяти її з людьми. В світі немає нічого благороднішого для мене ніж можливість викликати щиру посмішку на обличчях оточуючих і бачити радість в їхніх очах. Тому, купуючи HORONDI – Ви даєте мені можливість робити це.</p>',
      img: {
        name: '55fc9d691404556b556461c240f08b21.jpg',
        src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn0aa0_55fc9d691404556b556461c240f08b21.jpg'
      }
    },
    {
      id: 'bbe3959a-cac7-11ec-9d64-0242ac120002',
      title: 'Наша команда',
      text: '<p>Наша команда складається з п‘яти осіб, де кожен вірить в те, що робить. Ми працюємо від зорі до зорі, щоб Ви могли вчасно отримати свій HORONDI. Але при цьому ми не забуваємо про якість, яку Ви також заслуговуєте. Вся наша продукція пошита з якісної та приємної на дотик тканини з додатковим прошитим шаром дубляжу, що додає міцності та водостійкості. Дно зроблене з міцної тканини Кордура, шкіри чи еко-шкіри.</p><p><br></p><p>HORONDI розташований у Львові і місце, де ми створюємо нашу продукцію завбільшки, як звичайна кімната у Вашому домі. Тому, зараз ми не можемо похвалитись масштабами нашого підприємства, але ми ще молоді і тільки робимо перші кроки в цьому напрямку і з Вашою допомогою та підтримкою у нас все вийде!</p>',
      img: {
        name: 'image 282.jpg',
        src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn488z_image 282.jpg'
      }
    }
  ]
};

export const mocks = [
  {
    request: {
      query: getBusinessTextByCode,
      variables: { code: ABOUT_US_CODE }
    },
    result: {
      data: {
        getBusinessTextByCode: mockBusinessPage
      }
    }
  }
];
