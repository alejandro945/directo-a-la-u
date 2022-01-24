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

export async function filter(data) {
  return await instance.get(`passengers`,data);
}

export async function addPayment(payment) {
  return await instance.post(`payments/new`, payment);
}

export async function editPayment(payment) {
  return await instance.post(`payments/new`, payment);
}

