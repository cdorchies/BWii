import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import SearchBar from "../SearchBar";
import HeaderStyle from "./styles";

export default function Header() {
  return (
    <HeaderStyle>
      <header>
        <div className="logo-container">
          <Link to="/">
            <img src="assets/img/logobwii.png" alt="" />{" "}
          </Link>
        </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <nav className="profile-container">
          <div>
            <span className="profile">
              <BsPersonCircle />
            </span>
          </div>
          <div className="login-links">
            <Link to="/login">
              <p>Se connecter</p>
            </Link>
            <Link>
              <p>Déconnexion</p>
            </Link>
          </div>
        </nav>
        <div className="notification-container">
          <p>
            <MdNotifications />
          </p>
        </div>
      </header>
    </HeaderStyle>
  );
}
