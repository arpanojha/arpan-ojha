import demo from "./movie_seat.png"
import React,{Fragment} from "react";
import '../project1.css'
function Movie() {
  
	return (
		<Fragment>
    <div className="container" >
    <h1>Movie Seat Booking</h1>
    <p>Check out the demo below</p>
     <iframe id="inlineFrameExample"
    title="Seat Booking Demo"
    width="400"
    height="400"
    src="https://arpanojha.github.io/movie_seat_booking/">
</iframe>
    <p> A Javascript app written in nodejs and express to manage movie seat booking.</p>
      <a href="https://arpanojha.github.io/movie_seat_booking/">Check out the project here</a>
     
    </div>
    </Fragment>
  );
}

export default Movie;