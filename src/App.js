import Footer from "./comps/Footer";
import Header from "./comps/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Redirect, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User";
import DesignGen from "./pages/DesignGen";
import CodeGen from "./pages/CodeGen";
import { createContext, useReducer, useState } from "react";
import P404 from "./pages/P404";
export const Globals = createContext();
const userModeReducer = (status,action) => {
  console.log(action);
  sessionStorage.setItem("userMode", action);
  return action;
}
const getSessionUserMode = () => {
  return sessionStorage.getItem("userMode") === "true"? true : false
}
const App = () => {
  const [userMode,setUserMode] = useReducer(userModeReducer, getSessionUserMode());
  const GlobalsVals = {
    userMode: userMode,
    setUserMode:setUserMode
  }; 
  
  return (
    <div className="App">
      <Globals.Provider value={GlobalsVals}>
      <BrowserRouter>
          <Header />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login/>} />
            
            {
              userMode && (
                <Route path="/user">
                  <Route path="" element={<User />} />
                  <Route path="imagine" element={<DesignGen />} />
                  <Route path="CodeGen" element={<CodeGen />} />
                </Route>
              )
            }
            {
              !userMode && <Route element={<Login/>} />
            }
            
            <Route path="*" element={<P404 />}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </Globals.Provider>
    </div>
  );
}

export default App;
