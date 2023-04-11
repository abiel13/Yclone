import React from 'react'
import {Stack , Box} from '@mui/material'
import {ChannelCard , VideoCard} from './'

function Videos({ videos , direction }) {
if (!videos?.length) return '...Loading'

  return (
    <Stack direction={direction || 'row'} justifyContent='start' gap={2} flexWrap='wrap'>
      {
        videos.map((item,idx) =>{
       
          return( <Box key={idx}>
            {item?.id?.videoId && <VideoCard  video={item} />}
            {item?.id?.channelId && <ChannelCard channel={item} />}
          </Box>)}
        )
      }
    </Stack>
  )
}

export default Videos