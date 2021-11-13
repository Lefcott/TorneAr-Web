import "../styleRoulette.scss";
import animations from "../animation/index";
import {Component } from "react";

class App extends Component{
    static parameters(color,id){
        return () => {
            let buttonAnimations = new animations();
            buttonAnimations.color = color;
            buttonAnimations.id = id;
            buttonAnimations.buttonAnimation();
        };
    }
}

const ButtonComponent = () => {
    return (
        <div className ="buttons" >
        <button onMouseLeave={App.parameters("#1dbe45","num0")} onMouseEnter={App.parameters("#32ff65","num0")} id= "num0" className = "buttonZero" style={{ cursor: "pointer" }}>0</button> 
        <button onMouseLeave={App.parameters("#ff1a39","num3")} onMouseEnter={App.parameters("#ff5c71","num3")} id= "num3" className = "buttonRed" style={{ cursor: "pointer" }}>3</button>
        <button onMouseLeave={App.parameters("#474747","num6")} onMouseEnter={App.parameters("#7a7a7a","num6")} id= "num6" className = "buttonBlack" style={{ cursor: "pointer" }}>6</button>
        <button onMouseLeave={App.parameters("#ff1a39","num9")} onMouseEnter={App.parameters("#ff5c71","num9")} id= "num9"  className = "buttonRed" style={{ cursor: "pointer" }}>9</button>
        <button onMouseLeave={App.parameters("#ff1a39","num12")} onMouseEnter={App.parameters("#ff5c71","num12")} id= "num12"  className = "buttonRed" style={{ cursor: "pointer" }}>12</button>
        <button onMouseLeave={App.parameters("#474747","num15")} onMouseEnter={App.parameters("#7a7a7a","num15")} id= "num15"  className = "buttonBlack" style={{ cursor: "pointer" }}>15</button>
        <button onMouseLeave={App.parameters("#ff1a39","num18")} onMouseEnter={App.parameters("#ff5c71","num18")} id= "num18" className = "buttonRed" style={{ cursor: "pointer" }}>18</button>
        <button onMouseLeave={App.parameters("#ff1a39","num21")} onMouseEnter={App.parameters("#ff5c71","num21")} id= "num21" className = "buttonRed" style={{ cursor: "pointer" }}>21</button>
        <button onMouseLeave={App.parameters("#474747","num24")} onMouseEnter={App.parameters("#7a7a7a","num24")} id= "num24" className = "buttonBlack" style={{ cursor: "pointer" }}>24</button>
        <button onMouseLeave={App.parameters("#ff1a39","num27")} onMouseEnter={App.parameters("#ff5c71","num27")} id= "num27" className = "buttonRed" style={{ cursor: "pointer" }}>27</button>
        <button onMouseLeave={App.parameters("#ff1a39","num30")} onMouseEnter={App.parameters("#ff5c71","num30")} id= "num30" className = "buttonRed" style={{ cursor: "pointer" }}>30</button>
        <button onMouseLeave={App.parameters("#474747","num33")} onMouseEnter={App.parameters("#7a7a7a","num33")} id= "num33" className = "buttonBlack" style={{ cursor: "pointer" }}>33</button>
        <button onMouseLeave={App.parameters("#ff1a39","num36")} onMouseEnter={App.parameters("#ff5c71","num36")} id= "num36" className = "buttonRed" style={{ cursor: "pointer" }}>36</button>
        <button onMouseLeave={App.parameters("#474747","num2")} onMouseEnter={App.parameters("#7a7a7a","num2")} id= "num2" className = "buttonBlack" style={{ cursor: "pointer" }}>2</button>
        <button onMouseLeave={App.parameters("#ff1a39","num5")} onMouseEnter={App.parameters("#ff5c71","num5")} id= "num5" className = "buttonRed" style={{ cursor: "pointer" }}>5</button>
        <button onMouseLeave={App.parameters("#474747","num8")} onMouseEnter={App.parameters("#7a7a7a","num8")} id= "num8" className = "buttonBlack" style={{ cursor: "pointer" }}>8</button>
        <button onMouseLeave={App.parameters("#474747","num11")} onMouseEnter={App.parameters("#7a7a7a","num11")} id= "num11" className = "buttonBlack" style={{ cursor: "pointer" }}>11</button>
        <button onMouseLeave={App.parameters("#ff1a39","num14")} onMouseEnter={App.parameters("#ff5c71","num14")} id= "num14" className = "buttonRed" style={{ cursor: "pointer" }}>14</button>
        <button onMouseLeave={App.parameters("#474747","num17")} onMouseEnter={App.parameters("#7a7a7a","num17")} id= "num17" className = "buttonBlack" style={{ cursor: "pointer" }}>17</button>
        <button onMouseLeave={App.parameters("#474747","num20")} onMouseEnter={App.parameters("#7a7a7a","num20")} id= "num20" className = "buttonBlack" style={{ cursor: "pointer" }}>20</button>
        <button onMouseLeave={App.parameters("#ff1a39","num23")} onMouseEnter={App.parameters("#ff5c71","num23")} id= "num23" className = "buttonRed" style={{ cursor: "pointer" }}>23</button>
        <button onMouseLeave={App.parameters("#474747","num26")} onMouseEnter={App.parameters("#7a7a7a","num26")} id= "num26" className = "buttonBlack" style={{ cursor: "pointer" }}>26</button>
        <button onMouseLeave={App.parameters("#474747","num29")} onMouseEnter={App.parameters("#7a7a7a","num29")} id= "num29" className = "buttonBlack" style={{ cursor: "pointer" }}>29</button>
        <button onMouseLeave={App.parameters("#ff1a39","num32")} onMouseEnter={App.parameters("#ff5c71","num32")} id= "num32" className = "buttonRed" style={{ cursor: "pointer" }}>32</button>
        <button onMouseLeave={App.parameters("#474747","num35")} onMouseEnter={App.parameters("#7a7a7a","num35")} id= "num35" className = "buttonBlack" style={{ cursor: "pointer" }}>35</button>
        <button onMouseLeave={App.parameters("#ff1a39","num1")} onMouseEnter={App.parameters("#ff5c71","num1")} id= "num1" className = "buttonRed" style={{ cursor: "pointer" }}>1</button>
        <button onMouseLeave={App.parameters("#474747","num4")} onMouseEnter={App.parameters("#7a7a7a","num4")} id= "num4" className = "buttonBlack" style={{ cursor: "pointer" }}>4</button>
        <button onMouseLeave={App.parameters("#ff1a39","num7")} onMouseEnter={App.parameters("#ff5c71","num7")} id= "num7" className = "buttonRed" style={{ cursor: "pointer" }}>7</button>
        <button onMouseLeave={App.parameters("#474747","num10")} onMouseEnter={App.parameters("#7a7a7a","num10")} id= "num10" className = "buttonBlack" style={{ cursor: "pointer" }}>10</button>
        <button onMouseLeave={App.parameters("#474747","num13")} onMouseEnter={App.parameters("#7a7a7a","num13")} id= "num13" className = "buttonBlack" style={{ cursor: "pointer" }}>13</button>
        <button onMouseLeave={App.parameters("#ff1a39","num16")} onMouseEnter={App.parameters("#ff5c71","num16")} id= "num16" className = "buttonRed" style={{ cursor: "pointer" }}>16</button>
        <button onMouseLeave={App.parameters("#ff1a39","num19")} onMouseEnter={App.parameters("#ff5c71","num19")} id= "num19" className = "buttonRed" style={{ cursor: "pointer" }}>19</button>
        <button onMouseLeave={App.parameters("#474747","num22")} onMouseEnter={App.parameters("#7a7a7a","num22")} id= "num22" className = "buttonBlack" style={{ cursor: "pointer" }}>22</button>
        <button onMouseLeave={App.parameters("#ff1a39","num25")} onMouseEnter={App.parameters("#ff5c71","num25")} id= "num25" className = "buttonRed" style={{ cursor: "pointer" }}>25</button>
        <button onMouseLeave={App.parameters("#474747","num28")} onMouseEnter={App.parameters("#7a7a7a","num28")} id= "num28" className = "buttonBlack" style={{ cursor: "pointer" }}>28</button>
        <button onMouseLeave={App.parameters("#474747","num31")} onMouseEnter={App.parameters("#7a7a7a","num31")} id= "num31" className = "buttonBlack" style={{ cursor: "pointer" }}>31</button>
        <button onMouseLeave={App.parameters("#ff1a39","num34")} onMouseEnter={App.parameters("#ff5c71","num34")} id= "num34" className = "buttonRed" style={{ cursor: "pointer" }}>34</button>
        <button onMouseLeave={App.parameters("#474747","button1To12Out")} onMouseEnter={App.parameters("#7a7a7a","button1To12")} id= "button1To12" className = "button1To12" style={{ cursor: "pointer" }}>1 to 12</button>
        <button onMouseLeave={App.parameters("#474747","button13To24Out")} onMouseEnter={App.parameters("#7a7a7a","button13To24")} id= "button13To24" className = "button13To24" style={{ cursor: "pointer" }}>13 to 24</button>
        <button onMouseLeave={App.parameters("#474747","button25To36Out")} onMouseEnter={App.parameters("#7a7a7a","button25To36")} id= "button25To36" className = "button25To36" style={{ cursor: "pointer" }}>25 to 36</button>
        <button onMouseLeave={App.parameters("#474747","button2_1Out")} onMouseEnter={App.parameters("#7a7a7a","button2_1")} id= "button2_1" className="button2_1" style={{ cursor: "pointer" }}>2:1</button>
        <button onMouseLeave={App.parameters("#474747","button2_2Out")} onMouseEnter={App.parameters("#7a7a7a","button2_2")} id= "button2_2" className="button2_2" style={{ cursor: "pointer" }}>2:1</button>
        <button onMouseLeave={App.parameters("#474747","button2_3Out")} onMouseEnter={App.parameters("#7a7a7a","button2_3")} id= "button2_3" className="button2_3" style={{ cursor: "pointer" }}>2:1</button>
        <button onMouseLeave={App.parameters("#474747","button1To18Out")} onMouseEnter={App.parameters("#7a7a7a","button1To18")} id= "button1To18" className="button1To18" style={{ cursor: "pointer" }}>1 to 18</button>
        <button onMouseLeave={App.parameters("#474747","EvenOut")} onMouseEnter={App.parameters("#7a7a7a","Even")} id= "Even" className="Even" style={{ cursor: "pointer" }}>Even</button>
        <button onMouseLeave={App.parameters("#474747","RedButtonOut")} onMouseEnter={App.parameters("#7a7a7a","RedButton")} id= "RedButton" className="RedButton" style={{ cursor: "pointer" }} />
        <button onMouseLeave={App.parameters("#474747","BlackButtonOut")} onMouseEnter={App.parameters("#7a7a7a","BlackButton")} id= "BlackButton" className="BlackButton" style={{ cursor: "pointer" }} />
        <button onMouseLeave={App.parameters("#474747","oddButtonOut")} onMouseEnter={App.parameters("#7a7a7a","oddButton")} id= "oddButton" className="oddButton" style={{ cursor: "pointer" }}>Odd</button>
        <button onMouseLeave={App.parameters("#474747","button19To36Out")} onMouseEnter={App.parameters("#7a7a7a","button19To36")} id= "button19To36" className="button19To36" style={{ cursor: "pointer" }}>19 to 36</button>
      </div>
    );
}


export default ButtonComponent;