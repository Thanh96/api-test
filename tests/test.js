const axios = require('axios');
const constants = require('./common/constants');

describe('Countries API', () => {
  it('Query: /all', async() => {
    await axios
      .get(`${constants.URL}/all`)
      .then((res) => {
        // status 
        expect(res.status).toBe(200);

        // data as array
        expect(Array.isArray(res.data)).toBe(true);

        // data have some attributes
        expect(res.data[0]).toHaveProperty('name');
        expect(res.data[0]).toHaveProperty('capital');
        expect(res.data[0]).toHaveProperty('region');
        expect(res.data[0]).toHaveProperty('languages');
        expect(res.data[0]).toHaveProperty('maps');
        expect(res.data[0]).toHaveProperty('flag');
        expect(res.data[0]).toHaveProperty('timezones');
      });
  });

  it('Query: /name', async() => {
    const country = 'Namibia';
    await axios
      .get(`${constants.URL}/name/${country}`)
      .then(res => {
        // status 
        expect(res.status).toBe(200);

        // data as array
        expect(Array.isArray(res.data)).toBe(true);

        // data has length as 1
        expect(res.data).toHaveLength(1);

        // data has name
        expect(res.data[0].name.common).toBe(country);
      });
  });
});
