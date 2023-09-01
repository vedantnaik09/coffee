import React, { useEffect, useState } from 'react'
import cofclip2 from '../resources/coffee2.png'
import americano from '../resources/Coffees/americano.jpg'
import cappuccino from '../resources/Coffees/cappuccino.jpg'
import espresso from '../resources/Coffees/expresso.jpg'
import latte from '../resources/Coffees/latte.jpg'
import { Link } from 'react-router-dom'

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
    const [expresso_c, setExpresso_c] = useState(0);
    const [americano_c, setAmericano_c] = useState(0);
    const [cappuccino_c, setCappuccino_c] = useState(0);
    const [latte_c, setLatte_c] = useState(0);

    function calculatePrice(){
        let  total_items= expresso_c + americano_c + cappuccino_c + latte_c
        let discount=0
        if(total_items<5)
        discount=0
        else if(5<=total_items<=10)
        discount=10
        if(total_items>10)
        discount=20
        return {
        discount: discount,
        price: total_items*10-total_items*discount/10,
        items : total_items
        }
    }
    function clearItems(){
        setExpresso_c(0)
        setAmericano_c(0)
        setCappuccino_c(0)
        setLatte_c(0)


    }
   
 return (   
    <div style={{position:"absolute",backgroundColor:"#372712", backgroundImage:`url(${cofclip2})`,backgroundRepeat:'repeat', backgroundSize:`${screenSize.width/30}%`,minHeight:"100%",height:"fit-content", minWidth:"100%"}}>
        <div className='my-3 mx-3' style={{backgroundColor:"black", width:"fit-content", borderRadius:"20px"}}>
        <Link to="/" style={{fontSize:"40px", padding:"20px", textDecoration:"none"}}>Home</Link>
        </div>


        <div className='my-5' style={{backgroundColor:"black", width:"fit-content",margin:"auto"}}>
            <h1 className="text-white text-center p-3">Calculate the price of your coffee here</h1>
        </div>
        <div style={{textAlign:"center"}}>
            <div className='cofcard mx-2 my-2'>
            <h3 className='text-white' style={{}}>Expresso</h3>
            <img className='cofimg' src={espresso} alt={espresso}  />
            <div className="d-flex justify-content-evenly" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-success" onClick={()=>setExpresso_c(expresso_c+1)}>Add (+)</button>
            <h2 className='text-white'>{expresso_c}</h2>
            <button type="button" disabled={expresso_c===0} className="btn btn-danger" onClick={()=>setExpresso_c(expresso_c-1)}>Remove (-)</button>
            </div>           
            </div>

            <div className='cofcard mx-2 my-2'>
            <h3 className='text-white' style={{}}>Americano</h3>
            <img className='cofimg' src={americano} alt={americano}  />
            <div className="d-flex justify-content-evenly" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-success" onClick={()=>setAmericano_c(americano_c+1)}>Add (+)</button>
            <h2 className='text-white'>{americano_c}</h2>
            <button type="button" disabled={americano_c===0} className="btn btn-danger" onClick={()=>setAmericano_c(americano_c-1)}>Remove (-)</button>
            </div>
            </div>

            <div className='cofcard mx-2 my-2'>
            <h3 className='text-white' style={{}}>Cappuccino</h3>
            <img className='cofimg' src={cappuccino} alt={cappuccino}  />
            <div className="d-flex justify-content-evenly" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-success" onClick={()=>setCappuccino_c(cappuccino_c+1)}>Add (+)</button>
            <h2 className='text-white'>{cappuccino_c}</h2>
            <button type="button" disabled={cappuccino_c===0} className="btn btn-danger" onClick={()=>setCappuccino_c(cappuccino_c-1)}>Remove (-)</button>
            </div>
            </div>

            <div className='cofcard mx-2 my-2'>
            <h3 className='text-white' style={{}}>Latte</h3>
            <img className='cofimg' src={latte} alt={latte}  />
            <div className="d-flex justify-content-evenly" style={{marginTop:"20px"}}>
            <button type="button" className="btn btn-success" onClick={()=>setLatte_c(latte_c+1)}>Add (+)</button>
            <h2 className='text-white'>{latte_c}</h2>
            <button type="button" disabled={latte_c===0} className="btn btn-danger" onClick={()=>setLatte_c(latte_c-1)}>Remove (-)</button>
            </div>
            </div>
            
        </div>

        <div className="d-flex justify-content-evenly">
        <button type="button" className="btn btn-info" style={{fontSize:"30px"}} onClick={clearItems}>Clear</button>
        </div>


        {calculatePrice().price &&  <div className='my-5' style={{backgroundColor:"black", width:"fit-content",margin:"auto"}}>
         <h1 className="text-white text-center p-3">Your final price is: <span style={{color:"green"}}>{calculatePrice().price}$</span> inclusive of discount of <span style={{color:"green"}}>{calculatePrice().discount}%</span> </h1>
        </div>}
        
    </div>
  )
}
