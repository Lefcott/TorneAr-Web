import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import getGeneralSocket from "common/socket/general";

import style from "./style.module.css";

export default function ConnectedUsers() {
  const generalSocket = getGeneralSocket();
  const [connectedUsers, setConnectedUsers] = useState("...");

  useEffect(() => {
    const handleUpdateConnectedUsers = (data) => {
      setConnectedUsers(data.connectedUsers);
    };
    generalSocket.on("updateConnectedUsers", handleUpdateConnectedUsers);
    return () => {
      generalSocket.off("updateConnectedUsers", handleUpdateConnectedUsers);
    };
  }, []);

  return (
    <div className={style.connected_users}>
      <FontAwesomeIcon icon={faUsers} />
      {connectedUsers}
    </div>
  );
}
