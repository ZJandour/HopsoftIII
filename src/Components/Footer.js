import "./Footer.css"
import hops from "../image/hop_3d.png"
import logo from "../image/logo.png"
import Iconhop from "../image/icon_hop.png"
import IconDrivers from "../image/icon_drivers.png"
import IconContact from "../image/icon_contact.png"
import  controlRtiElan from "../image/logos.png"
import imgFooter from "../image/bottom_pic.png"
import shadou from "../image/shadow.png"

const Footer = () => {
  return <footer>
    <div>
      <img src={shadou} alt="" className="shadou"/>
    </div>
    <div className="info-footer" id="Contact">
      
      
    
      <img src={hops} alt=""/>
      <img src={logo} alt=""/>
      <div className="all-summary">
          <div className="hop-soft">
          <img src={Iconhop} alt="" className="icon-footer"/>
          <h4>HOP SOFT</h4>
          <p>Home</p>
          <p>About us</p>
          <p>Our Portfolio</p>
          <p>Contact</p>

          </div>
          <div className="drivers">
          <img src={IconDrivers} alt="" className="icon-footer" />
          <h4>DRIVERS</h4>
          <p>Lighting</p>
          <p>Security</p>
          <p>Climate</p>
          <p>Audio Visuals</p>
          <p>Utilities</p>


          </div>
          <div className="contact-us">
          <img src={IconContact} alt="" className="icon-footer"/>
            <h4>CONTACT US</h4>
            <p>přesná adresa</p>
            <p>nepřečtu</p>
            <p>Australia</p>
            <div>
              <p>For technical support for our </p>
               <p> products please email us on:</p>
              <p>support@hopsoft.com.au</p>
              <p>admin@hopsoft.com.au</p>
              <p>ABN: 82 639 873 064</p>
            </div>


          </div>
      </div>
    </div>
    <div className="all-footer">
        <div className="link-footer">
            <p >&copy;2023 by Hopsoft, admin@hopsoft.com.au </p>
        </div>
       <img src={controlRtiElan} alt="" className="logs-footer"/>
    </div>
      <img src={imgFooter} alt="" className="img-footer"/>
    
  </footer>
}

export default Footer
