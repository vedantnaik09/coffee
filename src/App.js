import './App.css';
import About from './components/About';
import Explore from './components/Explore';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function imgSize(){
//   var img=new Image();
//   img.src= coffee
//   let height=img.naturalHeight
//   return height
// 
// }

/* <ParallaxLayer offset={0.5} speed={1}> 

</ParallaxLayer> */

function App() {
  




  return (
    <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/explore" element={<Explore/>}/>

        
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
