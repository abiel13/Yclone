import React from "react";
import { useNavigate, useState } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("a");
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
        mr: { sm: 5 },
        border: "1px solid #e4e5e3",
        pl: 2,
      }}
    >
      <input
        className="search-bar"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        placeholder="Search...."
      />
      <IconButton type={"button"} sx={{ p: "5px", color: "red" }}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
