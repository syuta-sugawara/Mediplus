import axios from 'axios';

const YELP_API_KEY =
  'WhZllJaWJqdZ4QzUi1v5Qrw5eB-JOtRN4Fb2AWtFo7tTCuXrmwXKq5ycnEW9J8ZFwRZ8FxIf8UnPDEk6P02vZtvt3bVyTtdN85AEqP6L9GXs951k5a8w6S39i-GMW3Yx';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});

const getHospitals = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 30,
        categories: 'hospitals',
        ...userLocation,
      },
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          coords: business.coordinates,
        };
      })
    )
    .catch(error => console.error(error));
};

export default {
  getHospitals
};
