import React, { useState } from 'react'
import { ImageUpload } from './ImageUpload'
import axios from 'axios';

export const Profile = () => {

    const [profile, setProfile] = useState({username: "",
        avatar: ""
    });

    const [newUsername, setNewUsername] = useState('');
    const [newAvatar, setNewAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', newUsername);
        if(newAvatar) formData.append('avatar', newAvatar);

        try{
            const token  = localStorage.getItem('token');
            const response = axios.put('http://localhost:3000/api/auth/profile', formData);
            headers:{

            }

            setProfile(response.data.user);
            setMessage(response.data.message);
        }
        catch(error){
            setMessage('Profile Update Failed!');
        }
        
    };

    const handleImgChange = {

    };

  return (
    <div>
        <h2>Profile</h2>
        <div>
            <img src={preview} alt="Profie Images"></img>
            <p><strong>UserName:</strong> {profile.usename} </p>
        </div>

        <form onSubmit={handleSubmit}>
            <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder='UserName' ></input>
            <input type="file" accept='image/*' onChange={handleImgChange}></input>
            
            <button type='submit' > Update Profile </button>
        </form>

        <p>{message}</p>

    </div>
  );
}
