import "./Post.css"
import profile from "../../assets/icon.png"
import { useEffect,useContext,useRef,useState } from "react"


export default function Main(){
    const [btnLike,btnLiked] = useState(false)
    const [btnFollow,btnFollowed] = useState(false)


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
},[])

    



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
                            <button onClick={()=> btnLiked(!btnLike)} style={{backgroundColor: btnLike ? "green":"red",padding:"0.5rem",border:"1px black solid",borderRadius:"4rem", marginRight:"1rem"}}>Suka</button>
                            <button onClick={()=> btnFollowed(!btnFollow)} style={{backgroundColor: btnFollow ? "blue":"white",padding:"0.5rem",border:"1px black solid",borderRadius:"4rem"}}>Mengikuti</button>
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