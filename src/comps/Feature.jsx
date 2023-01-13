import React from "react";
const Feature = ({bg,feature,index}) => {
    const {title,desc} = feature;
    return <div className="Feature" style={{backgroundImage:`url(${bg})`}}>
        <div className="blured layer"></div>
        <div className="content">
            <h3>{title}</h3>
            <p>{desc}</p>
            
        </div>
        <div className="index">{index}</div>
    </div>
}
export default Feature;