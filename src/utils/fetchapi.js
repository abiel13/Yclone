import axios from "axios";

const Base = "https://youtube-v31.p.rapidapi.com/";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_React_Token,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  let items;
  const dat = await fetch(`${Base}${url}`, options).then((res) => res.json()).then(data => console.log(data));


  return dat;
};
