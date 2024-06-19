import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1AdminName = ({
  className = "",
  adminFullName1,
  adminFullName2,
  adminFullName3,
  adminFullName4,
  adminFullName5,
  adminFullName6,
  adminFullName7,
  adminFullName8,
  adminFullName9,
  property1AdminNameWidth,
  frameDivBorderRadius,
}) => {
  const property1AdminNameStyle = useMemo(() => {
    return {
      width: property1AdminNameWidth,
    };
  }, [property1AdminNameWidth]);

  const frameDiv8Style = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius,
    };
  }, [frameDivBorderRadius]);

  return (
    <div
      className={`w-[292px] flex flex-col items-start justify-start text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1AdminNameStyle}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName1}</div>
      </div>
      <div className="self-stretch bg-row-color flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName2}</div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName3}</div>
      </div>
      <div className="self-stretch bg-row-color flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName4}</div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName5}</div>
      </div>
      <div className="self-stretch bg-row-color flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName6}</div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName7}</div>
      </div>
      <div className="self-stretch bg-row-color flex flex-col items-start justify-center py-6 px-8">
        <div className="relative tracking-[0.15px]">{adminFullName8}</div>
      </div>
      <div
        className="self-stretch rounded-t-none rounded-br-none rounded-bl-2xl bg-white flex flex-col items-start justify-center py-6 px-8"
        style={frameDiv8Style}
      >
        <div className="relative tracking-[0.15px]">{adminFullName9}</div>
      </div>
    </div>
  );
};

Property1AdminName.propTypes = {
  className: PropTypes.string,
  adminFullName1: PropTypes.string,
  adminFullName2: PropTypes.string,
  adminFullName3: PropTypes.string,
  adminFullName4: PropTypes.string,
  adminFullName5: PropTypes.string,
  adminFullName6: PropTypes.string,
  adminFullName7: PropTypes.string,
  adminFullName8: PropTypes.string,
  adminFullName9: PropTypes.string,

  /** Style props */
  property1AdminNameWidth: PropTypes.any,
  frameDivBorderRadius: PropTypes.any,
};

export default Property1AdminName;
