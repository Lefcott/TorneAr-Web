import style from "./style.module.css";
import ConnectedUsers from "./ConnectedUsers";
import Coins from "./Coins";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <a className={style.link} href="/">
        <img src="/images/logo.png" className={style.logo} />
        <div className={style.navbar_title}>TorneAr</div>
      </a>
      <ConnectedUsers />
      <Coins />
    </nav>
  );
}
