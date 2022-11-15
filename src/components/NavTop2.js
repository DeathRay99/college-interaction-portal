import './NavTop2.css';
import { useEffect, useState } from "react";
import jiitLogo from './assets/jiitLogo.png';
import {Link,Outlet} from "react-router-dom";
function NavTop2(){
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 425 ) {
        setShow(true);
      } else setShow(false);
    });
  }, []);
    return(
        <div className="navTop2"
      style={{ backgroundColor: show ? "#212529" : "transparent" }}>
         <div className="logodiv">
           <img  className="logo" src={jiitLogo}  alt="" />
         </div>
        <div className="navTop2Anchor">
          <a href="#">About Us</a>
          <a href="#">Programs</a>
          <a href="#">Infrastructure</a>
          <a href="#">Webportal</a>
          <Link id="apply-now-btn" to='/applyNow'>Apply Now 2022</Link>
          </div>
        </div>
    )
}
export default NavTop2;