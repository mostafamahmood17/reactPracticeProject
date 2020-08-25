import React, { useState, useEffect } from 'react';
import User from '../src/Components/User.js'
import fake2 from '../src/fakeData/fake2.js'
import Cart from '../src/Components/Cart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(fake2);
  
  
const handleSalary = (user) => {console.log("user", user)}
  const userStyle = {
    border:"1px solid salmon",
    margin:"5px"
  }
  
  const cartStyle= {
    display:"flex",
    justifyContent:'center',
}

   
  return (
    // <div className="App">
    //   <header className="App-header" >
    <div> 
      <div>
      {fake2.map(fake => <User  user={fake} handleSalary={handleSalary} key={fake.id}></User>)}
      </div> 
       
      <div style={cartStyle}>
      <Cart></Cart>
      </div>   
    </div>    
    
  );
}


export default App;
