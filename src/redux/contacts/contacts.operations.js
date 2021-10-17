import { getItems } from '../../utils/client';

const getContacts = async () => {
  const getContactsQuery = `
    query {
      getContacts {
        items {
          _id
          phoneNumber
          openHours {
            lang
            value
          }
          address {
            lang
            value
          }
          email
          link {
            lat
            lon
          }
        }
      }
    }`;
  const result = await getItems(getContactsQuery);

  return result?.data?.getContacts;
};

export { getContacts };
