import { useState } from "react";
import PropTypes from "prop-types";

import style from "./style.module.css";
import PlegableList from "./PlegableList/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ lists }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav
      className={`${style.sidebar}${!open ? ` ${style.closed_sidebar}` : ""}`}
    >
      <div className={style.close_button_container}>
        <FontAwesomeIcon
          icon={faTimes}
          className={style.close_button}
          onClick={handleClose}
        />
      </div>

      {lists.map((item, i) => (
        <PlegableList key={i} category={item.category} items={item.items} />
      ))}
    </nav>
  );
}

Sidebar.propTypes = {
  lists: PropTypes.array.isRequired,
};
