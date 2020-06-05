import UserService from './UserService';

export default class ProductsService extends UserService {
  getProductById = async (id) => {
    const product = await this.getResource(`products/${id}`);
    return product[0];
  };

  getProductsByFilter = async (filter) => {
    let queryString = 'products/?';
    const {
      brand,
      color,
      category,
      catalog,
      currentPage,
      postsPerPage,
      sortByPrice,
      sortByRate,
      searchTerm
    } = filter;
    if (brand) {
      queryString = `${queryString}&brand=${brand}`;
    }
    if (color) {
      queryString = `${queryString}&color=${color}`;
    }
    if (category) {
      queryString = `${queryString}&category=${category}`;
    }
    if (catalog) {
      queryString = `${queryString}&catalog=${catalog}`;
    }
    if (currentPage > -1) {
      queryString = `${queryString}&currentpage=${currentPage}`;
    }
    if (postsPerPage) {
      queryString = `${queryString}&postsperpage=${postsPerPage}`;
    }
    if (sortByPrice) {
      queryString = `${queryString}&sortbyprice=${sortByPrice}`;
    }
    if (sortByRate) {
      queryString = `${queryString}&sortbyrate=${sortByRate}`;
    }
    if (searchTerm) {
      queryString = `${queryString}&searchTerm=${searchTerm}`;
    }
    const products = await this.getResource(queryString);
    return products;
  };

  getProductProperties = async (id) => {
    const product = await this.getResource(`products/${id}`);
    const { propetries } = product[0];
    return propetries;
  };

  getOneProductPropertie = async (id) => {
    const productPropertie = await this.getResource(
      `products/propetries/${id}`
    );
    return productPropertie;
  };

  getProductProperties = async (id) => {
    const product = await this.getResource(`products/${id}`);
    const { propetries } = product[0];
    return propetries;
  };

  getOneProductPropertie = async (id) => {
    const productPropertie = await this.getResource(
      `products/propetries/${id}`
    );
    return productPropertie;
  };
}
