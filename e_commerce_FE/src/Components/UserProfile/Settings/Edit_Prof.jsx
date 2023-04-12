import React, { useEffect, useState } from "react";
import {TiShoppingCart} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai"
import Footer from '../../Footer';
import pyramid from '../images/pyramid.png'

function EditProf(){

  const [disableButton1,setDisableButton1] = useState(true)
  const [disableButton2,setDisableButton2] = useState(true)
  const [disableButton3,setDisableButton3] = useState(true)
  const [disableButton4,setDisableButton4] = useState(true)
  const [disableButton5,setDisableButton5] = useState(true)

    const cart = useSelector((state) => state.cart)
    const[windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
      })
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
          total += item.quantity
        })
        return total
      }  

     
        return (
         <>
      <div class="bg-amber-100 w-screen h-screen">

      <div class=" sm:h-32 sm:w-screen md:h-32 md:w-screen ">
      
      <ul className=' text-[1.5rem] flex flex-col md:flex-row px-2 justify-between'>

      <Link to ="/">
      <a href="#" className=" h-0 md:inset-y-0  text-neutral-700 md:text-[1.5rem] flex sm:translate-y-12 md:translate-y-8"><span className=' sm:text-4xl md:text-[3rem] text-[1.5rem] font-bold'>Sahara</span><img src={pyramid} alt="pyramid" className="translate-y-1 ml-0 my-auto md:mx-auto sm:pr-40 md:pr-20  mb-auto h-7 sm:translate-y-2.5 md:translate-y-1  md:h-10  md:translate-x-0"/></a>
      </Link>   
          
      <div class=" mx-auto text-sm sm:w-50  sm:text-base md:text-base md:font-medium text-center text-neutral-700 sm:-translate-x-20 md:translate-x-3 md:px-auto">
    <ul class=" flex pl-5 flex-wrap   py-2 translate-y-10 -translate-x-6 sm:translate-x-28 sm:translate-y-7 md:-translate-x-32 md:inset-0 md:translate-y-5 md:right-0 md:m-auto md:mr-auto">

    <Link to ="/user/profile">
        <li class="mr-2">
            <a href="#" class="inline-block mx-auto py-2 px-2 sm:py-4 sm:px-7 rounded-full bg-orange-500 md:bg-amber-100 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">Profile</a>
        </li>
        </Link>

        <Link to ="/user/orderhistory">
        <li class="mr-2">
            <a href="#" class="inline-block mx-auto py-2 px-1 sm:py-4 sm:px-7 rounded-full bg-orange-500 md:bg-amber-100 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">Order History</a>
        </li>
        </Link>
     


        <li class="mr-2">
            <label href="#" class="inline-block mx-auto py-2 px-1 -translate-y-1 md:translate-y-0 sm:py-4 sm:px-7 border-4 rounded-full text-white border-orange-700 bg-orange-600 md:bg-amber-100 md:border-0 md:border-b-2 md:rounded-none  md:text-orange-500 md:border-orange-600">User Settings</label>
        </li>
        
    </ul>
</div>
            <li className=" flex mx-auto w-14 h-14 md:inset-y-0 md:absolute right-0 md:pl10  -translate-y-6 translate-x-36 sm:translate-x-72 sm:-translate-y-14 md:translate-x-0 md:translate-y-20">

            <Link to ="/cart" class="w-14 h-14">

            <div className = "  flex  mx-auto">
            <TiShoppingCart size = {"50px"} className = " mt-4 text-orange-500"/>
            <p className =" bg-orange-500 rounded-full -translate-x-2 text-white text-lg sm:text-xl text-center -ml-4 px-2 pb-4  h-8 w-8">
            {getTotalQuantity() || 0}
            </p>
            </div>   
        </Link>
              </li>
            
        </ul>
        
       

      </div>

       
      <Link to="/user/settings" class="">
    <button  type="button" class="h-16 w-32 translate-x-6 translate-y-8  rounded-full text-base sm:h-12 font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 ">
    Back to Settings
    </button>
    
    
    </Link>
         


      <div class=" w-1/12 h-3/4  mx-auto translate-y-6">

     


<div class="h-3/4 mt-auto -translate-x-28 sm:-translate-x-36 md:-translate-x-32 w-full grid grid-cols-1 gap-y-0 justify-center md:-translate-y-4 text-xl translate-y-4">


<div className=" sm:h-16 w-80 sm:w-96 -translate-x-12 sm:translate-x-3 mx-auto col-sm-10 d-flex align-items-center">

<p class=" w-64 translate-x-4  md:-translate-x-4 mb-4 md:text-2xl font-bold">Firstname:</p>

<input
    className="translate-x-4 sm:-translate-y-24 sm:translate-x-4 md:-translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-3xl -translate-y-4 border-b-2 border-black"
    defaultValue={"Johnathan"}
    disabled={disableButton1}
    size={21}
   
    />


    <button className="translate-x-6 -translate-y-3 sm:-translate-y-24 md:translate-x-96 md:-translate-y-32 w-auto h-auto px-3 rounded-full bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500  text-end" 
    onClick={() => setDisableButton1(!disableButton1)} >
        {`${disableButton1 ? 'Edit' : 'Save'}`}

        <i
        className="fas fa-edit d-block "
        ></i>
    </button>
    

    

  
</div>




<div className="sm:h-16 w-80 sm:w-96 -translate-x-12 sm:translate-x-3 md:translate-y-4 mx-auto col-sm-10 d-flex align-items-center">

<p class=" w-64 translate-x-4  md:-translate-x-4 mb-4 md:text-2xl font-bold">Lastname:</p>

<input
    className="translate-x-4 sm:-translate-y-24 sm:translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-3xl md:-translate-x-4 -translate-y-4 border-b-2 border-black"
    defaultValue={"Dough"}
    disabled={disableButton2}
    size={21}
   
    />


    <button className="translate-x-6 -translate-y-3 sm:-translate-y-24 md:translate-x-96 md:-translate-y-32 w-auto h-auto px-3 rounded-full bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500  text-end" 
    onClick={() => setDisableButton2(!disableButton2)} >
        {`${disableButton2 ? 'Edit' : 'Save'}`}

        <i
        className="fas fa-edit d-block "
        ></i>
    </button>
    

    

  
</div>



<div className="sm:h-16 w-80 sm:w-96 -translate-x-12 sm:translate-x-3 md:translate-y-8 mx-auto col-sm-10 d-flex align-items-center">

<p class=" w-64 translate-x-4  md:-translate-x-4 mb-4 md:text-2xl font-bold">Address:</p>

<input
    className="translate-x-4 sm:-translate-y-24 sm:translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-3xl md:-translate-x-4 -translate-y-4 border-b-2 border-black"
    defaultValue={"1234 random st. City State "}
    disabled={disableButton3}
    size={21}
   
    />


    <button className="translate-x-6 -translate-y-3 sm:-translate-y-24 md:translate-x-96 md:-translate-y-32 w-auto h-auto px-3 rounded-full bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500  text-end" 
    onClick={() => setDisableButton3(!disableButton3)} >
        {`${disableButton3 ? 'Edit' : 'Save'}`}

        <i
        className="fas fa-edit d-block "
        ></i>
    </button>
    

    

  
</div>



<div className=" sm:h-16 w-80 sm:w-96 -translate-x-12 sm:translate-x-3 md:translate-y-12 mx-auto col-sm-10 d-flex align-items-center">

<p class=" w-64 translate-x-4  md:-translate-x-4 mb-4 md:text-2xl font-bold">Email:</p>

<input
    className="translate-x-4 sm:-translate-y-24 sm:translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-3xl md:-translate-x-4 -translate-y-4 border-b-2 border-black"
    defaultValue={"needdough@gmail.com"}
    disabled={disableButton4}
    size={21}
   
    />


    <button className="translate-x-6 -translate-y-3 sm:-translate-y-24 md:translate-x-96 md:-translate-y-32 w-auto h-auto px-3 rounded-full bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500  text-end" 
    onClick={() => setDisableButton4(!disableButton4)} >
        {`${disableButton4 ? 'Edit' : 'Save'}`}

        <i
        className="fas fa-edit d-block "
        ></i>
    </button>
    

    

  
</div>



<div className=" sm:h-16 w-80 sm:w-96 -translate-x-12 sm:translate-x-3 md:translate-y-16 mx-auto col-sm-10 d-flex align-items-center">

<p class=" w-64 translate-x-4  md:-translate-x-4 mb-0 md:text-2xl font-bold">Phone:</p>

<input
    className=" translate-x-4 sm:-translate-y-20 sm:translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-3xl md:-translate-x-4 -translate-y-0 border-b-2 border-black"
    defaultValue={"+1(210)-234-8765"}
    disabled={disableButton5}
    size={21}
   
    />


    <button className="translate-x-6 translate-y-1 sm:-translate-y-24 md:translate-x-96 md:-translate-y-32 w-auto h-auto px-3 rounded-full bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500  text-end" 
    onClick={() => setDisableButton5(!disableButton5)} >
        {`${disableButton5 ? 'Edit' : 'Save'}`}

        <i
        className="fas fa-edit d-block "
        ></i>
    </button>
    

    <Link to="/user/settings">
    <button type="button" class="translate-y-6 sm:-translate-y-10 md:-translate-y-20 h-2/3 sm:h-full w-full rounded-full text-xl sm:text-2xl font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 "
    onClick={()=>alert("Changes Submitted Succesfully")}>
  Submit Changes
    </button>
   </Link>

  
</div>

    <div   class="h-12 mb-0">
 
    </div>
    
    


</div>

</div>

      </div>

      

      <Footer class="inset-x-0  bottom-0"/>
      </>
 )

}

export default EditProf