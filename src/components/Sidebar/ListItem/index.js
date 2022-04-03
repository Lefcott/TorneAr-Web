import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import style from "./style.module.css";

export default function ListItem({ icon, text, link }) {
  return (
    <Link className={style.list_item} to={link}>
      <FontAwesomeIcon icon={icon} className={style.icon} />
      <span className={style.span}>{text}</span>
    </Link>
  );
}

ListItem.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
