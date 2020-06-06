import ClientService from './ClientService';

class CatalogService extends ClientService {
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
const catalogService = new CatalogService();
export default catalogService;
