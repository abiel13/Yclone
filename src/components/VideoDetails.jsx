import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import {Videos} from './'
import { fetchApi } from "../utils/fetchapi";

function VideoDetails() {
const [Video, setVideo] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetchApi(`vidoes?part=snippet,statistics&id=${id}`).then(data => setVideo(data.data.items[0]) )
  }, [id])
  

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player' />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
