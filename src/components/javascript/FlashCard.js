
import demo from "./flash_cards.png"
import React,{Fragment} from "react";
import '../project1.css'
function Flashcard() {
  
	return (
		<Fragment>
    <div className="container" >
    <h1>Flashcard maker</h1>
    <p>Check out the demo below</p>
     <iframe id="inlineFrameExample"
    title="Seat Booking Demo"
    width="400"
    height="400"
    src="https://arpanojha.github.io/flash_cards/">
</iframe>

    <p> A simple javascript app to help users improve their memory</p>
      <a href="https://arpanojha.github.io/flash_cards/">Check out the project here</a>
    </div>
    </Fragment>
  );
}

export default Flashcard;