import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const fetchBooks = async (uri, payload) => {
    const url = `${BASE_URL}${uri}`;
    try {
        const response = await axios.get(url, payload);
        return response;
    } catch (error) {
        console.log('Error fetching Books from: ', url, 'Error', error);
        throw error;
    }
    // return await axios.get(url, payload).catch((error) => {
    //     console.log('Error fetching Books from: ', url, 'Error', error);
    //     throw error;
    // });
};

export default fetchBooks;