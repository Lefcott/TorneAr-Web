import { RED_NUMBERS } from "common/constants";

export const getNumberColor = (number) =>
  RED_NUMBERS.includes(number) ? "red" : number === 0 ? "green" : "gray";
