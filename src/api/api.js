import axios from 'axios';

const api = axios.create({baseURL:'http://www.mocky.io/v2/5c923b0932000029056bce39'});


async function getApiData() {
    const { data } = await api.get(`${api}`);
    return data;
}

export default api;