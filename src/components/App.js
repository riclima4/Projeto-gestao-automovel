import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../context/AuthContext"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
        <div>
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path='/' element={<Dashboard/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
              </Routes>
            </AuthProvider>
          </Router>      
        </div>
    
  )
}

export default App;
