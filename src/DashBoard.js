import React from 'react';
import './Dashboard.css';




const DashBoard =(props)=>{
    
    
    
  const lists =  props.cryptoList.map((list,index)=>{  

       return(

           <div className="Dash"  key={index} >
                <div>
                    <img src={list.icon_url} alt="" width="100"/>
                    <h3>{list.name_full}</h3>                 
                </div>
                
                <div>
                    <p style={{fontWeight:'bold',color:'grey'}}>Max Supply:{list.max_supply}</p>

                </div>
                

           </div>
        
       )
        
    })
    

    return (
        <div style={{display:'flex',flexDirection:'row',flexWrap:'Wrap',justifyContent:'center',alignContent:'center'}}>
         {lists}          
        </div>
    )
   
   
}

export default DashBoard;