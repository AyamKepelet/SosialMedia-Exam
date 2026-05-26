import "./Navbar.css"
import Home from "/Tugas RPL/uas_sosmed/src/assets/home.svg"
import Group from "/Tugas RPL/uas_sosmed/src/assets/group.svg"
import User from "/Tugas RPL/uas_sosmed/src/assets/user.svg"
// import logo from "/Tugas RPL/uas_sosmed/src/assets/logoUAS.png"
function Navbar(){
    return(
    <>
    <nav className="Navbar_omorfos">
        <div className="navbarHead">
            <div className="logo">omorfos</div>
            <ul className="options">
                <li><button style={{cursor:"pointer"}}><img className="img" src={Home} /></button></li>
                <li><button style={{cursor:"pointer"}}><img className="img" src={Group} alt="" /></button></li>
                <li><button style={{cursor:"pointer"}}><img className="img" src={User} alt="" /></button></li>
                <li><input type="text" className="searchInput
                " placeholder="search omorfos"/></li>
            </ul>
        </div>
    </nav>
    </>
    )
}

export default Navbar