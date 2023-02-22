import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
};

Button.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
