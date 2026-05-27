import "./Navbar.css"
// import Home from "../../assets/home.svg"
// import Group from "../../assets/group.svg"
// import User from "../../assets/user.svg"
// import logo from "/Tugas RPL/uas_sosmed/src/assets/logoUAS.png"
export default function Navbar(){
    return(
    <>
    <nav className="navbar">
      <div className="navbar-logo">omorfos</div>

      <ul className="navbar-links">
        <li><button className="nav-btn active"><i className="ti ti-home" /></button></li>
        <li><button className="nav-btn"><i className="ti ti-users" /></button></li>
        <li><button className="nav-btn"><i className="ti ti-compass" /></button></li>
        <li><button className="nav-btn"><i className="ti ti-bell" /></button></li>
      </ul>
      <div className="navbar-right">
        <input type="text" className="searchInput" placeholder="search..." />
        <div className="avatar">U</div>
      </div>
    </nav>
    </>
    )
}

