import NavTop from "../Navigation/NavTop";
import NavTop2 from "../Navigation/NavTop2";
import Carousel from "./Carousel";
import Footer from "./Footer";
import BasicStack from "./BasicStack";

function HomePage(){
    return(
        <div>
            <NavTop/>
            <NavTop2/>
            <Carousel/>
            <BasicStack/>
            <Footer/>
        </div>
    )
}

export default HomePage;