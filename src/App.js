import NavTop from './components/NavTop';
import NavTop2 from './components/NavTop2';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import BasicStack from './components/SecondPage/BasicStack';
import ApplyNow from  './components/ApplyNow';

function App() {
  return (
    <div className="App">
      <NavTop/>
      <div style={{position:"relative"}}>
      <NavTop2/>
      <Carousel/>
      </div>
      <BasicStack/>
      <Footer/>
      <ApplyNow/>
      
    </div>
  );
}


export default App;
