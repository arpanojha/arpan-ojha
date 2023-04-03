//import e from "express";
import React,{Fragment, useState} from "react";
//import faster_than_light from "./faster_than_light";
import "../project1.css"
const InputNews = () => {
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");
    const onsubmit = async(e) =>{
        e.preventDefault();
        try {

            const body = {"title":title,"text":text}
            console.log(JSON.stringify(body))
            const response = await fetch('http://127.0.0.1:8080/'+"predict_fake_true",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message)
            
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Input News</h1>
            <form className="d-flex" onSubmit={onsubmit}> 
                <input type="text" className="form-control" value = {title} onChange={e=> setTitle(e.target.value)}/>
                <input type="text" className="form-control" value = {text} onChange={e=> setText(e.target.value)}/>
                <button className="btn btn-success">Check</button>
            </form>
        </Fragment>
    );
}
export default InputNews;