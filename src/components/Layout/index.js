import Navbar from "../Navbar";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">{children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
