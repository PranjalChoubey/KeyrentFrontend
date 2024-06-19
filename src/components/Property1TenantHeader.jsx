import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1TenantHeader = ({
  className = "",
  showGroupIcon,
  showGroupDiv,
  property1TenantHeaderPosition,
  property1TenantHeaderTop,
  property1TenantHeaderLeft,
  lineDivOpacity,
  adminFontWeight,
  adminColor,
  lineDivOpacity1,
  groupDivHeight,
  groupDivWidth,
  groupDivRight,
  groupDivBottom,
  groupDivHeight1,
  groupDivWidth1,
  groupDivTop,
  groupDivRight1,
  groupDivBottom1,
  groupDivLeft,
  lineDivOpacity2,
  lineDivOpacity3,
  adminFontWeight1,
  adminColor1,
  lineDivOpacity4,
  onGroupContainerClick,
}) => {
  const property1TenantHeaderStyle = useMemo(() => {
    return {
      position: property1TenantHeaderPosition,
      top: property1TenantHeaderTop,
      left: property1TenantHeaderLeft,
    };
  }, [
    property1TenantHeaderPosition,
    property1TenantHeaderTop,
    property1TenantHeaderLeft,
  ]);

  const lineDiv5Style = useMemo(() => {
    return {
      opacity: lineDivOpacity,
    };
  }, [lineDivOpacity]);

  const admin2Style = useMemo(() => {
    return {
      fontWeight: adminFontWeight,
      color: adminColor,
    };
  }, [adminFontWeight, adminColor]);

  const lineDiv6Style = useMemo(() => {
    return {
      opacity: lineDivOpacity1,
    };
  }, [lineDivOpacity1]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
      width: groupDivWidth,
      right: groupDivRight,
      bottom: groupDivBottom,
    };
  }, [groupDivHeight, groupDivWidth, groupDivRight, groupDivBottom]);

  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight1,
      width: groupDivWidth1,
      top: groupDivTop,
      right: groupDivRight1,
      bottom: groupDivBottom1,
      left: groupDivLeft,
    };
  }, [
    groupDivHeight1,
    groupDivWidth1,
    groupDivTop,
    groupDivRight1,
    groupDivBottom1,
    groupDivLeft,
  ]);

  const lineDiv7Style = useMemo(() => {
    return {
      opacity: lineDivOpacity2,
    };
  }, [lineDivOpacity2]);

  const lineDiv8Style = useMemo(() => {
    return {
      opacity: lineDivOpacity3,
    };
  }, [lineDivOpacity3]);

  const admin3Style = useMemo(() => {
    return {
      fontWeight: adminFontWeight1,
      color: adminColor1,
    };
  }, [adminFontWeight1, adminColor1]);

  const lineDiv9Style = useMemo(() => {
    return {
      opacity: lineDivOpacity4,
    };
  }, [lineDivOpacity4]);

  return (
    <div
      className={`w-[1920px] max-w-full h-[135px] text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1TenantHeaderStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(121.51deg,_#e1f4f5,_#e1f4f5_47.1%,_#d6ebf0_85.04%)]" />
      <div className="absolute h-[66.67%] w-[77.5%] top-[17.78%] right-[11.25%] bottom-[15.56%] left-[11.25%] rounded-3xl bg-white opacity-[0]" />
      {showGroupIcon && (
        <img
          className="absolute h-[28%] w-[9.38%] top-[37.04%] right-[79.38%] bottom-[34.96%] left-[11.25%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-12.svg"
        />
      )}
      <img
        className="absolute top-[41px] left-[1610px] w-[94px] h-14"
        alt=""
        src="/profile.svg"
      />
      <img
        className="absolute h-[41.48%] w-[2.92%] top-[30.37%] right-[17.4%] bottom-[28.15%] left-[79.69%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-26086462.svg"
      />
      <div className="absolute h-[27.41%] w-[4.69%] top-[37.04%] right-[55.89%] bottom-[35.56%] left-[39.43%] text-primary">
        <div
          className="absolute h-[2.7%] w-[101.11%] top-[98.65%] right-[-0.56%] bottom-[-1.35%] left-[-0.56%] box-border border-t-[1px] border-solid border-primary"
          style={lineDiv5Style}
        />
        <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
          <div
            className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-semibold"
            style={admin2Style}
          >
            Dashboard
          </div>
        </div>
      </div>
      <div className="absolute h-[27.41%] w-[5%] top-[37.04%] right-[31.82%] bottom-[35.56%] left-[63.18%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div
            className="absolute h-[2.7%] w-[101.04%] top-[100%] right-[-1.04%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
            style={lineDiv6Style}
          />
          <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
            <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
              Transaction
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[27.41%] w-[6.51%] top-[37.04%] right-[22.81%] bottom-[35.56%] left-[70.68%]"
        style={groupDivStyle}
      >
        {showGroupDiv && (
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]"
            style={groupDiv1Style}
          >
            <div
              className="absolute h-[2.7%] w-[100.8%] top-[100%] right-[-0.8%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
              style={lineDiv7Style}
            />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
                Linked Account
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute h-[27.41%] w-[1.88%] top-[37.04%] right-[39.32%] bottom-[35.56%] left-[58.8%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div
            className="absolute h-[2.7%] w-[102.78%] top-[100%] right-[-2.78%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
            style={lineDiv8Style}
          />
          <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
            <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
              Rent
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[27.41%] w-[3.65%] top-[37.04%] right-[49.74%] bottom-[35.56%] left-[46.61%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[101.43%] top-[100%] right-[-1.43%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary" />
          <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
            <div
              className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium"
              style={admin3Style}
            >
              Landlord
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute h-[27.41%] w-[3.54%] top-[37.04%] right-[43.7%] bottom-[35.56%] left-[52.76%]"
        onClick={onGroupContainerClick}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div
            className="absolute h-[2.7%] w-[101.47%] top-[100%] right-[-1.47%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
            style={lineDiv9Style}
          />
          <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
            <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
              Property
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Property1TenantHeader.propTypes = {
  className: PropTypes.string,
  showGroupIcon: PropTypes.bool,
  showGroupDiv: PropTypes.bool,

  /** Style props */
  property1TenantHeaderPosition: PropTypes.any,
  property1TenantHeaderTop: PropTypes.any,
  property1TenantHeaderLeft: PropTypes.any,
  lineDivOpacity: PropTypes.any,
  adminFontWeight: PropTypes.any,
  adminColor: PropTypes.any,
  lineDivOpacity1: PropTypes.any,
  groupDivHeight: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivRight: PropTypes.any,
  groupDivBottom: PropTypes.any,
  groupDivHeight1: PropTypes.any,
  groupDivWidth1: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivRight1: PropTypes.any,
  groupDivBottom1: PropTypes.any,
  groupDivLeft: PropTypes.any,
  lineDivOpacity2: PropTypes.any,
  lineDivOpacity3: PropTypes.any,
  adminFontWeight1: PropTypes.any,
  adminColor1: PropTypes.any,
  lineDivOpacity4: PropTypes.any,

  /** Action props */
  onGroupContainerClick: PropTypes.func,
};

export default Property1TenantHeader;
