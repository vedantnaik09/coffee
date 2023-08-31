import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import Navbar from './components/Navbar';
import cofclip1 from './resources/coffee1.png'
import cofclip2 from './resources/coffee2.png'
import cup1 from './resources/cup1.png'
import cup2 from './resources/cup2.png'
import React, { useEffect, useRef, useState } from 'react';
import logo from './resources/brew1.png'
import explore from './resources/explore.gif'
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
  const ref = useRef();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref?.current?.width) {
      return;
    }
    setWidth(ref?.current?.width);
  }, [ref?.current?.width]);

  // function imgWidth(){
  //    const img=  document.getElementById("exp")
  //    if(img.clientWidth){
  //     return img.clientWidth
  //    }
  //   // setImgw(img.clientWidth)
  // }
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }



  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
        window.removeEventListener('resize', updateDimension);        
    })
}, [screenSize])




  return (
    <div>   
        
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={0} factor={1} style={{backgroundColor:"#211105"}}>    
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0} factor={1} style={{backgroundImage:`url(${cofclip1})`,backgroundRepeat:'repeat', backgroundSize:`${screenSize.width/30}%`,opacity:"0.5"}}>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={1} factor={1.5} style={{backgroundImage:`url(${cup1})`, backgroundRepeat:"repeat", backgroundSize:screenSize.height}}>        
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={1.5} factor={1.3} style={{backgroundImage:`url(${cup2})` , backgroundRepeat:"repeat", backgroundSize:screenSize.height/1.1}}>        
      </ParallaxLayer>
      

      <ParallaxLayer offset={0} speed={1.2}>       
      <div className='container' style={{backgroundColor:"black", width:"50%",marginTop:`${screenSize.height/5}px`, marginLeft:"25%", border:"5px solid white",borderRadius:"55px"}}>       
      <img src={logo} alt={logo} id="exp" style={{margin:"auto",display:"block",height:screenSize.height/3,maxWidth:"100%",}}/>
      <h1 className='' style={{color:"#cfbb9c",fontSize:screenSize.height/20,padding:"25px"}}>        
        <span className='quote'>&#8220;</span>Fueling Your Day, One Sip at a Time –  Where Every Cup is Brewed with Love and a Splash of Magic!
        <span className='quote'>&#8221;</span></h1>      
        </div>      
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0}> 
      </ParallaxLayer>


      {/*------------------- Page 2 ----------------*/}

      <ParallaxLayer offset={1} speed={0} factor={1} style={{backgroundColor:"#372712"}}>    
      
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0} factor={1} style={{backgroundImage:`url(${cofclip2})`,backgroundRepeat:'repeat', backgroundSize:`${screenSize.width/30}%`,}}>       
        <div style={{backgroundColor:"black",height:"16px"}}></div>
        <div>
        <h1 className="text-white text-center" style={{position:"fixed",top:screenSize.height/1.7,left:`calc(50% )`,fontSize:screenSize.height/10}}>Explore</h1>
        <img src={explore} alt={explore} ref={ref} style={{margin:"auto",display:"block",height:screenSize.height/1,maxWidth:"100%",}}/>
        <h1 className='' >{width}</h1>
        </div>
      </ParallaxLayer>
      
    </Parallax>
    </div>
  );
}

export default App;
