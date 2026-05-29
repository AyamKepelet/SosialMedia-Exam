import "./Post.css"
import profile from "../../assets/icon.png"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Main(){
    const [btnDetail,btnDetailed] = useState(false)


    const [user,setUsers] = useState([])
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



    



    return(
        <>
        <main className="mainContent">
            <div className="postingSection">
                <ul className="UsersSection">
                    {/* user opinion */}
                    <li className="profileOpinion">
                        <img src={profile} alt="" />
                        <input name="" id="" placeholder="Cari orangnya"></input>
                    </li>
                    {/* users quote */}
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
                            <button onClick={()=> btnDetailed(!btnDetail)} style={{backgroundColor: btnDetail ? "blue":"green",padding:"0.5rem",border:"1px black solid",borderRadius:"4rem", marginRight:"1rem"}}>
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