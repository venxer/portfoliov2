import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = ({ theme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={theme}>
      <div className="nameContainer">
        <a>Edwin-Zhao</a>
      </div>

      <div
        className={
          path === "/"
            ? "active preventSelection"
            : "notActive preventSelection"
        }
        onClick={() => navigate("/")}
      >
        _hello
      </div>

      <div
        className={
          path === "/about-me"
            ? "active preventSelection"
            : "notActive preventSelection"
        }
        onClick={() => navigate("/about-me")}
      >
        _about-me
      </div>

      <div
        className={
          path === "/experiences"
            ? "active preventSelection"
            : "notActive preventSelection"
        }
        onClick={() => navigate("/experiences")}
      >
        _experiences
      </div>

      <div
        className={
          path === "/projects"
            ? "active preventSelection"
            : "notActive preventSelection"
        }
        onClick={() => navigate("/projects")}
      >
        _projects
      </div>

      <div
        className={
          path === "/contact-me"
            ? "active preventSelection"
            : "notActive preventSelection"
        }
        id="contactMeContainer"
        onClick={() => navigate("/contact-me")}
      >
        _contact-me
      </div>
    </nav>
  );
};

export default NavBar;
