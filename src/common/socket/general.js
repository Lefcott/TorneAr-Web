import io from "socket.io-client";

let socket;

/**
 * @returns {import("socket.io-client").Socket}
 */
const getGeneralSocket = () => {
  if (socket) return socket;

  socket = io(`${process.env.REACT_APP_API_URL}/general`, {
    reconnectionDelayMax: 10000,
    transports: ["websocket"],
    auth: {
      // token: "123",
    },
  });

  return socket;
};

export default getGeneralSocket;
