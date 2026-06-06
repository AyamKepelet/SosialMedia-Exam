import { useState, useEffect,createContext } from "react"
import Navbar from "./Components/Navigatorbar/Navbar"
import Post from "./Components/PostingPage/Post"
import User from "./Components/UserPage/User"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
// import UserCard from "./Components/UserCard/Usercard"
import Usercontext from "./Components/context/Usercontext"

function App() {
  // mengambil data user
  const [users, setUsers] = useState([])
  // system loading dan system error
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  // Tombol Interaksi Like Dan Follow
  const [btnLiked, setBtnLiked] = useState([])
  const [btnFollowed, setBtnFollowed] = useState([])

  useEffect(() => {
    async function penyambunganUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        if (!response.ok) {
          throw new Error("gagal mengambil data")
        }
        setUsers(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    penyambunganUsers()
  }, [])

  const panggilNama = users.map((user)=>{
    return user.name
  })

function TombolLiked(id) {
  if (btnLiked.includes(id)) {
    setBtnLiked(btnLiked.filter(userId => userId !== id))
  } else {
    setBtnLiked([...btnLiked, id])
  }
}

function TombolFollowed(id) {
  if (btnFollowed.includes(id)) {
    setBtnFollowed(btnFollowed.filter(userId => userId !== id))
  } else {
    setBtnFollowed([...btnFollowed, id])
  }
}

  return (
    <BrowserRouter>
    <Usercontext.Provider value={{users,loading,error,panggilNama,btnFollowed,btnLiked,TombolLiked,TombolFollowed}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Post/>} />
        <Route path="/user" element={<User />} />
      </Routes>
        {/* <UserCard/> */}
      <Footer />
      </Usercontext.Provider>
    </BrowserRouter>
  )
}
export default App