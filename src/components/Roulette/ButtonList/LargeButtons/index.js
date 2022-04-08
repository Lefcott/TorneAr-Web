import PropTypes from "prop-types";
import { getNumberTranslation } from "utils/getNumberTranslation";
import style from "../style.module.scss";

const LargeButtons = (props) => {
  return (
    <div className={style.buttonRow}>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 12)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
        onClick={() => props.onResultChange("1-12")}
      >
        {getNumberTranslation("1-12")}
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 13, 24)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
        onClick={() => props.onResultChange("13-24")}
      >
        {getNumberTranslation("13-24")}
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 25, 36)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
        onClick={() => props.onResultChange("25-36")}
      >
        {getNumberTranslation("25-36")}
      </div>
    </div>
  );
};

LargeButtons.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
};

export default LargeButtons;
