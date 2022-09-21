import './NavTop2.css';
import jiitLogo from './assets/jiitLogo.png';
function NavTop2(){
    return(
        <div className="navTop2">
         <div className="logodiv">
           <img  className="logo" src={jiitLogo}  alt="" />
         </div>
        <div className="navTop2Anchor">
          <a href="">About Us</a>
          <a href="">Programs</a>
          <a href="">Infrastructure</a>
          <a href="">Webportal</a>
          <a id="apply-now-btn" href="">Apply Now 2022</a>
          </div>
        </div>
    )
}
export default NavTop2;