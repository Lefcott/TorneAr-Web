import style from "./style.module.scss";

const Button = ({ children, onClick, disabled, green, red }) => {
  const handleClick = (event) => {
    if (!disabled) {
      onClick(event);
    }
  };

  return (
    <div
      className={`${style.button} ${green ? style.buttonGreen : ""} ${
        red ? style.buttonRed : ""
      } ${disabled ? style.buttonDisabled : ""}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default Button;
