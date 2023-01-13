import React, { useContext } from "react";
import Form from "../comps/Form";
import { Globals } from "../App";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const {setUserMode} = useContext(Globals);
    const nav = useNavigate();
    const fields = [
        {
            id:"email",
            name:"Email",
            type:"email"
        },
        {
            id:"password",
            name:"Password",
            type:"password"
        }
    ];
    const submit = {
        text:"login",
        style:{
            color:"#fff",
            backgroundColor:"#000"
        } 
    }
    const handler = (vals) => {
        if(vals['Email'] === "user@user.com" && vals['Password'] === "user"){
            setUserMode(true);
            nav("/user");
        }
    }
    return <div className="Login-page">
        <Form title={"Login"} fields={fields} submit={submit} handler={handler}/>
        <p className="x-centering">username: user@user.com <br /> password: user</p>
    </div> 
}
export default Login;