import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer1 = ({ className = "", groupIconTop, groupIconLeft }) => {
  const footer1Style = useMemo(() => {
    return {
      top: groupIconTop,
      left: groupIconLeft,
    };
  }, [groupIconTop, groupIconLeft]);

  return (
    <div
      className={`absolute top-[1167px] left-[0px] w-[1920px] h-[187px] text-left text-base text-secondary font-head5-2-23-med ${className}`}
      style={footer1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-primary" />
      <div className="absolute h-[12.83%] w-[13.8%] top-[61.5%] right-[43.23%] bottom-[25.67%] left-[42.97%] text-center">
        <img
          className="absolute h-[233.33%] w-[100.6%] top-[-275%] right-[0%] bottom-[141.67%] left-[-0.6%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/group-621.svg"
        />
        <div className="absolute top-[0%] left-[0%]">
          2024 KeyRent, All Rights Reserved
        </div>
      </div>
      <div className="absolute h-[32.62%] w-[13.7%] top-[32.62%] right-[75.05%] bottom-[34.76%] left-[11.25%] hidden">
        <div className="absolute top-[0%] left-[0%] tracking-[0.15px]">
          Looking for help? Write us on
        </div>
        <div className="absolute h-[47.54%] w-full top-[52.46%] right-[0%] bottom-[0%] left-[0%] text-lgi text-white">
          <img
            className="absolute h-[82.76%] w-[9.13%] top-[10.34%] right-[90.87%] bottom-[6.9%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/emailicon@2x.png"
          />
          <div className="absolute top-[0%] left-[12.17%] tracking-[0.15px] font-semibold">
            Support@triplenet.com
          </div>
        </div>
      </div>
      <div className="absolute top-[32.62%] left-[78.54%] tracking-[0.15px]">
        Follow us on
      </div>
      <img
        className="absolute h-[17.11%] w-[0.9%] top-[49.73%] right-[20.45%] bottom-[33.16%] left-[78.65%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[13.96%] w-[1.67%] top-[52.94%] right-[11.25%] bottom-[33.1%] left-[87.08%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute h-[17.11%] w-[1.67%] top-[49.73%] right-[14.32%] bottom-[33.16%] left-[84.01%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-72.svg"
      />
      <img
        className="absolute h-[17.11%] w-[1.67%] top-[49.73%] right-[17.4%] bottom-[33.16%] left-[80.94%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-71.svg"
      />
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  groupIconTop: PropTypes.any,
  groupIconLeft: PropTypes.any,
};

export default Footer1;
