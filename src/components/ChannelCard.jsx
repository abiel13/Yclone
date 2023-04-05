import React from "react";
import { Link } from "react-router-dom";
import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";

function ChannelCard({ channel }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "356px", md: "320px" },
        height:'326px',
        margin:'auto'
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "black",
          }}
        >
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url}
            alt={channel.snippet.title}
            sx={{ borderRadius: "50%", width: "180px", height: "180px" }}
          />
          <Typography variant="h6">{channel.snippet.title}</Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
