import { useState, useEffect, React } from "react";
import { Box, Typography } from "@mui/material";
import {Videos} from './'
import { fetchApi  } from "../utils/fetchapi";
import { useParams } from "react-router-dom";

function Searched() {

 const  { item } = useParams();
  const [Video, setVideo] = useState([])

useEffect(() =>{
fetchApi(`search?part=snippet&q=${item}`).then(data => setVideo(data.data.items))

}, [item])


  return ( <
    Box p={2} sx={{overflow:'auto' , height:{sx:'auto' , md:'90vh' , flex:2,}}}>
        <Typography variant="h4" fontWeight='bold' mb={2}>
        Search Results for  
     <span style={{color:'#f31503'}}>
       {item}
          </span>
        </Typography>
        <Box display='flex' p={2}>
        <Box sx={{mr:{sm:'100px'}}} />
      <Videos videos={Video} />
        </Box> 
      
      </Box>
    
  );
}

export default Searched;
