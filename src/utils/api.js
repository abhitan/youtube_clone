import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY || "a2f156aba8msha74ec5bd3e944d8p102b99jsn88d2fdf83fb3",
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};