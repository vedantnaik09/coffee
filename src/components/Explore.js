import React, { useEffect, useState } from 'react'
import cofclip2 from '../resources/coffee2.png'

export default function Explore() {
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

    let espresso,americano,cappucino,latte=0
   
 return (   
    <div style={{position:"fixed",backgroundColor:"#372712",height:screenSize.height, backgroundImage:`url(${cofclip2})`,backgroundRepeat:'repeat', backgroundSize:`${screenSize.width/30}%`,minWidth:"100%"}}>
        <div className='my-5' style={{backgroundColor:"black", width:"fit-content",margin:"auto"}}>
            <h1 className="text-white text-center p-3">Calculate the price of your coffee here</h1>
        </div>
        <div style={{textAlign:"center"}}>
            <div className='cofcard mx-2'>
            <h3 className='text-white' style={{display:"inline-block"}}>Expresso</h3>
            </div>
            <div className='cofcard mx-2'>
            <h3 className='text-white' style={{display:"inline-block"}}>Expresso</h3>
            </div>

            
        </div>
    </div>
  )
}
