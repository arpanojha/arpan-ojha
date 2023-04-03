//import e from "express";
import React,{Fragment, useState} from "react";
//import faster_than_light from "./faster_than_light";
import "../project1.css"

const Chickens = () => {
 
    return (
        <Fragment>
            <h1 className="text-center mt-5">A review of transformers, neural networks and resnets in identifying chickens</h1>
          <p>Tech used: python, Tableau, computer vision</p>
          <p>Check out the poster below below</p>
     <iframe id="inlineFrameExample"
    title="Poster"
    width="400"
    height="400"
    src="https://prismatic-dolphin-85fa2f.netlify.app/poster.html">

</iframe>
        </Fragment>
    );
}
export default Chickens;