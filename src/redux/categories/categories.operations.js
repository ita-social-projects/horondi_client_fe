const query = `query {
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

export default query;
