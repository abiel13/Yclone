import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

function SideBar({sc , ssc}) {
 

  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY:'auto',
        flexDirection: { md: "column " },
        height: { sx: "auto" , md:'90%'},
      }}
      
    >
      {categories.map((cat) => (
        <button
        onClick={()=> {ssc(cat.name)}}
          className="category-btn"
          style={{
            background: sc === cat.name && "red",
            color: sc === cat.name && "white",
          }
        }
        key={cat.name}
        >
          <span style={{ color: sc === cat.name ? "white":'red', marginRight:'15px'}}>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
