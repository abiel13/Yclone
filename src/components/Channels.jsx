import { React, useState, useEffect } from "react";
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
          return { ...state, [state.video]: action.payload };
        case "Channels":
          return { ...state, [state.channels]: action.payload };
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
   dispatch({type:'videos' , payload:[data.data.items]})

    });

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
   console.log('hello')
    });
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      {/* <Videos video={Vid} /> */}
      channels page
    </Box>
  );
}

export default Channels;
