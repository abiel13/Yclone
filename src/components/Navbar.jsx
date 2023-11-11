import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constant";
import { SearchBar } from "../components";

function Navbar() {
  return (
    <Stack
      sx={{
        position: "sticky",
        top: "0px",
        justifyContent: "space-between",
        borderBottom: ".7px solid #777",
        background: "white",
        zIndex: 200,
        gap: "1rem",
        padding: { md: "1rem", xs: "1rem" },
      }}
      direction="row"
      alignItems={"center"}
      // p={2}
    >
      <Link to="/">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} height={35} alt="" />{" "}
          <span style={{ fontWeight: "bolder", fontFamily: "sans-serif" }}>
            Abi<span style={{ color: "red" }}>Tube</span>{" "}
          </span>
        </div>
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
