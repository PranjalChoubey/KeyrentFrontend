import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1AdminHeader = ({
  className = "",
  showGroupIcon,
  showButton,
  showGroupDiv,
  groupDivVisible,
  groupDivVisible1,
  groupDivVisible2,
  groupDivVisible3,
  groupDivVisible4,
  property1AdminHeaderPosition,
  property1AdminHeaderTop,
  property1AdminHeaderLeft,
  lineDivOpacity,
  adminFontWeight,
  adminColor,
  lineDivOpacity1,
  lineDivOpacity2,
  adminFontWeight1,
  adminColor1,
  lineDivOpacity3,
  lineDivOpacity4,
}) => {
  const property1AdminHeaderStyle = useMemo(() => {
    return {
      position: property1AdminHeaderPosition,
      top: property1AdminHeaderTop,
      left: property1AdminHeaderLeft,
    };
  }, [
    property1AdminHeaderPosition,
    property1AdminHeaderTop,
    property1AdminHeaderLeft,
  ]);

  const lineDivStyle = useMemo(() => {
    return {
      opacity: lineDivOpacity,
    };
  }, [lineDivOpacity]);

  const adminStyle = useMemo(() => {
    return {
      fontWeight: adminFontWeight,
      color: adminColor,
    };
  }, [adminFontWeight, adminColor]);

  const lineDiv1Style = useMemo(() => {
    return {
      opacity: lineDivOpacity1,
    };
  }, [lineDivOpacity1]);

  const lineDiv2Style = useMemo(() => {
    return {
      opacity: lineDivOpacity2,
    };
  }, [lineDivOpacity2]);

  const admin1Style = useMemo(() => {
    return {
      fontWeight: adminFontWeight1,
      color: adminColor1,
    };
  }, [adminFontWeight1, adminColor1]);

  const lineDiv3Style = useMemo(() => {
    return {
      opacity: lineDivOpacity3,
    };
  }, [lineDivOpacity3]);

  const lineDiv4Style = useMemo(() => {
    return {
      opacity: lineDivOpacity4,
    };
  }, [lineDivOpacity4]);

  return (
    <div
      className={`w-[1920px] max-w-full h-[135px] text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={property1AdminHeaderStyle}
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
      {showButton && (
        <div className="absolute h-[41.48%] w-[8.75%] top-[30.37%] right-[21.56%] bottom-[28.15%] left-[69.69%] rounded-9xl bg-primary flex flex-row items-center justify-center py-4 px-[61px] box-border text-center text-white">
          <div className="relative leading-[24px] font-semibold">Invite</div>
        </div>
      )}
      <img
        className="absolute h-[41.48%] w-[2.92%] top-[30.37%] right-[17.4%] bottom-[28.15%] left-[79.69%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-26086462.svg"
      />
      {showGroupDiv && (
        <div className="absolute h-[27.41%] w-[4.69%] top-[37.04%] right-[62.24%] bottom-[35.56%] left-[33.07%] text-primary">
          <div
            className="absolute h-[2.7%] w-[101.11%] top-[98.65%] right-[-0.56%] bottom-[-1.35%] left-[-0.56%] box-border border-t-[1px] border-solid border-primary"
            style={lineDivStyle}
          />
          <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
            <div
              className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-semibold"
              style={adminStyle}
            >
              Dashboard
            </div>
          </div>
        </div>
      )}
      {groupDivVisible && (
        <div className="absolute h-[27.41%] w-[5%] top-[37.04%] right-[37.08%] bottom-[35.56%] left-[57.92%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[2.7%] w-[101.04%] top-[100%] right-[-1.04%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
              style={lineDiv1Style}
            />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
                Transaction
              </div>
            </div>
          </div>
        </div>
      )}
      {groupDivVisible1 && (
        <div className="absolute h-[27.41%] w-[1.77%] top-[37.04%] right-[32.81%] bottom-[35.56%] left-[65.42%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[2.7%] w-[102.94%] top-[100%] right-[-2.94%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
              style={lineDiv2Style}
            />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
                Plan
              </div>
            </div>
          </div>
        </div>
      )}
      {groupDivVisible2 && (
        <div className="absolute h-[27.41%] w-[2.97%] top-[37.04%] right-[50.63%] bottom-[35.56%] left-[46.41%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[2.7%] w-[101.75%] top-[100%] right-[-1.75%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary" />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div
                className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium"
                style={admin1Style}
              >
                Tenant
              </div>
            </div>
          </div>
        </div>
      )}
      {groupDivVisible3 && (
        <div className="absolute h-[27.41%] w-[3.65%] top-[37.04%] right-[56.09%] bottom-[35.56%] left-[40.26%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[2.7%] w-[101.43%] top-[100%] right-[-1.43%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
              style={lineDiv3Style}
            />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
                Landlord
              </div>
            </div>
          </div>
        </div>
      )}
      {groupDivVisible4 && (
        <div className="absolute h-[27.41%] w-[3.54%] top-[37.04%] right-[44.58%] bottom-[35.56%] left-[51.88%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div
              className="absolute h-[2.7%] w-[101.47%] top-[100%] right-[-1.47%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary"
              style={lineDiv4Style}
            />
            <div className="absolute h-[78.38%] w-full top-[0%] right-[0%] bottom-[21.62%] left-[0%]">
              <div className="absolute top-[0px] left-[-1px] tracking-[0.15px] font-medium">
                Property
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Property1AdminHeader.propTypes = {
  className: PropTypes.string,
  showGroupIcon: PropTypes.bool,
  showButton: PropTypes.bool,
  showGroupDiv: PropTypes.bool,
  groupDivVisible: PropTypes.bool,
  groupDivVisible1: PropTypes.bool,
  groupDivVisible2: PropTypes.bool,
  groupDivVisible3: PropTypes.bool,
  groupDivVisible4: PropTypes.bool,

  /** Style props */
  property1AdminHeaderPosition: PropTypes.any,
  property1AdminHeaderTop: PropTypes.any,
  property1AdminHeaderLeft: PropTypes.any,
  lineDivOpacity: PropTypes.any,
  adminFontWeight: PropTypes.any,
  adminColor: PropTypes.any,
  lineDivOpacity1: PropTypes.any,
  lineDivOpacity2: PropTypes.any,
  adminFontWeight1: PropTypes.any,
  adminColor1: PropTypes.any,
  lineDivOpacity3: PropTypes.any,
  lineDivOpacity4: PropTypes.any,
};

export default Property1AdminHeader;
