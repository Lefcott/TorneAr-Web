import indicatorsrc from "./images/indicator.png";
import style from "./style.module.scss";
import ButtonComponent from "./ButtonList";
import Timer from "./Timer";
import Wheel from "./Wheel";

const Roulette = () => {
  return (
    <>
      <div className={style.roulette}>
        <Wheel />
        <img className={style.indicator} src={indicatorsrc} />
        <Timer />
      </div>
      <ButtonComponent />
    </>
  );
};

export default Roulette;
