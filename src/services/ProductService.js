import ClientService from './ClientService';

class ProductsService extends ClientService {
  getProductById = async (id) => {
    const product = await this.getResource(`products/${id}`);
    return product[0];
  };

  getProductsByFilter = async (filter) => {
    let queryString = 'products/?';
    const {
      color,
      category,
      catalog,
      currentPage,
      postsPerPage,
      sortByPrice,
      sortByRate,
      searchTerm
    } = filter;
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
    const { properties } = product[0];
    return properties;
  };

  getOneProductProperty = async (id) => {
    const productProperty = await this.getResource(`products/properties/${id}`);
    return productProperty;
  };
}
const productService = new ProductsService();

export default productService;
