import { React, useReducer, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchApi } from "../utils/fetchapi";

function Channels() {
  const { id } = useParams();
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "Videos":
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
      console.log(data.data.items);
   dispatch({type:'Channels' , payload:[data.data.items[0]]})
    });

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      dispatch({type:'Videos' , payload:[data.data.items]})
    });
  }, [id]);

   console.log( state.video)
  return (
    <Box sx={{ minHeight: "95vh" }}> 
<Box>
  <div style={{background:'black' , height:'300px'}} />
  <ChannelCard channel={state.channels[0]} mt='110px' />
  <Videos vidoes={state.video[0]} />
  </Box>  
    </Box>
  );
}

export default Channels;
