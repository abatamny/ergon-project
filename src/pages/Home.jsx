import React, { useContext } from "react";
import Feature from "../comps/Feature";
import fe1 from '../resources/feature1.jpg';
import fe2 from '../resources/feature2.jpg';
import fe3 from '../resources/feature3.jpg';
import { Globals } from "../App";

const Home = () => {
    const {userMode} = useContext(Globals);
    const features = [
        {
            title:"Imagine",
            desc:"Write your thoughts and imagines, press enter, then you will recieve number of designs whose based on your text."
        },
        {
            title:"Choose",
            desc:"Choose an appropriate design, if its ok then go next, else you can make a changes of the design using writing other notes"
        },
        {
            title:"Parse",
            desc:"Convert the design to a JS code, you can also choose which framework you are working with (react.js, vue.js, Angular.js)"
        }
    ]
    return <div id="Home-page">
        <section className="cover">
            <div className="bg"></div>
            <div className="blur"></div>
            <div className="content">
                <h1>MAKE YOUR IMAGINES REAL</h1>
                <p>Discover the platform that gives you the freedom to design and implement the design for your website exactly the way you want.<br/>based on AI generator</p>
                <div className="btns">
                    {
                        !userMode && <>
                            <a className="reg" href="/register">Get Started</a>
                            <a className="login" href="/login">Login</a>
                        </>       
                    }
                    {
                        userMode && <>
                            <a className="reg" href="/user/imagine">Create New Design</a>
                        </>
                    }
                    
                </div> 
                {
                    !userMode && <p>Try it 7 days for free</p>  
                }
                
            </div>
        </section>
        <section className="features blured">
                <h2>How It Works</h2>
                <div className="x-centering in-row-flex">
                    <Feature index={1} bg={fe1} feature={features[0]}/>
                    <Feature index={2} bg={fe2} feature={features[1]}/>
                    <Feature index={3} bg={fe3} feature={features[2]}/>
                </div>
                
        </section>
    </div>    
}
export default Home;