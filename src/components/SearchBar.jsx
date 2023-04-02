import React from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
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
        onChange={() => {}}
        value={""}
        placeholder="Search...."
      />
      <IconButton type={"button"} sx={{p:'5px' , color:'red' ,}}>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
