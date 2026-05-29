// import { useState } from 'react']
import Navbar from "./Components/Navigatorbar/Navbar"
import Post from "./Components/PostingPage/Post"
import User from "./Components/UserPage/User"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
    <Footer></Footer>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
