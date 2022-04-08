import { getNumberColor } from "utils/getNumberColor";
import { getNumberTranslation } from "utils/getNumberTranslation";
import style from "./style.module.scss";

const Badge = ({ number }) => {
  const color = getNumberColor(+number);
  const translatedNumber = getNumberTranslation(number);

  return <div className={`${style.badge} ${color}`}>{translatedNumber}</div>;
};

export default Badge;
