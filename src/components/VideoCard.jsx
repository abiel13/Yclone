import React from 'react'
import { Link } from 'react-router-dom'
import {Card , CardContent , CardMedia, Typography} from '@mui/material'


function VideoCard({ video :{ id: { videoId } , snippet } }) {
  
  return (
    <Card sx={ { width: {xs:'100%', sm:'358px', md:'320px' , } , borderRadius:0 }}>
      <Link to={`/video/${videoId}`}>
<CardMedia image={snippet.thumbnails.high.url} alt={snippet.title} sx={{width:{
xs:'100%', sm:'358px', md:'320px' 
} , height:180 }} />
      </Link>
<CardContent sx={{height:'106px', background:'#dfdfdf'}}>
<Link to={`/video/${videoId}`}>
  <Typography variant='subtitle1' fontWeight='bold' sx={ {color:'black'}}>
    {snippet.title.slice(0,60)}
  </Typography>
</Link>
<Link to={`/channels/${snippet.channelId}`}>
  <Typography variant='subtitle2' fontWeight='bold' sx={ {color:'gray'}}>
    {snippet.channelTitle.slice(0,60)}
  </Typography>
</Link>
</CardContent>

    </Card>
  )
}

export default VideoCard