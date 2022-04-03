import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

// Yaque -- Esto lo puse aca para poder inicializar el sidebar, despues vemos de donde lo traemos.
import {
  faTrophy,
  faCoins,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

let lists = [
  {
    category: "Casino",
    items: [
      {
        text: "Ruleta",
        icon: faTrophy,
        link: "/ruleta",
      },
      {
        text: "Tragamonedas",
        icon: faCoins,
        link: "/tragamonedas",
      },
    ],
  },
  {
    category: "Juegos argentinos",
    items: [
      {
        text: "Truco",
        icon: faUserFriends,
        link: "/truco",
      },
    ],
  },
  {
    category: "Poker",
    items: [
      {
        text: "Texas hold'em",
        icon: faUserFriends,
        link: "/texasholdem",
      },
      {
        text: "Blackjack (21)",
        icon: faUserFriends,
        link: "/blackjack",
      },
    ],
  },
];

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar lists={lists} />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
