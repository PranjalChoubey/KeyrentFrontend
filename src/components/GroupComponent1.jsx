import { useMemo } from "react";
import Property1DateDisable from "./Property1DateDisable";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", startDate, dDMMYYYY, propLeft }) => {
  const groupDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[777px] left-[58px] w-[430px] h-[88px] text-left text-base text-text1 font-head5-2-23-med ${className}`}
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
        {startDate}
      </div>
      <Property1DateDisable
        dDMMYYYY="01/01/2023"
        property1DateDisablePosition="absolute"
        property1DateDisableTop="32px"
        property1DateDisableLeft="0px"
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  startDate: PropTypes.string,
  dDMMYYYY: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default GroupComponent1;
