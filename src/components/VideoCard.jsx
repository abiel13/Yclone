import React from 'react'
import { Link } from 'react-router-dom'
import {Card , CardContent , CardMedia} from '@mui/material'


function VideoCard({ video :{ id: { videoId } , snippet } }) {
  console.log(videoId , snippet)
  return (
    <Card>
      <Link to={`/video/${videoId}`}>
<CardMedia image={snippet.thumbnails.high.url} alt={snippet.title} sx={{width:358 , height:180 }} />
      </Link>
    </Card>
  )
}

export default VideoCard