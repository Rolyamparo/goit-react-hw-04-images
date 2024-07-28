import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43061376-077d2ae6c0f35aaf7ffe657eb';

export const getAPI = async (query, page) => {
    const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_tupe=photo&orientation+horizontal&per_page=12`;

    const response = await axios.get(url);

    return response.data;
}
