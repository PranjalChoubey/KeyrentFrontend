import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Fill = ({
  className = "",
  john,
  property1FillPosition,
  property1FillTop,
  property1FillLeft,
  property1FillWidth,
  property1FillHeight,
  johnOpacity,
}) => {
  const property1FillStyle = useMemo(() => {
    return {
      position: property1FillPosition,
      top: property1FillTop,
      left: property1FillLeft,
      width: property1FillWidth,
      height: property1FillHeight,
    };
  }, [
    property1FillPosition,
    property1FillTop,
    property1FillLeft,
    property1FillWidth,
    property1FillHeight,
  ]);

  const johnStyle = useMemo(() => {
    return {
      opacity: johnOpacity,
    };
  }, [johnOpacity]);

  return (
    <div
      className={`w-[430px] rounded-2xl bg-background max-w-full flex flex-row items-center justify-start py-4 px-6 box-border text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1FillStyle}
    >
      <div className="relative tracking-[0.15px] font-medium" style={johnStyle}>
        {john}
      </div>
    </div>
  );
};

Property1Fill.propTypes = {
  className: PropTypes.string,
  john: PropTypes.string,

  /** Style props */
  property1FillPosition: PropTypes.any,
  property1FillTop: PropTypes.any,
  property1FillLeft: PropTypes.any,
  property1FillWidth: PropTypes.any,
  property1FillHeight: PropTypes.any,
  johnOpacity: PropTypes.any,
};

export default Property1Fill;
