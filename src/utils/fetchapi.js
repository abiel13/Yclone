import  axios  from "axios";

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


export const fetchApi = async (url) =>{
  let items;
  const data = await fetch(`${Base}${url}`, options).then(data => {
    items = data.items
  })
  console.log(items)

  return items
}
