import "./Post.css"
import profile from "../../assets/icon.png"
import { useState, useRef } from "react"

export default function Main({users,loading,error,btnFollowed,btnLiked,TombolLiked,TombolFollowed}) {



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
                      <button className="btn" onClick={() => TombolLiked(user.id)}>
                        {btnLiked.includes(user.id) ? "👍🏿" : "👍"}
                      </button>
                      <button className="btn" onClick={() => TombolFollowed(user.id)}>
                        {btnFollowed.includes(user.id) ? "Followed" : "Follow"}
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