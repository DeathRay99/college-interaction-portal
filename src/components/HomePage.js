import NavTop from "./NavTop";
import NavTop2 from "./NavTop2";
import Carousel from "./Carousel";
import Footer from "./Footer";
import BasicStack from "./SecondPage/BasicStack";

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