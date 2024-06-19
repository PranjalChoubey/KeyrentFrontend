import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Variant = ({
  className = "",
  startYourProject,
  property1Variant3BackgroundColor,
  property1Variant3Position,
  property1Variant3Height,
  property1Variant3Width,
  property1Variant3Top,
  property1Variant3Right,
  property1Variant3Bottom,
  property1Variant3Left,
  startYourProjectColor,
  onButtonContainerClick,
}) => {
  const property1Variant3Style = useMemo(() => {
    return {
      backgroundColor: property1Variant3BackgroundColor,
      position: property1Variant3Position,
      height: property1Variant3Height,
      width: property1Variant3Width,
      top: property1Variant3Top,
      right: property1Variant3Right,
      bottom: property1Variant3Bottom,
      left: property1Variant3Left,
    };
  }, [
    property1Variant3BackgroundColor,
    property1Variant3Position,
    property1Variant3Height,
    property1Variant3Width,
    property1Variant3Top,
    property1Variant3Right,
    property1Variant3Bottom,
    property1Variant3Left,
  ]);

  const startYourProjectStyle = useMemo(() => {
    return {
      color: startYourProjectColor,
    };
  }, [startYourProjectColor]);

  return (
    <div
      className={`rounded-9xl bg-gainsboro flex flex-row items-center justify-center py-4 px-8 text-center text-base text-darkgray font-head5-2-23-med ${className}`}
      style={property1Variant3Style}
      onClick={onButtonContainerClick}
    >
      <div
        className="relative leading-[24px] font-semibold"
        style={startYourProjectStyle}
      >
        {startYourProject}
      </div>
    </div>
  );
};

Property1Variant.propTypes = {
  className: PropTypes.string,
  startYourProject: PropTypes.string,

  /** Style props */
  property1Variant3BackgroundColor: PropTypes.any,
  property1Variant3Position: PropTypes.any,
  property1Variant3Height: PropTypes.any,
  property1Variant3Width: PropTypes.any,
  property1Variant3Top: PropTypes.any,
  property1Variant3Right: PropTypes.any,
  property1Variant3Bottom: PropTypes.any,
  property1Variant3Left: PropTypes.any,
  startYourProjectColor: PropTypes.any,

  /** Action props */
  onButtonContainerClick: PropTypes.func,
};

export default Property1Variant;
