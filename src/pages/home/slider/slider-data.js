import bgFirst from '../../../images/bg1.jpg';
import bgSecond from '../../../images/bg3.jpg';
import bgThird from '../../../images/7.jpg';
import routes from '../../../const/routes';

const { pathToAllProducts, pathToNews } = routes;

export const images = [
  {
    img: bgFirst,
    slideNumber: '01',
    title: 'home.sliderTitleFirst',
    description: 'home.sliderDescriptionFirst',
    linkTo: pathToAllProducts,
    buttonName: 'wishlist.wishlistButtons.empty'
  },
  {
    img: bgSecond,
    slideNumber: '02',
    title: 'home.sliderTitleSecond',
    description: 'home.sliderDescriptionSecond',
    linkTo: pathToNews,
    buttonName: 'home.readMore'
  },
  {
    img: bgThird,
    slideNumber: '03',
    title: 'home.sliderTitleThird',
    description: 'home.sliderDescriptionThird',
    linkTo: pathToAllProducts,
    buttonName: 'wishlist.wishlistButtons.empty'
  }
];
