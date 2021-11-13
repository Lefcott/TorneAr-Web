import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { render } from "@testing-library/react";
import Roulette from "../../components/Roulette";

export default function RouletteScreen() {
  return(
    <div>
      <Roulette/>
    </div>
  );
} 