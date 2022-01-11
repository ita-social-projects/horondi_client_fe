import { getItems } from '../../utils/client';

export const getAllCategories = async () => {
  const getAllCategoriesQuery = `
		query {
			getAllCategories {
				items {
					_id
					code
					name{
						lang
						value
							}
					images {
						large
								}
					available
				}
				count
			}
		}
	`;
  const result = await getItems(getAllCategoriesQuery);

  return result?.data?.getAllCategories;
};
