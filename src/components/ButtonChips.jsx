import { useMemo } from "react";
import PropTypes from "prop-types";

const ButtonChips = ({
  className = "",
  learnMore,
  buttonChipsPosition,
  buttonChipsTop,
  buttonChipsLeft,
  onButtonChipsContainerClick,
}) => {
  const buttonChipsStyle = useMemo(() => {
    return {
      position: buttonChipsPosition,
      top: buttonChipsTop,
      left: buttonChipsLeft,
    };
  }, [buttonChipsPosition, buttonChipsTop, buttonChipsLeft]);

  return (
    <div
      className={`rounded-9xl flex flex-row items-center justify-center py-4 px-8 text-center text-base text-secondary font-head5-2-23-med ${className}`}
      style={buttonChipsStyle}
      onClick={onButtonChipsContainerClick}
    >
      <div className="relative leading-[24px] font-semibold">{learnMore}</div>
    </div>
  );
};

ButtonChips.propTypes = {
  className: PropTypes.string,
  learnMore: PropTypes.string,

  /** Style props */
  buttonChipsPosition: PropTypes.any,
  buttonChipsTop: PropTypes.any,
  buttonChipsLeft: PropTypes.any,

  /** Action props */
  onButtonChipsContainerClick: PropTypes.func,
};

export default ButtonChips;
