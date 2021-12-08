import { Link } from "react-router-dom";

import style from "./style.module.css";
import ConnectedUsers from "./ConnectedUsers";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link className={style.link} to="/">
        <img src="/images/logo.png" className={style.logo} />
        <div className={style.navbar_title}>TorneAr</div>
      </Link>
      <ConnectedUsers />
    </nav>
  );
}
