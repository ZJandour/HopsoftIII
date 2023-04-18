import { NavLink} from "react-router-dom";
import "./Navbar.css";
import logo from "../image/logo.png";
import logs from "../image/logos.png";
import home from "../image/mainpick.png";
import iconsAll from "../image/iconsgreen.png"
import menu from "../image/menu.png";
import sloganNavbar from "../image/SloganNavbar.png"
import hand from "../image/hand.png"
import shadou from "../image/shadow.png"
 /*<NavLink to="/AboutUs" className={ ({isActive}) => 
              isActive ? "activeLink link": "nonactiveLink link"}
              >About us |</NavLink>*/
const Navbar = () => {
    return <header >
    <div className="navigation">
        <img src={logo} alt=""/>
          <nav className="nav-list">
           <NavLink to="/" className={ ({isActive}) => 
              isActive ? "activeLink link": "nonactiveLink link"}
              >Home |</NavLink>
            
            <NavLink to="/OurPortfolio" className={ ({isActive}) => 
              isActive ? "activeLink link": "nonactiveLink link"}
              >Our Portfolio |</NavLink>
            <NavLink to="/Contact" className={ ({isActive}) => 
              isActive ? "activeLink link": "nonactiveLink link"}
              >Contact</NavLink>
          </nav>
            <img src={logs} alt="" className="logs"/>
    </div>
      <div className="all-home-motto">
        <img src={home} alt="" className="home-navbar"/>
        <img src={hand} alt="" className="hand"/>
        <img src={sloganNavbar} alt="" className="motto"/>
      </div>
      <div className="icon">
        <img src={iconsAll} alt="" />
        <img src={menu} alt="" className="green"/>
      </div>
        <img src={shadou} alt="" className="shadou"/>
  </header>
    
  }
export default Navbar