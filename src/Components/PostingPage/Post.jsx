import "./Post.css"
import profile from "../../assets/profile.jpg"



export default function Main(){
    return(
        <>
        <main className="mainContent">
            <div className="postingSection">
                <ul className="UsersSection">
                    {/* user opinion */}
                    <li className="profileOpinion">
                        <img src={profile} alt="" />
                        <textarea name="" id="" placeholder="What's on your mind"></textarea>
                    </li>
                    {/* users quote */}
                    <li>
                        <div className="up"></div>
                        <div className="paraph"></div>
                        <div className="below"></div>
                    </li>
                </ul>
            </div>
        </main>
        </>
    )
}