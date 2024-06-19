import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Admin = ({
  className = "",
  admin,
  property1AdminWidth,
  property1AdminHeight,
  property1AdminPosition,
  property1AdminTop,
  property1AdminRight,
  property1AdminBottom,
  property1AdminLeft,
  adminFontWeight,
  adminColor,
}) => {
  const property1AdminStyle = useMemo(() => {
    return {
      width: property1AdminWidth,
      height: property1AdminHeight,
      position: property1AdminPosition,
      top: property1AdminTop,
      right: property1AdminRight,
      bottom: property1AdminBottom,
      left: property1AdminLeft,
    };
  }, [
    property1AdminWidth,
    property1AdminHeight,
    property1AdminPosition,
    property1AdminTop,
    property1AdminRight,
    property1AdminBottom,
    property1AdminLeft,
  ]);

  const admin4Style = useMemo(() => {
    return {
      fontWeight: adminFontWeight,
      color: adminColor,
    };
  }, [adminFontWeight, adminColor]);

  return (
    <div
      className={`w-[52px] h-[29px] text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1AdminStyle}
    >
      <div
        className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium"
        style={admin4Style}
      >
        {admin}
      </div>
    </div>
  );
};

Property1Admin.propTypes = {
  className: PropTypes.string,
  admin: PropTypes.string,

  /** Style props */
  property1AdminWidth: PropTypes.any,
  property1AdminHeight: PropTypes.any,
  property1AdminPosition: PropTypes.any,
  property1AdminTop: PropTypes.any,
  property1AdminRight: PropTypes.any,
  property1AdminBottom: PropTypes.any,
  property1AdminLeft: PropTypes.any,
  adminFontWeight: PropTypes.any,
  adminColor: PropTypes.any,
};

export default Property1Admin;
