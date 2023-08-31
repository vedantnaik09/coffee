import React, { useEffect, useState } from 'react'
import cofclip2 from '../resources/coffee1.png'
import logo from '../resources/brew1.png'
import { Link } from 'react-router-dom';

export default function About() {
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
    <div style={{position:"absolute",backgroundColor:"#0e0601", backgroundImage:`url(${cofclip2})`,backgroundRepeat:'repeat', backgroundSize:`${screenSize.width/30}%`,minHeight:"100%",height:"fit-content", minWidth:"100%"}}>
        <div className='my-3 mx-3' style={{backgroundColor:"black", width:"fit-content", borderRadius:"20px"}}>
        <Link to="/" style={{fontSize:"40px", padding:"20px", textDecoration:"none"}}>Home</Link>
        </div>
      <div className='container' style={{backgroundColor:"black", width:"50%",marginTop:`${screenSize.height/50}px`,marginBottom:`${screenSize.height/15}px`, marginLeft:"25%", border:"5px solid white",borderRadius:"55px"}}>       
      <img src={logo} alt={logo} id="exp" style={{margin:"auto",display:"block",height:screenSize.height/3,maxWidth:"100%",}}/>
      <h1 className='' style={{color:"white",fontSize:screenSize.height/17, textAlign:"center"}}>   About Us</h1>
      <h1 className='' style={{color:"#cfbb9c",fontSize:screenSize.height/30,padding:"25px", textAlign:"center"}}>      
      Welcome to Brew Atlas! We're a cozy coffee haven located in the heart of Mumbai. Our passion is crafting remarkable coffee experiences that linger in your memory.

From carefully sourced beans to expertly brewed cups, we're dedicated to delivering the perfect coffee moment. Our skilled baristas pour their hearts into every cup, ensuring that each sip is a journey of flavors.

Beyond our coffee, we're a community gathering spot. Whether you're seeking solitude, lively conversations, or a productive corner, our space is designed to fit your needs.

Come indulge in our selection of espresso classics and inventive brews, paired with delightful pastries. Join us in savoring the simple joys of life – one cup at a time.
        </h1>      
        </div> 
    </div>
  )
}
