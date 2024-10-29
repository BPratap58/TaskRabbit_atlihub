import React from 'react'
import axios from 'axios'
import { useState } from 'react';



export const Login = () => {
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
            const response  = await axios.post('http://localhost:3000/api/auth/login', formData);
            localStorage.setItem('token', response.data.token);
           // await axios.post('http://localhost:3000/api/auth/register', formData);
            alert("Login Done!");
        } catch(erorr){
            alert("Login Failed!!!!");
        }
    };
  return (
    <form onSubmit = {handleSubmit}>
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
    );
}
