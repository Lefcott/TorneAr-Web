import PropTypes from "prop-types";

import style from "../style.module.scss";

const LargeButtons = (props) => {
  return (
    <div className={style.buttonRow}>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 12)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
      >
        1 a 12
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 13, 24)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
      >
        13 a 24
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 25, 36)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_4_1}`}
      >
        25 a 36
      </div>
    </div>
  );
};

LargeButtons.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
};

export default LargeButtons;
