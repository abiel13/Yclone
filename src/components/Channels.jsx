import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchApi } from "../utils/fetchapi";

function Channels() {
  const { id } = useParams();
  const [Can, setCan] = useState([]);
  const [Vid, setVid] = useState([]);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      console.log(data.data.items); 
      let chan = data.data.items;
       setCan(chan);
      console.log(chan);
      console.log(Can);
    });
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      console.log(data)
    );
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      {/* <Videos video={Vid} /> */}
      channels page
    </Box>
  );
}

export default Channels;
