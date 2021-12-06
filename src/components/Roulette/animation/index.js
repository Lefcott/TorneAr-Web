import { gsap } from "gsap";
import style from "../style.module.scss";

const rouletteNumbers = [
  5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32, 0, 26,
  3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24,
];

class animations {
  animation(number) {
    const random = (rouletteNumbers.indexOf(number) * 360) / 37;
    let tl = gsap.timeline({
      repeat: 0,
      repeatRefresh: true,
    });
    tl.to(`.${style.rouletteImg}`, {
      opacity: 1,
      duration: 2.5,
      rotation: 360 * 8,
      ease: "none",
    });

    tl.to(`.${style.rouletteImg}`, {
      duration: 2.5,
      rotation: 360 * 15 + random,
      ease: "slowly",
    });
    tl.to(`.${style.rouletteImg}`, {
      duration: 5,
      ease: "slowly",
    });
    tl.to(`.${style.rouletteImg}`, {
      duration: 20,
      opacity: 0.5,
      rotation: 0,
      ease: "slowly",
    });
  }
}

export default animations;
