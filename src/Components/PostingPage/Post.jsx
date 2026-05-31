import "./Post.css"
import profile from "../../assets/icon.png"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Main(){
    const [btnDetail,btnDetailed] = useState(false)
    const [user,setUsers] = useState([]) // mengambil data users
    const [loading,setLoading] = useState(true) 
    const [error,setError] = useState("")
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

console.log(user.map((users)=>{
    console.log(users.name);
    
}));


// const [keyEvent,keySetEvent] = useState(false)
    



    return(
        <>
        <main className="mainContent">
            <div className="postingSection">
                <ul className="UsersSection">
                    {/* Cari Orang */}
                    <li className="profileCari">
                        <img src={profile} alt="" />
                        <input name="" id=""  placeholder="Cari orangnya"></input>
                    </li>
                    {/* deskripsi user */}
                        <li className="users">
                        {
                            user.map((users) => (
                                <div key={users.id} className="user">
                                    <img src={profile} alt="" />
                                    <h3>{users.name}</h3>
                                    <div>
                                        <p>Username: {users.username}</p>
                                        <p>Email: {users.email}</p>
                                        <p>Berasal: {users.address.city}</p>
                                        <div className="btnReaksi">
                            <button className="btn" onClick={()=> btnDetailed(!btnDetail)} style={{backgroundColor: btnDetail ? "gray":"white"}}>
                                <Link to="/user" style={{textDecoration:"none"}}>Lihat detail</Link> 
                            </button>
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