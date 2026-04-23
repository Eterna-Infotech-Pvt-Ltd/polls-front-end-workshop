import { useState } from 'react';
import {BrowserRouter, Routes, Route, Router, Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route key="login" path='/login' element={<LoginPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
