import { useState } from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";
import ListItem from "../ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function PlegableList({ category, items }) {
  const [open, setOpen] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleToggleList = () => {
    if (closing) return;

    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 500);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className={style.plegable_list}>
      <div className={style.plegable_list_head}>
        <h4 className={style.title}>{category}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${style.toggle_button}${
            !open || closing ? ` ${style.toggle_button_closed}` : ""
          }`}
          onClick={handleToggleList}
        />
      </div>
      {open && (
        <div
          className={`${style.plegable_list_body}${
            closing ? ` ${style.list_body_closed}` : ""
          }`}
        >
          {items.map((item, i) => (
            <ListItem
              key={i}
              text={item.text}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>
      )}
    </div>
  );
}

PlegableList.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};