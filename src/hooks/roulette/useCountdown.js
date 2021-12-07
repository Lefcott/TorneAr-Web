import { useEffect, useState } from "react";
import getRouletteSocket from "common/socket/roulette";

const useCountdown = () => {
  const rouletteSocket = getRouletteSocket();
  const [countdown, setCountdown] = useState(0);

  // Listens to betStarted event and sets betEndDate
  useEffect(() => {
    const handleUpdateCountdown = (data) => {
      setCountdown(data.countdown);
    };
    rouletteSocket.on("updateCountdown", handleUpdateCountdown);

    return () => {
      rouletteSocket.off("updateCountdown", handleUpdateCountdown);
    };
  }, []);

  return countdown;
};

export default useCountdown;
