import "./Post.css"
import profile from "../../assets/icon.png"
import { useState, useRef } from "react"
import UserContext from "../context/Usercontext"
import { useContext } from "react"

export default function Main() {
    const {users,loading,error,setSelectedUser} = useContext(UserContext)
    
  const [btnLiked, setBtnLiked] = useState(false)
  const [btnFollowed, setBtnFollowed] = useState(false)

  const inputRef = useRef("")
  const [search, setSearch] = useState("")

  const mencariOrang = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  function fokusinput() {
    inputRef.current.focus()
  }

  if (loading) return <p>Sedang memuat...</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <main className="mainContent">
        <div className="postingSection">
          <ul className="UsersSection">
            {/* Cari Orang */}
            <li className="profileCari">
              <img src={profile} alt="" />
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari orangnya"
              />
              <button onClick={fokusinput}>Search</button>
            </li>
            {/* deskripsi users */}
            <li className="user">
              {mencariOrang.map((user) => (
                <div key={user.id} className="users">
                  <img src={profile} alt="" />
                  <h3>{user.name}</h3>
                  <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Berasal: {user.address.city}</p>
                    <div className="btnReaksi">
                      <button className="btn" onClick={() => setBtnLiked(!btnLiked)}>
                        {btnLiked ? "👍🏿" : "👍"}
                      </button>
                      <button className="btn" onClick={() => setBtnFollowed(!btnFollowed)}>
                        {btnFollowed ? "Followed" : "Follow"}
                      </button>
                      <button className="btnInfo" onClick={() => setSelectedUser(user)}>
                        Info Lanjut
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}