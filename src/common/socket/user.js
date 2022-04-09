import io from "socket.io-client";

let socket;

/**
 * @returns {import("socket.io-client").Socket}
 */
const getUserSocket = () => {
  if (socket) return socket;

  socket = io(`${process.env.REACT_APP_API_URL}/user`, {
    reconnectionDelayMax: 10000,
    transports: ["websocket"],
    auth: {
      // TODO take this token from localStorage
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0OTI3ODgxMn0.8EQNtx1echGYqZLcOa_iVVolvvmmdVwUg_uJ75-Qonk",
    },
  });

  return socket;
};

export default getUserSocket;
