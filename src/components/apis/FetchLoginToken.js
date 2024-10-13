import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const fetchLoginToken = (uri, payload) => {
    const url = `${BASE_URL}${uri}`;
    return axios.post(url, payload).catch((error) => {
        console.log('Error posting data to URL: ', url, 'Error', error);
        throw error;
    });
};

export default fetchLoginToken;