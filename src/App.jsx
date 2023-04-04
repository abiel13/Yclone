import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import {Navbar,VideoDetails,Feed,Searched,Channels} from './components'

function App() {


  return (
    <div className="App">
    <Box>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Feed />} />
        <Route path='/video/:id'  element={<VideoDetails />} />
        <Route path='/search/:item'  element={<Searched />} />
        <Route path='/channel/:id'  element={<Channels />} />
      </Routes>
      </BrowserRouter>
    </Box>
    </div>
  )
}

export default App
