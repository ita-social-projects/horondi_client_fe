export const LanguageAndContactsSelectors = ({
  Language,
  Contacts: { loading, contacts }
}) => ({
  contacts,
  loading,
  language: Language.language
});
