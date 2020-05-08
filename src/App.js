import React, {Component} from 'react';
import DashBoard from './DashBoard';
import './App.css';




class App extends Component{

  state={ 
    names:[]
  }

 



  componentDidMount(){
   
    fetch('http://api.coinlayer.com/list?access_key=c8c0ef65a659c37726364c68e6fdb887')
    .then((response)=>response.json())
    .then((data)=>{
    
      let nameList =[];
      Object.keys(data.crypto).forEach(key=>{
        nameList.push(data.crypto[key])
      })
      this.setState({names:nameList})

    
    })


    
  
  }
  
  
  render(){

 
 
   
    
    return(
      <div>

         <div className="Navbar"><h1 style={{textAlign:'center'}}>Crypto Dashboard</h1></div>
         
          <div className="Body">
            <h1  style={{color:'white',textAlign:'center'}}>There are {this.state.names.length} cryptos in here</h1>
            <DashBoard   cryptoList={this.state.names} /> 
          </div>
       
        
        
    

       
        
       

      </div>
    )
  }
}



export default App;
