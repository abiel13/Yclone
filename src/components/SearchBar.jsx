import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        borderRadius: 20,
        mr: { xs: 5, md: 3 },
        border: "1px solid #e4e5e3",
        pl: 2,
        boxShadow: "inset 0px 0px 5px rgba(0,0,0,0.3)",
      }}
      elevation={0}
    >
      <input
        className="search-bar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        placeholder="Search...."
        style={{ background: "transparent" }}
      />
      <IconButton type={"button"} sx={{ p: "5px", color: "red" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
