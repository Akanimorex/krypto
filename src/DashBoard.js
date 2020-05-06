import React from 'react';
import './Dashboard.css'
import aicon from './aicon.jpg';
import CryptoNames from './CryptoNames'


const DashBoard =(props)=>{
    console.log(props.rates);
    console.log(props.names)
   

    // wont work cos there is two sets of data and there is one loop
    
  const names =  props.names.map((name,index)=>{  

       return(

           <CryptoNames  key={index} rates={props.rates}/>
        
       )
        
    })
    

    return (
        <div  >
         {names}          
        </div>
    )
   
   
}

export default DashBoard;