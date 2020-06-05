const catalogsLoaded = (newCatalogs) => ({
  type: 'CATALOGS_LOADED',
  payload: newCatalogs
});

const catalogsRequested = () => ({
  type: 'CATALOGS_REQUESTED'
});

const catalogLoaded = (newCatalog) => ({
  type: 'CATALOG_LOADED',
  payload: newCatalog
});

export { catalogsLoaded, catalogLoaded, catalogsRequested };
