
import React,{Fragment} from "react";
import '../project1.css'
function Speedtyping() {
  
	return (
		<Fragment>
    <div className="container" >
    <h1>Speed Typing</h1>
    <p>Check out the demo below</p>
     <iframe id="inlineFrameExample"
    title="Speed Typing Demo"
    width="400"
    height="400"
    src="https://arpanojha.github.io/speed_typing/">
</iframe>

    <p> A javascript app using nodejs and express to help users improve their typing speeds</p>
      <a href="https://arpanojha.github.io/speed_typing/">Check out the project here</a>
    </div>
    </Fragment>
  );
}

export default Speedtyping;