import NavTop from './components/NavTop';
import NavTop2 from './components/NavTop2';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavTop/>
      <div style={{position:"relative"}}>
      <NavTop2/>
      <Carousel/>
      </div>
       <Footer/>
    </div>
  );
}


export default App;
