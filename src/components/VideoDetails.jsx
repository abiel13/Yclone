import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchApi } from "../utils/fetchapi";

function VideoDetails() {
  const [Video, setVideo] = useState(null);
const [Related, setRelated] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideo(data.data.items[0])
    );
    fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) =>
    setRelated(data.data.items)
  );
  }, [id]);

  if(!Video?.snippet) return '...loading'

  return ( 
  <Box minHeight="95vh" maxWidth='100vw' >
      <Stack direction={{ xs: "column", sm: "row"   }}>
        <Box flex={0.9}>
          <Box sx={{ width: "100%", position: "sticky", top: "56px", }}>
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
              sx={{ color: "black", py: "5px", px: "10px" }}
            >
              <Link to={`/channel/${Video?.snippet?.channelId}`}>
              <Typography variant={{sm:'subtitle1' , md:'h5'}}>
                {Video?.snippet?.channelTitle}
              </Typography>
              </Link>

              <Stack direction='row' gap='20px' alignItems={'center'}>
              <Typography variant='subtitle1'>
                  {parseInt(Video?.statistics?.viewCount).toLocaleString()} views
                </Typography> 
                 <Typography variant='subtitle1'>
                  {parseInt(Video?.statistics?.likeCount).toLocaleString()} likes
                </Typography>

              </Stack>

            </Stack>
          </Box>
        </Box>
        <Box flex={{xs:1 , md:0.2}} alignItems='center' justifyContent='center' px={'5px'} py={{md:1 , xs:5}}>
          <Typography variant='h6'mb={2}>Related Videos</Typography>
<Videos videos={Related} direction='column' />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
