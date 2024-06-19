import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1DateDisable = ({
  className = "",
  dDMMYYYY,
  property1DateDisablePosition,
  property1DateDisableTop,
  property1DateDisableLeft,
}) => {
  const property1DateDisableStyle = useMemo(() => {
    return {
      position: property1DateDisablePosition,
      top: property1DateDisableTop,
      left: property1DateDisableLeft,
    };
  }, [
    property1DateDisablePosition,
    property1DateDisableTop,
    property1DateDisableLeft,
  ]);

  return (
    <div
      className={`w-[430px] rounded-2xl bg-background max-w-full flex flex-row items-center justify-between py-4 px-6 box-border text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1DateDisableStyle}
    >
      <div className="relative tracking-[0.15px] font-medium opacity-[0.3]">
        {dDMMYYYY}
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.5]"
        alt=""
        src="/date.svg"
      />
    </div>
  );
};

Property1DateDisable.propTypes = {
  className: PropTypes.string,
  dDMMYYYY: PropTypes.string,

  /** Style props */
  property1DateDisablePosition: PropTypes.any,
  property1DateDisableTop: PropTypes.any,
  property1DateDisableLeft: PropTypes.any,
};

export default Property1DateDisable;
