import React from 'react';
import Mnist from './components/MNIST'
import Flashcard from './components/javascript/FlashCard'
import Movie from './components/javascript/Movieseat'
import Speedtyping from './components/javascript/SpeedTyping'
import Mbo from "./components/DataScience/market_basket_optimizer"
import Heartattack from "./components/DataScience/heart_attack"
import './App.css';
function App() {
  return (
    <React.Fragment>
    <div className="container">
      <h1>Arpan Ojha Portfolio</h1>

        <Mnist />
        <Mbo/>
        <Heartattack/>
        <Flashcard/>
        <Movie />
        <Speedtyping />
        </div>
    </React.Fragment>
  );
}

export default App;
