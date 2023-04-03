import React from 'react';
import Mnist from './components/MNIST'
import Flashcard from './components/javascript/FlashCard'
import Movie from './components/javascript/Movieseat'
import Speedtyping from './components/javascript/SpeedTyping'
import Mbo from "./components/DataScience/market_basket_optimizer"
import Heartattack from "./components/DataScience/heart_attack"
import InputNews from "./components/DataScience/inputfakenews"
import Googleanalytics from "./components/DataAnalyst/googleanalytics"
import Bloomingtonoralhistoryproject from "./components/DataAnalyst/bohp"
import Chickens from "./components/DataScience/chickens"
import './App.css';
function App() {
  return (
    <React.Fragment>
    <div className="container">
      <h1>Arpan Ojha Portfolio</h1>
      <InputNews />
      <Chickens/>
      <Bloomingtonoralhistoryproject/>
        <Googleanalytics/>
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
