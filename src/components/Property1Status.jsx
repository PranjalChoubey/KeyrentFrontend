import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Status = ({
  className = "",
  active,
  disable,
  inactive,
  active1,
  inactive1,
  active2,
  active3,
  disable1,
  inactive2,
  property1StatusWidth,
  statusBorderRadius,
  statusBackgroundColor,
  statusWidth,
  activeColor,
  statusBorderRadius1,
  statusBackgroundColor1,
  statusWidth1,
  disableColor,
  statusBackgroundColor2,
  statusBorderRadius2,
  statusWidth2,
  inactiveColor,
  statusBackgroundColor3,
  statusBorderRadius3,
  statusWidth3,
  activeColor1,
  statusBackgroundColor4,
  statusBorderRadius4,
  statusWidth4,
  inactiveColor1,
  statusBorderRadius5,
  statusBackgroundColor5,
  statusWidth5,
  activeColor2,
  statusBackgroundColor6,
  statusBorderRadius6,
  statusWidth6,
  activeColor3,
  statusBorderRadius7,
  statusBackgroundColor7,
  statusWidth7,
  disableColor1,
  statusBackgroundColor8,
  statusBorderRadius8,
  statusWidth8,
  inactiveColor2,
}) => {
  const property1StatusStyle = useMemo(() => {
    return {
      width: property1StatusWidth,
    };
  }, [property1StatusWidth]);

  const statusStyle = useMemo(() => {
    return {
      borderRadius: statusBorderRadius,
      backgroundColor: statusBackgroundColor,
      width: statusWidth,
    };
  }, [statusBorderRadius, statusBackgroundColor, statusWidth]);

  const activeStyle = useMemo(() => {
    return {
      color: activeColor,
    };
  }, [activeColor]);

  const status1Style = useMemo(() => {
    return {
      borderRadius: statusBorderRadius1,
      backgroundColor: statusBackgroundColor1,
      width: statusWidth1,
    };
  }, [statusBorderRadius1, statusBackgroundColor1, statusWidth1]);

  const disableStyle = useMemo(() => {
    return {
      color: disableColor,
    };
  }, [disableColor]);

  const status2Style = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor2,
      borderRadius: statusBorderRadius2,
      width: statusWidth2,
    };
  }, [statusBackgroundColor2, statusBorderRadius2, statusWidth2]);

  const inactiveStyle = useMemo(() => {
    return {
      color: inactiveColor,
    };
  }, [inactiveColor]);

  const status3Style = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor3,
      borderRadius: statusBorderRadius3,
      width: statusWidth3,
    };
  }, [statusBackgroundColor3, statusBorderRadius3, statusWidth3]);

  const active1Style = useMemo(() => {
    return {
      color: activeColor1,
    };
  }, [activeColor1]);

  const status4Style = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor4,
      borderRadius: statusBorderRadius4,
      width: statusWidth4,
    };
  }, [statusBackgroundColor4, statusBorderRadius4, statusWidth4]);

  const inactive1Style = useMemo(() => {
    return {
      color: inactiveColor1,
    };
  }, [inactiveColor1]);

  const status5Style = useMemo(() => {
    return {
      borderRadius: statusBorderRadius5,
      backgroundColor: statusBackgroundColor5,
      width: statusWidth5,
    };
  }, [statusBorderRadius5, statusBackgroundColor5, statusWidth5]);

  const active2Style = useMemo(() => {
    return {
      color: activeColor2,
    };
  }, [activeColor2]);

  const status6Style = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor6,
      borderRadius: statusBorderRadius6,
      width: statusWidth6,
    };
  }, [statusBackgroundColor6, statusBorderRadius6, statusWidth6]);

  const active3Style = useMemo(() => {
    return {
      color: activeColor3,
    };
  }, [activeColor3]);

  const status7Style = useMemo(() => {
    return {
      borderRadius: statusBorderRadius7,
      backgroundColor: statusBackgroundColor7,
      width: statusWidth7,
    };
  }, [statusBorderRadius7, statusBackgroundColor7, statusWidth7]);

  const disable1Style = useMemo(() => {
    return {
      color: disableColor1,
    };
  }, [disableColor1]);

  const status8Style = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor8,
      borderRadius: statusBorderRadius8,
      width: statusWidth8,
    };
  }, [statusBackgroundColor8, statusBorderRadius8, statusWidth8]);

  const inactive2Style = useMemo(() => {
    return {
      color: inactiveColor2,
    };
  }, [inactiveColor2]);

  return (
    <div
      className={`w-[180px] flex flex-col items-start justify-start text-center text-smi text-yellowgreen font-head5-2-23-med ${className}`}
      style={property1StatusStyle}
    >
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[18px] px-5">
        <div
          className="w-[152px] rounded-lg bg-palegoldenrod flex flex-row items-center justify-center py-2 px-5 box-border"
          style={statusStyle}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={activeStyle}
          >
            {active}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[18px] px-5 text-darkgray">
        <div
          className="w-[152px] rounded-lg bg-gainsboro flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status1Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={disableStyle}
          >
            {disable}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[18px] px-5 text-tomato">
        <div
          className="w-[152px] rounded-lg bg-mistyrose flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status2Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={inactiveStyle}
          >
            {inactive}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[18px] px-5">
        <div
          className="w-[152px] rounded-lg bg-palegoldenrod flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status3Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={active1Style}
          >
            {active1}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[18px] px-5 text-tomato">
        <div
          className="w-[152px] rounded-lg bg-mistyrose flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status4Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={inactive1Style}
          >
            {inactive1}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[18px] px-5">
        <div
          className="w-[152px] rounded-lg bg-palegoldenrod flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status5Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={active2Style}
          >
            {active2}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[18px] px-5">
        <div
          className="w-[152px] rounded-lg bg-palegoldenrod flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status6Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={active3Style}
          >
            {active3}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[18px] px-5 text-darkgray">
        <div
          className="w-[152px] rounded-lg bg-gainsboro flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status7Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={disable1Style}
          >
            {disable1}
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[18px] px-5 text-tomato">
        <div
          className="w-[152px] rounded-lg bg-mistyrose flex flex-row items-center justify-center py-2 px-5 box-border"
          style={status8Style}
        >
          <div
            className="relative tracking-[0.25px] uppercase font-semibold"
            style={inactive2Style}
          >
            {inactive2}
          </div>
        </div>
      </div>
    </div>
  );
};

