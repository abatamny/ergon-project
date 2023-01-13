import React, { useContext, useEffect, useState } from "react";
import logo from '../resources/logo.png';
import {Globals } from './../App';
import createIcon from './../resources/create-icon.png';
import accountIcon from './../resources/account-icon.png';
import { redirect, useNavigate } from "react-router-dom";
const Header = () =>{
    const nav = useNavigate();
    const {userMode,setUserMode} = useContext(Globals);
    const [accountListDisplay, setListDisplay] = useState(false);
    const accountListEvent = (eventid) => {
        switch(eventid){
            case 0:
                nav("/user");
                break;
            case 1:
                setUserMode(false);
                nav("/");
                break;
        }
        setListDisplay(false);

    }
   
    return <header className="Header">
        <div className="leftSide" onClick={()=>{nav("/")}}>
            <img src={logo} alt="" />
            <span><h3>website name</h3></span>
        </div>
        
        {
            !userMode && (
                <div className="rightSide ">
                    <a href="/login">login</a>
                    <a className="--DefBTN" href="/register">sign up</a>
                </div>
            )
        }
        {
            userMode && (
                <div className="rightSide">
                    <a className="in" href="/user/imagine"><img className="--DefIMG" src={createIcon}/></a>
                    <a className="in" aria-label="Alist" onClick={()=>setListDisplay(!accountListDisplay)}> <img className="--DefIMG" src={accountIcon}/></a>
                    {
                        accountListDisplay && (
                            <ul className="accountList">
                                <li onClick={()=>accountListEvent(0)}>Account</li>
                                <li onClick={()=>accountListEvent(1)}>Sign out</li>
                            </ul>
                        )
                    }
                    
                </div>
            )
        }
        
    </header>
}
export default Header;