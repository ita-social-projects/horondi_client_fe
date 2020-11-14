const query = `query {
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
export default query;
