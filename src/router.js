import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RouletteScreen from "./screens/roulette";
import HomeScreen from "./screens/home";

export default function Router() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="roulette" element={<RouletteScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
