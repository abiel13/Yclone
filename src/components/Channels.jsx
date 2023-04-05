import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos , ChannelCard } from "./";
import { fetchApi } from "../utils/fetchapi";

function Channels() {
  const { id } = useParams();
  const [channelid, setchannelid] = useState([]);
  const [Vid, setVid] = useState([]);

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => setchannelid(data.data.items[0])
    );
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVid(data.data.items)
    );
  }, [id]);

 console.log(channelid , Vid)

  return <Box sx={{minHeight:'95vh'}}>
    <Videos video={Vid} />
  </Box>;
}

export default Channels;
