import React from "react";
import Form from "../comps/Form";
const Register = () => {
    const fields = [
        {
            id:"email",
            name:"Email",
            type:"email"
        },
        {
            id:"fullName",
            name:"Full Name",
            type:"text"
        },
        {
            id:"phone",
            name:"Phone Number",
            type:"text"
        },
        {
            id:"password",
            name:"Password",
            type:"password"
        },
        {
            id:"Cpassword",
            name:"Confirm Password",
            type:"password"
        }
        
    ];
    const submit = {
        text:"Sign Up",
        style:{
            color:"#fff",
            backgroundColor:"#000"
        } 
    }
    return <div className="Login-page">
        <Form title={"Sign Up"} fields={fields} submit={submit} handler={()=>{}}/>
    </div> 
}
export default Register;