import React from 'react'
import {Stack , Box} from '@mui/material'
import { VideoCard,  ChannelCard } from './'


function Videos({video}) {
  console.log(video)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent={'start'} gap={2}>
{
  video.map((item,idx) =>(
    <Box key={idx}>
{item.id.videoId && <VideoCard video={item} />}
{item.id.ChannelId && <ChannelCard ChannelDetails={item} />}
    </Box>
  ))
}
    </Stack>
  )
}

export default Videos