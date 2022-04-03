import {
  BLACK_NUMBERS,
  RED_NUMBERS,
} from "components/Roulette/ButtonList/constants";

export const getNumberColor = (number) =>
  RED_NUMBERS.includes(number)
    ? "red"
    : BLACK_NUMBERS.includes(number)
    ? "gray"
    : "green";
