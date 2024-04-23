// script.js

const url = 'https://user-auth2.p.rapidapi.com/token/getToken';
const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
        'X-RapidAPI-Host': 'user-auth2.p.rapidapi.com'
    },
    body: JSON.stringify({
        email: 'test@tvunetworks.com',
        password: '2B85045C8FBF6A7F277F18CD62BA49047ABC53D1D49FD43EEE3C80D129F2053B181B4BAFBA851834CD6F084CA2AAC311235F1748856DA390A88221BE49793CC3',
        expireTime: 360
    })
};

async function getToken() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        // Handle the result here, e.g., update UI, store token in local storage, etc.
    } catch (error) {
        console.error(error);
    }
}

getToken();
