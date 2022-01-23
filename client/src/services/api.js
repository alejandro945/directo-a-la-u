import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
});

export async function getPassangers() {
    return await instance.get(`passengers`);
}

export async function addPassanger(passenger) {
  return await instance.post(`passengers/new`, passenger);
}

export async function getPayment(date) {
    return await instance.get('payment', {
        params: {
          Date: date
        }
      });
}

