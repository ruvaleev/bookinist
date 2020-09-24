import axios from 'axios';

const API_TOKEN = 'keytD9pwBZ4Dqx4l0'

const httpClient = (options) => {
  return axios.create(options);
}

const airTableClient = httpClient({
  baseURL: 'https://api.airtable.com/v0/appKMrgQ3BnCNerfL',
  timeout: 10000,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`
  }
})

export default airTableClient;

export function createBook(data) {
  return (
    airTableClient.post('/books', {
      records: [
        {
          fields: data
        }
      ]
    }).then(result => result.data)
  )
};

const filestackClient = httpClient({
  baseURL: 'https://www.filestackapi.com/api',
  timeout: 10000
})

export const uploadFile = (file) => (
  filestackClient.post('/store/S3', file, {
    params: {
      key: 'ApMc58B1KTIaotdK8YzIAz'
    }
  }).then(res => { console.log(res); return res.data; })
);
