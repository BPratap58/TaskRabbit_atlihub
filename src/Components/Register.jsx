import { useState } from "react"
import React from 'react'
import axios from 'axios';

export const Register = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post('http://localhost:3000/api/auth/register', formData);
            alert("Registered Done!");
        } catch(erorr){
            alert("Registerion Failed!!!!");
        }
    };

    
  return (
    <div className="register-candiate">
        <h2>Register</h2>
        <form onSubmit = {handleSubmit}>
            <div> 
                <label> UserName: </label>
                <input type="text" name="username" placeholder="UserName" onChange={handleChange} required/>
            </div>
            <div> 
                <label> Email: </label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
            </div>
            
            <div> 
                <label> Password: </label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  );
};
