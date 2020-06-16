import axios from 'axios';

class GraphQlService {
  getItems = (query) =>
    axios.post(
      'http://localhost:5000/graphql',
      { query },
      { headers: { 'Content-Type': 'application/json' } }
    );
}

const graphqlService = new GraphQlService();
export default graphqlService;
