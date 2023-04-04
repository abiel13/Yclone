import React from 'react'
import { Link } from 'react-router-dom'
import {Card , CardContent , CardMedia} from '@mui/material'


function VideoCard({ video :{ id: { videoId } , snippet } }) {
  console.log(videoId , snippet)
  return (
    <Card>
      <Link>
vidcard
      </Link>
    </Card>
  )
}

export default VideoCard