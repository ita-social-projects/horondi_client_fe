export const mockedDataForLightTheme = {
  Language: { language: 0 },
  Currency: { currency: 0 },
  Products: {
    products: [
      {
        category: { _id: 'some id' },
        pattern: { _id: 'some id' },
        mainMaterial: { color: { _id: 'some id' } }
      }
    ],
    product: {
      category: { _id: 'some id' },
      pattern: { _id: 'some id' },
      mainMaterial: { color: { _id: 'some id' } }
    }
  },
  Theme: { lightMode: true }
};
export const mockedDataForDarkTheme = {
  ...mockedDataForLightTheme,
  Theme: { lightMode: false }
};
