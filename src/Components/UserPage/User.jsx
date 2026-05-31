import "./User.css";
import Icon from "../../assets/icon.png"

export default function User() {
  return (
    <main className="userPage">
      <h1 className="userTitle">User Page</h1>
      <div className="UserParent">
        <div className="UserChild">
          <img src={Icon} alt="" />
          <span>
            <h2></h2>
          </span>
        </div>
      </div>
    </main>
  );
}

