import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const numRoulette=[5,10,23,8,30,11,36,13,27,6,34,17,25,2,21,4,19,15,32,0,26,3,35,12,28,7,29,18,22,9,31,14,20,1,33,16,24];   
class animations{
    constructor(number=0,color="white",id="0"){
        this.number;
        this.color;
        this.id;
    }

    animation(number){
        const random = (numRoulette.indexOf(number) * 360) / 37;
        let tl = gsap.timeline({
            repeat: 0,
            repeatRefresh: true,
        });
        tl.to(".rouletteImg", {
            opacity: 1,
            duration: 2.5,
            rotation: 360 * 8,
            ease: "none",
        });

        tl.to(".rouletteImg", {
            duration: 2.5,
            rotation: 360 * 15 + random,
            ease: "slowly",
        });
        tl.to(".rouletteImg", {
            duration: 5,
            ease: "slowly",
        });
        tl.to(".rouletteImg", {
            duration: 20,
            opacity: 0.5,
            rotation: 0,
            ease: "slowly",
        });
    }

    animationCounter = () =>{
        let blinkEffect = gsap.timeline({
            repeat:0,
            repeatRefresh:true,
        });
        let bounceEffect = gsap.timeline({
            repeat:0,
            repeatRefresh:true,
        });
        blinkEffect.to(".counterStyle", {
            duration:0.7,
            opacity:1,
            ease: "Power4-easeOut",
          });
        blinkEffect.to(".counterStyle", {
            duration:0.3,
            opacity:0,
            ease: "Power4-easeOut",
        });
        bounceEffect.to(".counterStyle",{
            duration: 0.5,
            fontSize: "1000%",
        });
        bounceEffect.to(".counterStyle",{
            duration: 0.5,
            fontSize: "500%",
        });
        if(this.number === "red"){
            let red = gsap.timeline({
                repeat:0,
                repeatRefresh:true,
            });
            red.to(".counterStyle",{
                duration: 1,
                color: "red",
            });
        } else {
            let white = gsap.timeline({
                repeat:0,
                repeatRefresh:true,
            });
            white.to(".counterStyle",{
                duration: 0,
                color: "white",
            });
        }
    }

    buttonAnimation = () =>{ 

        if(this.id === "button1To12"){
            let numbers =[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
            ];
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button1To12Out"){
            gsap.to("#button1To12",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"
            ];
            let colors =[
                "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#474747", "#ff1a39"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button13To24"){
            let numbers =[
                "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"
            ];
            let colors =[
                "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button13To24Out"){
            gsap.to("#button13To24",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"
            ];
            let colors =[
                "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button25To36"){
            let numbers =[
                "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"
            ];
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button25To36Out"){
            gsap.to("#button25To36",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"
            ];
            let colors =[
                "#ff1a39", "#474747", "#ff1a39", "#474747", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button2_1"){
            let numbers =[
                "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"
            ];
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#ff5c71", "#7a7a7a", "#ff5c71", "#ff5c71", "#7a7a7a", "#ff5c71", "#ff5c71", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button2_1Out"){
            gsap.to("#button2_1",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"
            ];
            let colors =[
                "#ff1a39", "#474747", "#ff1a39",  "#ff1a39", "#474747", "#ff1a39",  "#ff1a39", "#474747", "#ff1a39",  "#ff1a39", "#474747", "#ff1a39"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button2_2"){
            let numbers =[
                "2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"
            ];
            let colors =[
                "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button2_2Out"){
            gsap.to("#button2_2",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"
            ];
            let colors =[
                "#474747", "#ff1a39", "#474747",  "#474747", "#ff1a39", "#474747",  "#474747", "#ff1a39", "#474747",  "#474747", "#ff1a39", "#474747"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button2_3"){
            let numbers =[
                "1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"
            ];
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button2_3Out"){
            gsap.to("#button2_3",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"
            ];
            let colors =[
                "#ff1a39", "#474747", "#ff1a39", "#474747", "#474747", "#ff1a39",  "#ff1a39", "#474747", "#ff1a39",  "#474747", "#474747", "#ff1a39"
            ];
            
            for (let i = 0; i < 13; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }
        
        if(this.id === "button1To18"){
            let numbers =[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"
            ];
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button1To18Out"){
            gsap.to("#button1To18",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers =[
                "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"
            ];
            let colors =[
                "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "Even"){
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i % 2 === 1){
                    numbers = numbers.concat(i);
                }
            }
            let colors =[
                "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "EvenOut"){
            gsap.to("#Even",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i % 2 === 1){
                    numbers = numbers.concat(i);
                }
            }
            let colors =[
                "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39", "#474747", "#474747", "#474747", "#474747", "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39", "#474747", "#474747", "#474747", "#474747"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }
        
        if(this.id === "RedButton"){
            gsap.to(".buttonRed",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
        } else if(this.id === "RedButtonOut"){
            gsap.to("#RedButton",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            gsap.to(".buttonRed",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
        }

        if(this.id === "BlackButton"){
            gsap.to(".buttonBlack",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
        } else if(this.id === "BlackButtonOut"){
            gsap.to("#BlackButton",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            gsap.to(".buttonBlack",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
        }

        if(this.id === "oddButton"){
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i % 2 === 0){
                    numbers = numbers.concat(i);
                }
            }
            console.log(numbers);
            let colors =[
                "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#7a7a7a", "#ff5c71", "#ff5c71", "#ff5c71", "#ff5c71"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "oddButtonOut"){
            gsap.to("#oddButton",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i % 2 === 0){
                    numbers = numbers.concat(i);
                }
            }
            let colors =[
                "#474747", "#474747", "#474747", "#474747", "#474747", "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39", "#474747", "#474747", "#474747", "#474747", "#474747", "#ff1a39", "#ff1a39", "#ff1a39", "#ff1a39"
            ];

            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        if(this.id === "button19To36"){
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i >= 19){
                    numbers = numbers.concat(i);
                }
            }
            console.log(numbers);
            let colors =[
                "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71", "#7a7a7a", "#ff5c71"
            ];
            
            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        } else if(this.id === "button19To36Out"){
            gsap.to("#button19To36",{
                duration:0.5,
                backgroundColor: this.color,
                ease: "Power4-easeOut",
            });
            let numbers = new Array();
            for(let i = 1; i< 37; i++){
                if(i >= 19){
                    numbers = numbers.concat(i);
                }
            }
            let colors =[
                "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", "#474747", "#ff1a39", 
            ];

            for (let i = 0; i < numbers.length; i++) {
                gsap.to("#num"+numbers[i],{
                    duration:0.5,
                    backgroundColor: colors[i],
                    ease: "Power4-easeOut",
                });
            }
        }

        

        gsap.to("#"+this.id,{
            duration:0.5,
            backgroundColor: this.color,
            ease: "Power4-easeOut",
        });
    }
}
   

export default animations;
