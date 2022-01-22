import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 1000,
});

export async function getPassangers() {
    return await instance.get(`passangers`);
}

export async function addPassanger(passenger) {
  return await instance.post(`passangers/new`, passenger);
}

export async function getPayment(date) {
    return await instance.get('payment', {
        params: {
          Date: date
        }
      });
}

