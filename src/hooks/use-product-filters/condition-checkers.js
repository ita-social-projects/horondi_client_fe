export const checkFirstCondition = (query, target, categoryId) =>
  !target.checked ? query.replace(categoryId, '') : query.concat(',', categoryId);
export const checkSecondCondition = (query, target) =>
  !target.checked ? query.replace(target.name, '') : query.concat(',', target.name);
