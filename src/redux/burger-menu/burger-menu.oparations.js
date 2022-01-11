import { getItems } from '../../utils/client';

export const getCategoriesForBurgerMenu = async () => {
  const getCategoriesForBurgerMenuQuery = `
  query {
    getCategoriesForBurgerMenu{
      category {
        _id
        name {
          lang
          value
        }
      }
      models {
        _id
        name {
          lang
          value
        } 
      }
    }
  }`;
  const result = await getItems(getCategoriesForBurgerMenuQuery);

  return result?.data?.getCategoriesForBurgerMenu;
};
