import { useQuery } from "@apollo/client";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import user from "queries/user";

import style from "./style.module.scss";

const Coins = () => {
  // TODO change userId to the current user's id when we have login implemented
  const { data } = useQuery(user, { variables: { userId: 1 } });

  return (
    <div className={style.coinsContainer}>
      <FontAwesomeIcon className={style.icon} icon={faCoins} />
      <div className={style.coins}>{!data ? "..." : data.user.coins}</div>
    </div>
  );
};

export default Coins;
