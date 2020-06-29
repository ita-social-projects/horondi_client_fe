import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './about-us.style';
import { ABOUT_US_IMAGES } from '../../configs';

const AboutUs = () => {
  const styles = useStyles({ ...ABOUT_US_IMAGES });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.aboutUs}>
        <section className={styles.header}>
          <div className={styles.headerContent}>
            <Typography variant='h1' className={styles.underline}>
              РЮКЗАКИ ЯК ТЕРАПІЯ
            </Typography>
            <Typography variant='h4' className={styles.horondi}>
              HORONDI
            </Typography>
          </div>
        </section>
        <section className={styles.body}>
          <div className={styles.section}>
            <Typography variant='h3' className={styles.underline}>
              Сашко Горонді
            </Typography>
            <div className={styles.block}>
              <Typography paragraph>
                Привіт! Я Олександр Горонді – засновник бренду{' '}
                <span className={styles.horondi}>HORONDI</span>. Народився та
                виріс на Закарпатті і по правді кажучи - перші 20 років мого
                життя були далеко не самим приємними для спогадів чи розповідей.
                У мене не було на кого рівнятись, від кого черпати натхнення та
                отримувати знання про навколишній світ, як жити в ньому і по
                яких правилах. Тому, не маючи початково закладеного підґрунту
                правильних моральний та духовних цінностей - я був підлітком,
                який легко потрапляє під вплив. Хоч я і робив погані речі в
                житті, поганою людиною я себе не вважав. Робив все те, що робили
                люди кругом, мовчки і без зайвих запитань.
              </Typography>
            </div>
            <div className={styles.block}>
              <img src={ABOUT_US_IMAGES.horondi_1} alt='Oleksandr Horondi' />
              <Typography paragraph>
                Проте, десь у глибині ще жив той справжній я, якого доводилось
                приховувати, щоб мати змогу існувати в середовище, де я зростав.
                Я завжди хотів вірити, що десь у світі для кожного з нас є
                особливе місце. Місце, де кожний з нас може наповнитись барвами
                життя, розквітнути як весняна квітка розцвітає під теплими
                проміннями ранішнього сонця, приносити радість оточуючим тебе
                людям. І, якби сталось так, що тим першим «вчителем», якого я
                зустрів на своєму шляху був би хтось куди більш доброзичливий
                тоді хтозна як все склалось б.
              </Typography>
            </div>
            <div className={`${styles.block} ${styles.blockReverse}`}>
              <img src={ABOUT_US_IMAGES.horondi_2} alt='Oleksandr Horondi' />
              <Typography paragraph>
                Але сталось як сталось і я вдячний цьому, бо ця, хоч і терниста,
                стежка привела мене сюди. Шлях був довгий, але це історія зі
                щасливим кінцем і мені вдалось віднайти себе і зайнятись власним
                ремеслом. Це справа, яка дарує радість людям навколо. Справа –
                заради якої я просинаюсь зранку. Справа, яка мотивує мене
                рухатись вперед.
              </Typography>
            </div>
            <div className={styles.block}>
              <img src={ABOUT_US_IMAGES.horondi_3} alt='Oleksandr Horondi' />
              <Typography paragraph>
                Можливо, не варто було писати цього всього вище, так як не
                виключено, що ціль Вашого візиту просто купити річ, яка буде
                служити Вам багато років і дарувати радість. Але{' '}
                <span className={styles.horondi}>HORONDI</span> - це не просто
                речі, які пошиті десь далеко за кордоном автоматизованими
                станками для шиття.
                <span className={styles.horondi}>HORONDI</span> - це дещо
                більше. Кожна річ, будь це наплічник, гаманець чи сумочка – всі
                вони наділені душею, кожній з них я віддаю частинку своєї любові
                і в такий спосіб маю можливість розділяти її з людьми. В світі
                немає нічого благороднішого для мене ніж можливість викликати
                щиру посмішку на обличчях оточуючих і бачити радість в їхніх
                очах. Тому, купуючи{' '}
                <span className={styles.horondi}>HORONDI</span> – Ви даєте мені
                можливість робити це.
              </Typography>
            </div>
          </div>

          <div className={styles.section}>
            <Typography variant='h3' className={styles.underline}>
              Команда
            </Typography>
            <div className={`${styles.block} ${styles.blockReverse}`}>
              <img src={ABOUT_US_IMAGES.workPlace_1} alt='Horondi team' />
              <Typography paragraph>
                Наша команда складається з п‘ятьох чоловік, де кожен вірить в
                те, що робить. Ми працюємо від зорі до зорі, щоб Ви могли вчасно
                отримати свій
                <span className={styles.horondi}>HORONDI</span>. Але при цьому
                ми не забуваємо про якість, яку Ви також заслуговуєте. Вся наша
                продукція пошита з якісної та приємної на дотик тканини з
                додатковим прошитим шаром дубляжу, що додає міцності та
                водостійкості. Дно зроблене з міцного Оксфорду, шкіри чи
                еко-шкіри.
              </Typography>
            </div>
            <div className={styles.block}>
              <img src={ABOUT_US_IMAGES.workPlace_2} alt='Horondi team' />
              <Typography paragraph>
                <span className={styles.horondi}>HORONDI</span> розташований у
                Львові і місце, де ми створюємо нашу продукцію завбільшки, як
                звичайна кімнати у Вашому домі. Тому, зараз ми не можемо
                похвалитись масштабними нашого підприємства, але ми ще молоді і
                тільки робимо перші кроки в цьому напрямку і з Вашою допомогою
                та підтримкою у нас все вийде!
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
