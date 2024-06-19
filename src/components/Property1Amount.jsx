import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Amount = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  prop8,
  property1AmountWidth,
  frameDivFlexDirection,
  frameDivFlexDirection1,
  frameDivFlexDirection2,
  frameDivFlexDirection3,
  frameDivFlexDirection4,
  frameDivFlexDirection5,
  frameDivFlexDirection6,
  frameDivFlexDirection7,
}) => {
  const property1AmountStyle = useMemo(() => {
    return {
      width: property1AmountWidth,
    };
  }, [property1AmountWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection,
    };
  }, [frameDivFlexDirection]);

  const frameDiv1Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection1,
    };
  }, [frameDivFlexDirection1]);

  const frameDiv2Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection2,
    };
  }, [frameDivFlexDirection2]);

  const frameDiv3Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection3,
    };
  }, [frameDivFlexDirection3]);

  const frameDiv4Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection4,
    };
  }, [frameDivFlexDirection4]);

  const frameDiv5Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection5,
    };
  }, [frameDivFlexDirection5]);

  const frameDiv6Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection6,
    };
  }, [frameDivFlexDirection6]);

  const frameDiv7Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection7,
    };
  }, [frameDivFlexDirection7]);

  return (
    <div
      className={`w-[148px] flex flex-col items-center justify-center text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1AmountStyle}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-5">
        <div className="relative tracking-[0.15px]">{prop}</div>
      </div>
      <div
        className="self-stretch bg-row-color flex flex-row items-center justify-start py-6 px-5"
        style={frameDivStyle}
      >
        <div className="relative tracking-[0.15px]">{prop1}</div>
      </div>
      <div
        className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv1Style}
      >
        <div className="relative tracking-[0.15px]">{prop2}</div>
      </div>
      <div
        className="self-stretch bg-row-color flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv2Style}
      >
        <div className="relative tracking-[0.15px]">{prop3}</div>
      </div>
      <div
        className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv3Style}
      >
        <div className="relative tracking-[0.15px]">{prop4}</div>
      </div>
      <div
        className="self-stretch bg-row-color flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv4Style}
      >
        <div className="relative tracking-[0.15px]">{prop5}</div>
      </div>
      <div
        className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv5Style}
      >
        <div className="relative tracking-[0.15px]">{prop6}</div>
      </div>
      <div
        className="self-stretch bg-row-color flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv6Style}
      >
        <div className="relative tracking-[0.15px]">{prop7}</div>
      </div>
      <div
        className="self-stretch bg-white flex flex-row items-center justify-start py-6 px-5"
        style={frameDiv7Style}
      >
        <div className="relative tracking-[0.15px]">{prop8}</div>
      </div>
    </div>
  );
};

Property1Amount.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,
  prop5: PropTypes.string,
  prop6: PropTypes.string,
  prop7: PropTypes.string,
  prop8: PropTypes.string,

  /** Style props */
  property1AmountWidth: PropTypes.any,
  frameDivFlexDirection: PropTypes.any,
  frameDivFlexDirection1: PropTypes.any,
  frameDivFlexDirection2: PropTypes.any,
  frameDivFlexDirection3: PropTypes.any,
  frameDivFlexDirection4: PropTypes.any,
  frameDivFlexDirection5: PropTypes.any,
  frameDivFlexDirection6: PropTypes.any,
  frameDivFlexDirection7: PropTypes.any,
};

export default Property1Amount;
