import React from 'react';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Profile} from './Components/Profile';
import { ImageUpload } from './Components/ImageUpload';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/upload" element={<ImageUpload />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
