const API_KEY = "48605d2e5ed668170a59de601c5ba4d6";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=48605d2e5ed668170a59de601c5ba4d6

const getWeatherDate = {infoType, searchParams} => {

    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})
};
