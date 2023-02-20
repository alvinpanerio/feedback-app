import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <header>
      <div className="container">{title}</div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback App",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
