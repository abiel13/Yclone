import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { SnippetFolderRounded } from "@mui/icons-material";

function VideoCard({
  video: {
    id: { videoId },
    snippet,
  },
}) {
  return (
    <Card sx={{ width: { xs: "100%", md: "320px" }, borderRadius: 0 }}>
      <Link to={`/video/${videoId}`}>
        <img
          src={snippet?.thumbnails.high?.url}
          alt={snippet.title}
          style={{ width: "100%" }}
        />
      </Link>
      <CardContent
        sx={{
          height: "106px",
          width: { xs: "100%", md: "320px" },
          background: "#dfdfdf",
        }}
      >
        <Link to={`/video/${videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "black" }}
          >
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${snippet.channelId}`}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: "gray" }}
          >
            {snippet.channelTitle.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
