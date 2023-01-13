import React from "react";
const Form = ({title, fields, submit, handler}) => {
    const submition = (e) => {
        e.preventDefault();
        const vals = [];
        fields.forEach((field)=>{
            vals[field.name] = e.target[field.name].value;
        })
        handler(vals);
    }
    return <div className="Form x-centering" >
        <div className="top">
            <h1>{title}</h1>
        </div>
        <form onSubmit={(e)=>submition(e)}>
            {
                fields.map((e)=>{
                    return <div key={e.id}>
                        <input 
                        className="field" 
                        type={e.type} 
                        name={e.name} 
                        placeholder={e.name} 
                        id={e.id} 
                        />
                    </div>
                })
            }
            <div className="btns">
                <input 
                    className="x-centering _button" 
                    type="submit" 
                    value={submit.text} 
                    style={submit.style}
                />
            </div>
        </form>
    </div>
}
export default Form;