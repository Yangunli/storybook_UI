import React from "react";
import PropTypes from "prop-types";
import "./styles/button.css";

export const Button = ({
  primary,
  disabled,
  label,
  backgroundColor,
  size,
  ...props
}) => {
  const btnBg = primary
    ? "primary"
    : backgroundColor
    ? backgroundColor
    : "secondary";

  return (
    <button
      disabled={disabled}
      className={[
        "button",
        `storybook-btn--${size}`,
        `storybook-btn--${btnBg}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: "md",
  onClick: undefined,
  disabled: false,
};
