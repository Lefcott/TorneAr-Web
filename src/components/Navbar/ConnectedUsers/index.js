import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import style from "./style.module.css";

const getRandomConnectedUsers = () => Math.floor(Math.random() * 10000);

export default function ConnectedUsers() {
  const [connectedUsers, setConnectedUsers] = useState(
    getRandomConnectedUsers()
  );

  useState(() => {
    setInterval(() => {
      setConnectedUsers(getRandomConnectedUsers());
    }, 1000);
  }, []);

  return (
    <div className={style.connected_users}>
      <FontAwesomeIcon icon={faUsers} />
      {connectedUsers}
    </div>
  );
}
