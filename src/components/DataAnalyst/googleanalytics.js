//import e from "express";
import React,{Fragment, useState} from "react";
//import faster_than_light from "./faster_than_light";
import "../project1.css"

const Googleanalytics = () => {
 
    return (
        <Fragment>
            <h1 className="text-center mt-5">Analyzing and Visualizing Usage for Common Coordinate Framework User Interfaces Using Google Analytics Data</h1>
          <p>Tech used: Tableau, python</p>
          <p>Check out the project below below</p>
     <iframe id="inlineFrameExample"
    title="Client report"
    width="400"
    height="400"
    src="https://prismatic-dolphin-85fa2f.netlify.app/ga.html">
</iframe>
   <p>The network tree diagram below</p>
   <iframe id="inlineFrameExample"
    title="Network tree diagram"
    width="400"
    height="400"
    src="https://prismatic-dolphin-85fa2f.netlify.app/network.html">
</iframe>
        </Fragment>
    );
}
export default Googleanalytics;