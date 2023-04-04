import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchApi } from "../utils/fetchapi";

function Channels() {
  const { id } = useParams();
  const [channelid, setchannelid] = useState([]);
  const [Videos, setVideos] = useState([]);

  useEffect(() => {
 
   console.log(fetchApi(`channels?part=snippet&id=${id}`))
 console.log(fetchApi(`search?channelId=${id}&part=snippet&order=date`))
    
  }, [id]);

  console.log(Videos , channelid)

  return <Box sx={{minHeight:'95vh'}}>
    {/* <Box>
      <div style={{color:'red' , height:'300px' , zIndex:'10'}} />
      <ChannelCard channel={channelid} mt='110px'/>
    </Box> */}
  </Box>;
}

export default Channels;
