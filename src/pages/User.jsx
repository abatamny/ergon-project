import React, { useEffect, useState } from "react";
import visalogo from './../resources/visalogo.png';
import Form from "../comps/Form";
import createIcon from './../resources/create-icon.png';
import { useNavigate } from "react-router-dom";
const ChPass = () => {
    const fields = [
        {
            id:"password",
            name:"New Password",
            type:"password"
        },
        {
            id:"cpassword",
            name:"Confirm Password",
            type:"password"
        }
    ];
    const submit = {
        text:"Change Password",
        style:{
            color:"#fff",
            backgroundColor:"#000"
        } 
    }
    return <Form title={"Change your password"} fields={fields} submit={submit} handler={()=>{}}/>
}
const ChPhone = () => {
    const fields = [
        {
            id:"phone",
            name:"New Phone Number",
            type:"text"
        }
    ];
    const submit = {
        text:"Change Phone Number",
        style:{
            color:"#fff",
            backgroundColor:"#000"
        } 
    }
    return <Form title={"Change Your Phone Number"} fields={fields} submit={submit} handler={()=>{}}/>
}
const ChName = () => {
    const fields = [
        {
            id:"fname",
            name:"first name",
            type:"text"
        },
        {
            id:"lname",
            name:"last name",
            type:"text"
        }
    ];
    const submit = {
        text:"Change Your Name",
        style:{
            color:"#fff",
            backgroundColor:"#000"
        } 
    }
    return <Form title={"Change Your Phone Number"} fields={fields} submit={submit} handler={()=>{}}/>
}
const PaymentMethod = () => {
    const MethodLine = ({last4, expire, owner}) => {
        return <div className="payMethod">
            <div className="logo"><img src={visalogo} alt="" /></div>
            <div className="numandexp">
                <span className="num">******{last4}</span>
                <span> | </span>
                <span className="expiration">Expires {expire}</span>
            </div>
            <div className="name">{owner}</div>
        </div>
    }
    const Addnew = () => {
        const fields = [
            {
                id:"cardnumber",
                name:"card number",
                type:"text"
            },
            {
                id:"exp",
                name:"expiration date",
                type:"text"
            },
            {
                id:"owner",
                name:"card owner name",
                type:"text"
            },
        ]
        const submit = {
            text:"Add",
            style:{
                color:"#fff",
                backgroundColor:"#000"
            } 
        }
        return <Form title="Add new payment method"fields={fields} submit={submit} handler={()=>{}}/>
    }
    return <div className="paymentList x-centering">
        <h1>your payment methonds</h1>
        <ul>
            <li>
                <MethodLine last4={3624} expire={"08/27"} owner={"Abed Alrahem Atamny"}/>
            </li>
            <li className="addnew"><Addnew /></li>
        </ul>
    </div>
}
const PaymentHistory = () => {
    return <div className="PaymentHis x-centering">
        <h1>You payment history</h1>
        <table>
            <thead>
            <tr>
                <th>card number</th>
                <th>amount</th>
                <th>date and time</th>
            </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/10/2022</td>
                </tr>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/9/2022</td>
                </tr>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/8/2022</td>
                </tr>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/7/2022</td>
                </tr>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/6/2022</td>
                </tr>
                <tr>
                    <td>******3624</td>
                    <td>15</td>
                    <td>12/5/2022</td>
                </tr>
            </tbody>
            
        </table>
    </div>
}
const Browse = () => {
    const nav = useNavigate();
    return <div className="x-centering browse">
        <div className="top x-centering">
            <h1 className="x-centering">welcome back User</h1>
            <p className="x-centering">start your journey in our AI engine platform</p>
        </div>
        <div onClick={()=>{nav('/user/imagine')}} className="x-centering createnew">
            <div className="layer content blured">
                <img className="x-centering" src={createIcon} alt="" />
                <h3>create new design</h3>
            </div>   
        </div>
    </div>
}
const User = () => {
    const [selected, setSelected] = useState(-1);
    const confg = (id) => selected == id ? "true" : "false";
    const getMain = () => {
        switch(selected){
            case -1:
                return <Browse /> 
            break;
            case 0:
                return <ChName />
            break;
            case 1:
                return <ChPass />
            break;
            case 2:
                return <ChPhone />
            break;
            case 3:
                return <PaymentMethod />
            break;
            case 4:
                return <PaymentHistory />
            break;
        }
    }
    return <div className="User-page in-row-flex">
        <ul className="optionsList">
            <li className="details">
                <div className="cover">
                    <div className="layer blured darked"></div>
                </div>
                <div className="layer userdetails">
                    <div className="userImg x-centering"></div>
                    <div className="userName">User Name</div>
                </div>
                
            </li>
            <li className="btn" clicked={confg(-1)} onClick={()=>setSelected(-1)}>Browse</li>
            <li className="subtitle">Account</li>
            <li className="btn" clicked={confg(0)} onClick={()=>setSelected(0)}>Change name</li>
            <li className="btn" clicked={confg(1)} onClick={()=>setSelected(1)}>Change Password</li>
            <li className="btn" clicked={confg(2)} onClick={()=>setSelected(2)}>Change Phone</li>
            <li className="subtitle">Payment</li>
            <li className="btn" clicked={confg(3)} onClick={()=>setSelected(3)}>Payment Methods</li>
            <li className="btn" clicked={confg(4)} onClick={()=>setSelected(4)}>Billing History</li>
            
        </ul>
        <div className="main">
            {
                getMain()
            }
        </div>
    </div>
}

export default User;