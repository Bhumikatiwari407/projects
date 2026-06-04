import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="bg-danger-subtle p-2 d-flex justify-content-between align-item-center">
        <div className="text-danger fs-4 fw-bold"><FaWifi/><span>Cravings</span></div>
        <div className="d-flex gap-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/product"}>Product</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
        <div className="d-flex gap-3">
          <Link to={"/login"}>
            <button className="btn btn-outline-danger">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="btn btn-danger">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
