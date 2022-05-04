import axios from 'axios';

class WorldwideService {
  _apiBase = 'https://countriesnow.space/api/v0.1';

  async getCountries() {
    const res = await axios.get(`${this._apiBase}/countries/states`);

    return res.data.data.map((country) => country.name);
  }

  async getStatesByCountry(country) {
    const res = await axios.post(`${this._apiBase}/countries/states`, {
      country
    });

    return res.data.data.states.map((state) => state.name);
  }

  async getCitiesByState(country, state) {
    const res = await axios.post(`${this._apiBase}/countries/state/cities`, {
      country,
      state
    });

    return res.data.data;
  }
}

export default new WorldwideService();
