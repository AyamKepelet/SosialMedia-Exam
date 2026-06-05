import "./User.css"
import { useContext } from "react"
import UserContext from "../context/Usercontext"
import img from "../../assets/icon.png"
 
export default function User(){
    const {users} = useContext(UserContext)
    return(
        <>
        <span className="title">
          <h1>
            info lanjutan...
          </h1>
        </span>
        <div className="UsersContainer">
        {
                users.map((user)=>(
                <div key={user.id} className="Users">
                  <img src={img} alt="" />
                    <h2>{user.name}</h2>
                    <span className="username">
                        <h4>Username: {user.username}</h4>
                    </span>
                    <span className="address">
                        <h4>From: {user.address.city}</h4>
                    </span>
                    <span className="company">
                        <p>Company: {user.company.name},{user.company.catchPhrase}</p>
                    </span>
                  </div>
                ))

        }
        </div>
        </>
    )
}