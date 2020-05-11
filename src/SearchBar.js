 import React from 'react';
 import './Dashboard.css';


 const SearchBar =(props)=>{

    return(
        <div>
            <input type="search" placeholder="search crypto" onChange={props.search} />
        </div>
    )

 }


 export default SearchBar; 