Property1Status.propTypes = {
  className: PropTypes.string,
  active: PropTypes.string,
  disable: PropTypes.string,
  inactive: PropTypes.string,
  active1: PropTypes.string,
  inactive1: PropTypes.string,
  active2: PropTypes.string,
  active3: PropTypes.string,
  disable1: PropTypes.string,
  inactive2: PropTypes.string,

  /** Style props */
  property1StatusWidth: PropTypes.any,
  statusBorderRadius: PropTypes.any,
  statusBackgroundColor: PropTypes.any,
  statusWidth: PropTypes.any,
  activeColor: PropTypes.any,
  statusBorderRadius1: PropTypes.any,
  statusBackgroundColor1: PropTypes.any,
  statusWidth1: PropTypes.any,
  disableColor: PropTypes.any,
  statusBackgroundColor2: PropTypes.any,
  statusBorderRadius2: PropTypes.any,
  statusWidth2: PropTypes.any,
  inactiveColor: PropTypes.any,
  statusBackgroundColor3: PropTypes.any,
  statusBorderRadius3: PropTypes.any,
  statusWidth3: PropTypes.any,
  activeColor1: PropTypes.any,
  statusBackgroundColor4: PropTypes.any,
  statusBorderRadius4: PropTypes.any,
  statusWidth4: PropTypes.any,
  inactiveColor1: PropTypes.any,
  statusBorderRadius5: PropTypes.any,
  statusBackgroundColor5: PropTypes.any,
  statusWidth5: PropTypes.any,
  activeColor2: PropTypes.any,
  statusBackgroundColor6: PropTypes.any,
  statusBorderRadius6: PropTypes.any,
  statusWidth6: PropTypes.any,
  activeColor3: PropTypes.any,
  statusBorderRadius7: PropTypes.any,
  statusBackgroundColor7: PropTypes.any,
  statusWidth7: PropTypes.any,
  disableColor1: PropTypes.any,
  statusBackgroundColor8: PropTypes.any,
  statusBorderRadius8: PropTypes.any,
  statusWidth8: PropTypes.any,
  inactiveColor2: PropTypes.any,
};

export default Property1Status;
