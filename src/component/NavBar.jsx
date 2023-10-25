import { Link } from "react-router-dom";
import "./Navbar.css"

const NavBar = () =>{
    return(
    <div>
        <nav className="gap-y-px d-flex " id="nav">
        <ul className="" id="nav-link">
            <li>Home</li>
            <li>About</li>
            {/* <li><Link to={"/Fetch"}>contact</Link></li> */}
        </ul>
        </nav>
    </div>
        
    )
};

export default NavBar