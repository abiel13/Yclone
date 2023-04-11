import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchApi } from "../utils/fetchapi";

function VideoDetails() {
  const [Video, setVideo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data.data.items[0])
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography variant="h5" color="black" p={2}>
              {Video?.snippet?.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              sx={{ color: "black", py: "1", px: "2" }}
            >
              <Link to={`/channel/${Video?.snippet?.channelId}`}>
              <Typography variant={{sm:'subtitle1' , md:'h5'}}>
                {Video?.snippet?.channelTitle}
              </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems={'center'}>
              <Typography variant='h5'>
                  {parseInt(Video?.statistics?.viewCount).toLocaleString()} views
                </Typography> 
                 <Typography variant='h5'>
                  {parseInt(Video?.statistics?.likeCount).toLocaleString()} likes
                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
