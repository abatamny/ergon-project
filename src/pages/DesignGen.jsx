import React, { useState } from "react";
import previewicon from './../resources/preview-icon.jpg';
const DesignGen = () => {
    const commands = [
        {
            name:"/imagine",
            disc:"lets start with this operation, write your imagines. for example: /imagine shoes ecommrce website based on white and green colors"
        },
        {
            name:"/edit",
            disc:"choose the most apropriate design from the list via the id, and make a change on it, for example: /edit --id 4 --e change the cover color to red"
        },
        {
            name:"/parse",
            disc:"the command will parse the chosen design to code, for example: /parse --id 3 --fw react"
        }
    ]
    const getComms = () => {
        return commands.map((e)=>{
            return <li key={e.name}>
                <h4>{e.name}</h4>
                <p>{e.disc}</p>
            </li>
        })
    }
    const dPath = "./../resources/designs/";
    const designs = [
        {
            id:"0",
            src:'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/services-website-templates-1000x750.jpg'
        },
        {
            id:"1",
            src:'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/09/Victor-1.jpg'
        },
        {
            id:"2",
            src:'https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/09/Carepair.jpg'
        },
        {
            id:"3",
            src:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/09/Gardening.jpg"
        },
        {
            id:"4",
            src:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/09/Unbrew-1.jpg"
        },
        {
            id:"5",
            src:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/Clany.jpg"
        },
        {
            id:"6",
            src:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/MoversCO.jpg"
        },
        {
            id:"7",
            src:"https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/Laundry.jpg"
        }
    ]
    const [previewed , setpre] = useState(-1);
    const Designs = (e) => {
        const [hover,setH] = useState(false);
        return <div key={e.id} onClick={()=>setpre(+e.id)}   onMouseLeave={()=>setH(false)} onMouseOver={()=>setH(true)} className="designElement">
            <img src={e.src}></img>
            <div className="_id">{e.id}</div>
            <div className={`layer ${!hover && 'hidden'}`}>
                <img className="x-centering" src={previewicon} />
            </div>
        </div>
    }   
    const submition = (e) => {
        e.preventDefault();
        if(commandval === "/parse".trim()){
            window.location.assign('/user/CodeGen');
        }
            
    }
    const [listOpened, setListOpened] = useState(false);
    const [commandval, setcommandval] = useState('');
    return <div className="DesignGen-page">
        <div className="terminal">
            <form onSubmit={(e)=>{submition(e)}}>
                <input value={commandval} onChange={(e)=>setcommandval(e.target.value)} className="x-centering" onBlur={()=>setListOpened(false)} onFocus={()=>setListOpened(true)} type="text" placeholder="write your command"/>
                <div className="x-centering">press enter to generate</div>
            </form>
            
            {
                listOpened && 
                <ul className="x-centering blured">
                    {getComms()}
                </ul>
            }
            
        </div>
        <div className="viewer in-row-flex" >
            {designs.map((e)=>Designs(e))}
        </div>
        {
            previewed >= 0 &&
            <div className="layer preview">
                <img src={designs[previewed].src} alt="" />
                <span onClick={()=>setpre(-1)} className="closeit">X</span>
            </div>
        }
        
    </div>
}
export default DesignGen;