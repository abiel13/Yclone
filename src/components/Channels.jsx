import { React, useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Videos, ChannelCard , VideoCard } from "./";
import { fetchApi } from "../utils/fetchapi";

function Channels() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "Videos":
          console.log(action.payload)
          return { ...state, video:action.payload };
        case "Channels":
          return { ...state, channels:action.payload };
      }
    },
    {
      video: [],
      channels: [],
    }
  );

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      
   dispatch({type:'Channels' , payload:[data.data.items[0]]})
    });

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      console.log('array' , data.data.items)
      dispatch({type:'Videos' , payload:data.data.items})
    });
  }, [id]);


   
  return (
    <Box sx={{ minHeight: "95vh" }}> 
<Box>
  <div style={{background:'black' , height:'200px'}} />
  <ChannelCard channel={state.channels[0]} mt='-130px' />
<Box display='flex' p={2}>
  <Box sx={{mr:{sm:'100px'}}} />
<Videos videos={state?.video} />
  </Box> 

  </Box>  
    </Box>
  );
}

export default Channels;
