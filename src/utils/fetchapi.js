// import {axios} from "axios";

const Base = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_TOKEN,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};


export const fetchApi = async (url) =>{
  const data = await axois.get(`${Base}${url}`, options)
  return data
}