import { Container } from "@mui/material";
import React from "react";
import { Bars } from "react-loader-spinner";

const Loading = () => {
  return (
    <Container sx={{ mt: "1rem" }}>
      <Bars color="#aa9909" />
      <p>Loading Please Wait</p>
    </Container>
  );
};

export default Loading;
