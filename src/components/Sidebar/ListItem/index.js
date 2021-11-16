import PropTypes from "prop-types";

import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListItem({ icon, text, link }) {
  return (
    <a className={style.list_item} href={link}>
      <FontAwesomeIcon icon={icon} className={style.icon} />
      <span className={style.span}>{text}</span>
    </a>
  );
}

ListItem.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};