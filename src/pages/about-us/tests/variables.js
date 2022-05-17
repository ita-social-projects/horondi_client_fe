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
  title: [
    {
      lang: 'ua',
      value: uaTitle
    },
    {
      lang: 'en',
      value: enTitle
    }
  ],
  sections: [
    {
      lang: 'ua',
      value: [
        {
          id: mockFirstSectionId,
          title: firstSectionUaTitle,
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
    },
    {
      lang: 'en',
      value: [
        {
          id: mockFirstSectionId,
          title: firstSectionEnTitle,
          text: "<p>Hi there!! I'm Oleksandr Horondi, founder of the HORONDI brand. I was born and grew up in Zakarpattia Oblast and, truth be told, the early 20 years of my life aren't always pleasant to recall or speak about. I had no one to look up to or be inspired by; no one taught me about the world, how to live in it and by what set of rules. Without any initial foundation of moral and spiritual values, I was an easily influenced teenager. Still, despite having done things I'm not proud of, I didn't consider myself a bad person. I just followed the lead of people around me, no questions asked.</p><p><br></p><p>However, somewhere deep inside, a real me was hiding to survive the environment I was growing up in. I've always wanted to believe that each of us has a special place in the world. A place where one can be filled with all colors of life, blossom like a spring flower blooms under the warm beams of the morning son, and bring joy to the people around. If the first «teacher» I met in my path were a much kinder one, who knows how it all would have turned out.</p>",
          img: {
            name: 'Rectangle 779.png',
            src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu43j8l2z679al_Rectangle 779.png'
          }
        },
        {
          id: 'afe09df6-cac7-11ec-9d64-0242ac120002',
          title: '',
          text: "<p>Be that as it may, I am grateful, for this road, bumpy as it was, has lead me here. It was a long journey, but this story has a happy ending, as I've managed to find myself and my craft. This pursuit brings joy to the people around me. It gets me out of bed in the morning. It motivates me to keep improving.</p><p>Maybe I shouldn't have written all of that, as it's likely that you came here simply to buy an item that will serve you and bring joy for years to come. However, HORONDI is not machine-made products from somewhere far abroad. HORONDI is something more. Every item, be it a backpack, a wallet, or a bag, contains a sliver of my soul I've put in there to share it with people. There is nothing more precious to me in the whole world than an opportunity to bring a genuine smile to the faces of people around me and see joy in their eyes. That is why, when you buy HORONDI, you give me this opportunity.</p>",
          img: {
            name: '55fc9d691404556b556461c240f08b21.jpg',
            src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn0aa0_55fc9d691404556b556461c240f08b21.jpg'
          }
        },
        {
          id: 'bbe3959a-cac7-11ec-9d64-0242ac120002',
          title: 'Our team',
          text: "<p>Our team consists of five people, all of whom believe in what we do. We work from dawn till dusk for you to receive your HORONDI in time. In addition, we make sure you receive the high quality you deserve. Our entire stock is made from high-quality fabric that is pleasant to the touch and has an additional durable and water-resistant layer. The bottom can be made from durable Cordura, leather or eco leather.</p><p><br></p><p>HORONDI is located in Lviv, and the space where we create our products is as large as a usual room in your place. Therefore, we can't boast the scale of our business yet. But we are still young and only making our first steps. With your help and support, we can do anything!</p>",
          img: {
            name: 'image 282.jpg',
            src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn488z_image 282.jpg'
          }
        }
      ]
    }
  ],
  text: [
    {
      lang: 'ua',
      value: 'uatext'
    },
    {
      lang: 'en',
      value: 'asfs'
    }
  ],
  languages: ['ua', 'en'],
  footerImg: {
    name: '36edf87e720064745a4d759cedcf32af.jpg',
    src: 'https://horondi.blob.core.windows.net/horondi/images/small_vgu4cfsl2yn4y8o_36edf87e720064745a4d759cedcf32af.jpg'
  },
  translationsKey: mockTranslationsKey
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
