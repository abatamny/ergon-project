import React from "react";
import downloadIcon from './../resources/download-icon.png';
const CodeGen = () => {
    
    return <div className="CodeGen-page">
        <div className="downloader">
            <a className="in-row-flex" href=""><span>download .ZIP</span><img src={downloadIcon} alt="" /></a>
        </div>
        <iframe  src="https://stackblitz.com/edit/react-ts-hbatph?file=App.tsx" frameborder="0"></iframe>
        
    </div>
}
export default CodeGen;