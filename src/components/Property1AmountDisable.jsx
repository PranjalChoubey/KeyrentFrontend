import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1AmountDisable = ({
  className = "",
  prop,
  property1AmountDisablePosition,
  property1AmountDisableTop,
  property1AmountDisableLeft,
}) => {
  const property1AmountDisableStyle = useMemo(() => {
    return {
      position: property1AmountDisablePosition,
      top: property1AmountDisableTop,
      left: property1AmountDisableLeft,
    };
  }, [
    property1AmountDisablePosition,
    property1AmountDisableTop,
    property1AmountDisableLeft,
  ]);

  return (
    <div
      className={`w-[430px] rounded-2xl bg-background max-w-full flex flex-row items-center justify-start py-[10.5px] px-6 box-border gap-[12px] text-left text-4xl text-text1 font-head5-2-23-med ${className}`}
      style={property1AmountDisableStyle}
    >
      <div className="relative font-medium opacity-[0.5]">$</div>
      <div className="relative text-base tracking-[0.15px] font-medium opacity-[0.5]">
        {prop}
      </div>
    </div>
  );
};

Property1AmountDisable.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  property1AmountDisablePosition: PropTypes.any,
  property1AmountDisableTop: PropTypes.any,
  property1AmountDisableLeft: PropTypes.any,
};

export default Property1AmountDisable;
