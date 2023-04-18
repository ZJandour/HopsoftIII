import "./Home.css"
import About from "../image/about_photo.png"
import aboutTitle from "../image/AboutUsIcons.png"

const Home = () => {
    return <>
           <div className="all-about-us" id="About us">
      <div className="text-about-us">
        
        <img src ={aboutTitle} alt =""/>
        <p>Hop Soft Pty Ltd is one of the leading software developers in the automation industry. We develop a wide variety of drivers, plugins, modules and apps.
            Our aim is to deliver feature rich, affordable, documented and well tested products.  All our developers are industry experts with more than 10 years of experience in the field. 
            We offer a variety of services such as contract work for manufacturers, co-funded contracts for integrators and also complete projects funded by us.</p>
        </div>
        <img src={About} alt="" className="about-img"/>
    </div>
      </>
  }
  export default Home
  