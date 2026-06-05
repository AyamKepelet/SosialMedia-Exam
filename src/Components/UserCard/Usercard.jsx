// import "./Usercard.css"
// import { useContext } from "react"
// import UserContext from "../context/Usercontext"

// export default function UserCard(){
//     const {users} = useContext(UserContext)
//     return(
//         <>
//         {
//                 users.map((user)=>(
//                 <div key={user.id} className="UserCard">
//                     <h2>{user.name}</h2>
//                     <span>
//                         Username: {user.username}
//                     </span>
//                     <span>
//                         From: {user.address.city}
//                     </span>
//                     <span>
//                         Company: {user.company.name},{user.company.catchPhrase}
//                     </span>
//                 </div>
//                 ))

//         }
//         </>
//     )
// }