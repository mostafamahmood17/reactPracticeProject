import React, { useState} from 'react';
import User from '../src/Components/User.js'
import fake2 from '../src/fakeData/fake2.js'
// import Cart from '../src/Components/Cart.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(fake2);
  const [cart , setCart] = useState([]);
  
const handleSalary = (user) => {
  const totalUser =[...cart, user];
  setCart(totalUser)
  console.log('nabil', totalUser)}

  const totalSalary = cart.reduce( (total, anum) => total + anum.salary , 0 );
  console.log("wow", cart)
  
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
const cartstyle={
          position:"fixed",
          color:'white',
          backgroundColor:'grey',
          padding:'10px',
          border:"2px solid salmon",
          margin : "5px",
          borderRadius: "5px"
      }
  return (
    <div className="App">
      <header className="App-header" >
        <h1 style={headStyle}s>Friends Zone</h1>
    <div> 
      <div>
      {user.map(fake => <User  user={fake} handleSalary={handleSalary} key={fake.id}></User>)}
      </div> 
       
      <div style={cartStyle}>
      
      <div style={cartstyle}>
            <h1>Total Friends</h1>
            <h2>Total Person : {cart.length}</h2>
            <h3>Total Salary : $ {totalSalary}</h3>  
            {console.log(totalSalary)} 

        </div>
      </div>   
    </div>    
  </header>
  </div>
    
  );
}


export default App;
