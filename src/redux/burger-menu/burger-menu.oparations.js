export const getCategoriesForBurgerMenuQuery = `query {
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
