import { getAllHomeImageLooks } from '../../../../../pages/home/operations/our-looks/our-looks.queries';

export const mockAllHomeImageLooks = [
  {
    request: {
      query: getAllHomeImageLooks
    },
    result: {
      loading: true,
      data: {
        getHomePageLooksImages: [
          {
            _id: '6043c665c60c2e4b940189ad',
            images: {
              medium: 'medium_1cwxwm8ycko1fwnxj_82219419_2899665026826844_1059486498563802197_n.jpg'
            }
          },
          {
            _id: '6043c7448bde3c271c57b73c',
            images: {
              medium:
                'medium_1cwxwm8ycko1fqigw_132578827_3426923774100964_7983029416711741951_n.jpg'
            }
          }
        ]
      }
    }
  }
];
