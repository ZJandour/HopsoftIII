import "./OurPortfolio.css"
import drivers from "../image/drivers2.png"
import modules from "../image/modules2.png"
import apps from "../image/apps2.png"
import iconContactUs from "../image/OurPortfolio.png"
import AllCategories from "./AllCategories"


const OurPortfolio = () => {
  return (
    <div className="all-our-portfolio" id="OurPortfolio">
    
      <img src={iconContactUs} alt=""/>
      <div className="section-portfolio">
        <div className="box-drivers">
            <img src={drivers} alt="" className="image-drivers"/>
            <div className="drivers-portfolio">
                <h2>DRIVERS</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
                <button>CHECK DRIVERS</button>
            </div>
        </div>
        <div className="box-modules">
            <img src={modules} alt="" className="image-modules"/>
            <div className="modules">
                <h2>MODULES</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
                <button>CHECK MODULES</button>
            </div>
        </div>
        <div className="box-apps"> 
        <img src={apps} alt="" className="image-apps"/>
            <div className="apps">
                <h2>APPS</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. 
                Aenean vel massa quis mauris vehicula lacinia. </p>
                <button>CHECK APPS</button>
            </div>
        </div>
    </div>
        <div className="shadou-box"></div>
        <div><AllCategories/></div>
    </div>
  )
}

export default OurPortfolio