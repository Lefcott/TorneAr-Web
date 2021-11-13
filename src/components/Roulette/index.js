import React, { useEffect, useState, useRef } from "react";
import { gsap, TweenMax } from "gsap";
import roulettesrc from "./images/roulette.png";
import indicatorsrc from "./images/indicator.png";
import "./styleRoulette.scss";
import animations from "./animation/index";

function counter(i) {
  return <h1>{i}</h1>;
}



function getRand(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  console.log(result);
  return result;
}

const Roulette = () => {
  const [counter, setcounter] = useState(25);
  const [numWin, setNumWin] = useState(25);
  const counterRef = useRef(counter);

  useEffect(() => {
    let newNumWin = getRand(0, 37);
    let animationRoulette = new animations(newNumWin);
    animationRoulette.animation();
    setNumWin(newNumWin);
    setInterval(() => {
      let newNumWin = getRand(0, 37);
      let animationRoulette = new animations(newNumWin);
      animationRoulette.animation();
      setNumWin(newNumWin);
    }, 30000);
  }, []);

  useEffect(() => {
    const startCounter = () => {
      let interval;
      setTimeout(() => {
          let animation = new animations();
          animation.animationCounter();
          interval = setInterval(() => {
          counterRef.current = counterRef.current - 1;
          setcounter(counterRef.current);
          if (counterRef.current === 0) {
            animation.number = "white";
            clearInterval(interval);
            setcounter(25);
            counterRef.current = 25;
          } else if(counterRef.current > 9){
            animation.animationCounter();
          } else {
            animation.number = "red";
            animation.animationCounter();
          }
        }, 1000);
      }, 5000);
    };

    startCounter();
    setInterval(startCounter, 30000);
  }, []);




  return (
    <div>
      <div className="roulette">
        <img className="rouletteImg" src={roulettesrc} />
        <img className="indicator" src={indicatorsrc} />
        <h1 className ="counterStyle">{counter.toString()}</h1>
      </div>
      <div className ="buttons" >
        <button className = "buttonZero" style={{ cursor: "pointer" }}>3</button> 
        <button className = "buttonRed" style={{ cursor: "pointer" }}>3</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>6</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>9</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>12</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>15</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>18</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>21</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>24</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>27</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>30</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>33</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>36</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>2</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>5</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>8</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>11</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>14</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>17</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>20</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>23</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>26</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>29</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>32</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>35</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>1</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>4</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>7</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>10</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>13</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>16</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>19</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>22</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>25</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>28</button>
        <button className = "buttonBlack" style={{ cursor: "pointer" }}>31</button>
        <button className = "buttonRed" style={{ cursor: "pointer" }}>34</button>
      </div>
    </div>
  );
};

export default Roulette;
