import "./Post.css"
import profile from "../../assets/icon.png"
import { useEffect, useState, useRef } from "react"
// import UserContext from "../context/Usercontext"
export default function Main(user,setSelectedUser){
    const [btnLiked,setBtnLiked] = useState(false)
    const [btnFollowed,setBtnFollowed] = useState(false)
    const [users,setUsers] = useState([]) // mengambil data users
    const [loading,setLoading] = useState(true) 
    const [error,setError] = useState("")

    const inputRef = useRef("")
    const [search,setSearch] = useState("")
    useEffect(()=>{
        async function penyambunganUsers() {
            try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
        if(!response.ok){
            throw new Error("gagal mengambil data")
        }
        setUsers(data)
    }catch(error){
        setError(error.message)
    }finally{
        setLoading(true)
    }
    }
    penyambunganUsers()
    if(loading){
        <p>Sedang memuat...</p>
    }    
    if(error){
        return <p>{error}</p>
    }
}, [loading, error])

const mencariOrang = users.filter(users => 
    users.name.toLowerCase().includes(search.toLowerCase())
)

function fokusinput(){
    inputRef.current.focus()
}

    return(
        <>
        <main className="mainContent">
            <div className="postingSection">
                <ul className="UsersSection">
                    {/* Cari Orang */}
                    <li className="profileCari">
                        <img src={profile} alt="" />
                        <input ref={inputRef} value={search} onChange={(e) => {setSearch(e.target.value);
                        }} placeholder="Cari orangnya"></input>
                        <button onClick={fokusinput}>Search</button>
                    </li>
                    {/* deskripsi users */}
                        <li className="user">
                        {
                            mencariOrang.map((users) => (
                                <div key={users.id} className="users">
                                    <img src={profile} alt="" />
                                    <h3>{users.name}</h3>
                                    <div>
                                        <p>Username: {users.username}</p>
                                        <p>Email: {users.email}</p>
                                        <p>Berasal: {users.address.city}</p>
                                        <div className="btnReaksi">
                            <button className="btn" onClick={()=> setBtnLiked(!btnLiked)}>{btnLiked ? "👍🏿" : "👍"}</button>
                            <button className="btn" onClick={()=> setBtnFollowed(!btnFollowed)}>{btnFollowed ? "Followed" : "Follow"}</button>
                            <button className="btnInfo" onClick={()=> setSelectedUser(user)}>Info Lanjut</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </li>
                </ul>
            </div>
        </main>
        </>
    )
}