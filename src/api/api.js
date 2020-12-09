const api_url = 'http://www.mocky.io/v2/5c923b0932000029056bce39';


async function getApiData() {
    const response = await fetch(api_url);
    const data = await response.json();
    return data;   
}

getApiData();

export default getApiData;