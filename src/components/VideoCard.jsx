import React from 'react'
import { Link } from 'react-router-dom'
import {Card , CardContent , CardMedia, Typography} from '@mui/material'


function VideoCard({ video :{ id: { videoId } , snippet } }) {
  
  return (
    <Card sx={{width:{ md:'320px' , xs:'100%'} , borderRadius:0 }}>
      <Link to={`/video/${videoId}`}>
<CardMedia image={snippet.thumbnails.high.url} alt={snippet.title} sx={{width:358 , height:180 }} />
      </Link>
<CardContent sx={{height:'106px', background:'#dfdfdf'}}>
<Link to={`/video/${videoId}`}>
  <Typography variant='subtitle1' font-weight='bold' sx={ {color:'black'}}>
    {snippet.title.slice(0,60)}
  </Typography>
</Link>
<Link to={`/channels/${snippet.channelId}`}>
  <Typography variant='subtitle2' font-weight='bold' sx={ {color:'gray'}}>
    {snippet.channelTitle.slice(0,60)}
  </Typography>
</Link>
</CardContent>

    </Card>
  )
}

export default VideoCard