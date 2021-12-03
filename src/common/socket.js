import io from "socket.io-client";

const socket = io(`${process.env.REACT_APP_API_URL}/roulette`, {
  reconnectionDelayMax: 10000,
  transports: ["websocket"],
  auth: {
    token: "123",
  },
  query: {
    "my-key": "my-value",
  },
});

export default socket;
