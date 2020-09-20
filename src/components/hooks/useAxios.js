import axios from 'axios';

const API_TOKEN = 'keytD9pwBZ4Dqx4l0'

const useAxios = axios.create({
  baseURL: 'https://api.airtable.com/v0/appKMrgQ3BnCNerfL',
  timeout: 4000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

export default useAxios;
