import { useState, useEffect, React } from "react";
import { Stack, Box, Typography } from "@mui/material";
import {SideBar,Videos} from './'
import { fetchApi  } from "../utils/fetchapi";

function Feed() {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [Video, setVideo] = useState([])

useEffect(() =>{
fetchApi(`search?part=snippet&q=${selectedCategory}`).then(data => setVideo(data.data.items))

}, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{ height: { sx: "auto", md: "92vh" }, px: { sx: 0, md: 2 } , borderRight:'1px solid #e3e3e3' }}
      >
<SideBar sc={selectedCategory} ssc={setselectedCategory} />
<Typography className='copyright' variant='body2' sx={{color:'black', mt:'1.5rem'}}>
Copyright Abiel @betilStudios
</Typography>
      </Box>

      <Box p={2} sx={{overflow:'auto' , height:{sx:'auto' , md:'90vh' , flex:2,}}}>
        <Typography variant="h4" fontWeight='bold' mb={2}>
 {selectedCategory}     <span style={{color:'#f31503'}}>
      Videos
          </span>
        </Typography>
        <Videos videos={Video} />
      </Box>
    </Stack>
  );
}

export default Feed;
