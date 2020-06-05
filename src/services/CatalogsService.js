import UserService from './UserService';

export default class ProductsService extends UserService {
  getAllCatalogs = async () => {
    const catalogs = await this.getResource('catalogs');
    return catalogs;
  };

  getCatalogById = async (id) => {
    const catalogs = await this.getResource(`catalogs/${id}`);
    return catalogs;
  };

  getCatalogByName = async (catalogName) => {
    const catalogs = await this.getResource(`catalogs/?catalog=${catalogName}`);
    return catalogs;
  };

  getCatalogCategories = async (catalogName) => {
    const catalogs = await this.getResource(`catalogs/?catalog=${catalogName}`);

    const { categories } = catalogs[0];
    return categories;
  };
}
