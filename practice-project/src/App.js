import React, { useState} from 'react';
import User from '../src/Components/User.js'
import fake2 from '../src/fakeData/fake2.js'
import Cart from '../src/Components/Cart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(fake2);
  const [cart , setCart] = useState([]);
  
  
  
const handleSalary = (user, id) => {
  const totalUser =[...cart, user];
  setCart(totalUser)
  console.log('nabil', totalUser)}
  
  
  const cartStyle= {
    display:"flex",
    justifyContent:'center',
}
const headStyle = {
  backgroundColor:'grey',
  border:"2px solid salmon",
  margin:"5px",
  width:"50%",
  float : "left",
  borderRadius:"5px",
  color:"white",
  wordWrap: 'break-word'
}

const hello = user.map(fakes => fakes.salary)
console.log("wow",hello)

   
  return (
    <div className="App">
      <header className="App-header" >
        <h1 style={headStyle}s>Friends Zone</h1>
    <div> 
      <div>
      {user.map(fake => <User  user={fake} handleSalary={handleSalary} key={fake.id}></User>)}
      </div> 
       
      <div style={cartStyle}>
      
      <div>
            <h1>Total Friends</h1>
            <h2>Total Person : {cart.length}</h2>
            <h3>Total Salary : $ {hello.reduce( (total, cart) => total + cart.salary , 0 )}</h3>   

        </div>
      </div>   
    </div>    
  </header>
  </div>
    
  );
}


export default App;
