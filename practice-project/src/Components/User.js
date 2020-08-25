import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = (props) => {
    const userStyle = {
        backgroundColor:'grey',
        border:"3px solid salmon",
        margin:"5px",
        width:"50%",
        height:"400px",
        float : "left",
        borderRadius:"5px",
        color:"white",
        wordWrap: 'break-word'
      }
      const imageStyle ={
          border:'2px solid white'
      }
      const buttonStyle={
          backgroundColor:"whitesmoke",
          color:'purple',
          border:'1px solid blue'

      }
      const handleSalary =props.handleSalary;
      const {name,email,image,salary} = props.user;
    return (
        <div style={userStyle}>
        <h1>{name}</h1>
        <h3>email: {email}</h3>
        <h3>salary : {salary}</h3>
        <img style= {imageStyle} src={image} alt=""/>
        <br/>
        <button className={buttonStyle} onClick ={()=>handleSalary(name)}>add me</button>
            
        </div>
    );
};

export default User;