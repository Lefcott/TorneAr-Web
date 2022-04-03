import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RouletteScreen from "./screens/roulette";
import HomeScreen from "./screens/home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="ruleta" element={<RouletteScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
