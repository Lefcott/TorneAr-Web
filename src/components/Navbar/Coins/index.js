import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useUser from "hooks/roulette/useUser";

import style from "./style.module.scss";

const Coins = () => {
  const user = useUser();

  return (
    <div className={style.coinsContainer}>
      <FontAwesomeIcon className={style.icon} icon={faCoins} />
      <div className={style.coins}>{!user ? "..." : user.coins}</div>
    </div>
  );
};

export default Coins;
