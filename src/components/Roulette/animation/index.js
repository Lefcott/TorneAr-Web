import { gsap } from "gsap";

const numRoulette = [
  5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32, 0, 26,
  3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24,
];

class animations {
  constructor() {}

  animation = (number) => {
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
  };

  animationCounter = () => {
    let blinkEffect = gsap.timeline({
      repeat: 0,
      repeatRefresh: true,
    });
    let bounceEffect = gsap.timeline({
      repeat: 0,
      repeatRefresh: true,
    });
    blinkEffect.to(".counterStyle", {
      duration: 0.7,
      opacity: 1,
      ease: "Power4-easeOut",
    });
    blinkEffect.to(".counterStyle", {
      duration: 0.3,
      opacity: 0,
      ease: "Power4-easeOut",
    });
    bounceEffect.to(".counterStyle", {
      duration: 0.5,
      fontSize: "1000%",
    });
    bounceEffect.to(".counterStyle", {
      duration: 0.5,
      fontSize: "500%",
    });
    if (this.number === "red") {
      let red = gsap.timeline({
        repeat: 0,
        repeatRefresh: true,
      });
      red.to(".counterStyle", {
        duration: 1,
        color: "red",
      });
    } else {
      let white = gsap.timeline({
        repeat: 0,
        repeatRefresh: true,
      });
      white.to(".counterStyle", {
        duration: 0,
        color: "white",
      });
    }
  };
}

export default animations;
