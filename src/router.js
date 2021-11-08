import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import RouletteScreen from "./screens/roulette";

export default function Router() {
  return (
    <Layout>
      <RouletteScreen />
    </Layout>
  );
}
