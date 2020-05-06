import React, {Component} from 'react';
import DashBoard from './DashBoard';
import './App.css';




class App extends Component{

  state={
    
    
    rates:[],
    names:[],
    

    

  }

 



  componentDidMount(){
    fetch('http://api.coinlayer.com/live?access_key=c8c0ef65a659c37726364c68e6fdb887&expand=1')
    .then((response)=>response.json())
    .then((data)=>{ 
      // console.log(data)
      
      let list =[];
       Object.keys(data.rates).forEach(key=>{
        list.push(data.rates[key]);    
      })
      this.setState({rates:list}) 
    });


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
      <div className="Body">
        <div className="Navbar"><h1 style={{textAlign:'center'}}>Crypto Dashboard</h1></div>
        <h1 style={{color:'white'}}>there are {this.state.rates.length} cryptos in here</h1>
        
      {/* dont be confused by the props and the state i passed into the components below */}

        <DashBoard names={this.state.rates}  cryptoList={this.state.names} /> 
        
       

      </div>
    )
  }
}



export default App;
