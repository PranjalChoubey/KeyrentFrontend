import { useMemo } from "react";
import Profile from "./Profile";
import Property1Admin from "./Property1Admin";
import PropTypes from "prop-types";

const AllHeaders = ({ className = "", propLeft }) => {
  const allHeadersStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1440px] h-[135px] ${className}`}
      style={allHeadersStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(121.51deg,_#e1f4f5,_#e1f4f5_47.1%,_#d6ebf0_85.04%)]" />
      <div className="absolute h-[66.67%] w-[77.5%] top-[17.78%] right-[11.25%] bottom-[15.56%] left-[11.25%] rounded-3xl bg-white opacity-[0]" />
      <img
        className="absolute h-[41.48%] w-[2.92%] top-[30.37%] right-[17.4%] bottom-[28.15%] left-[79.69%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-26086462.svg"
      />
      <img
        className="absolute h-[28%] w-[9.38%] top-[37.04%] right-[79.38%] bottom-[34.96%] left-[11.25%] max-w-full overflow-hidden max-h-full hidden"
        alt=""
        src="/group-12.svg"
      />
      <Profile
        profileIconOverflow="unset"
        profileIconPosition="absolute"
        profileIconTop="41px"
        profileIconLeft="1610px"
      />
      <div className="absolute h-[27.41%] w-[4.69%] top-[37.04%] right-[50.73%] bottom-[35.56%] left-[44.58%] hidden">
        <div className="absolute h-[2.7%] w-[101.11%] top-[98.65%] right-[-0.56%] bottom-[-1.35%] left-[-0.56%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
        <Property1Admin
          admin="Dashboard"
          property1AdminWidth="100%"
          property1AdminHeight="78.38%"
          property1AdminPosition="absolute"
          property1AdminTop="0%"
          property1AdminRight="0%"
          property1AdminBottom="21.62%"
          property1AdminLeft="0%"
          adminFontWeight="500"
          adminColor="#616161"
        />
      </div>
      <div className="absolute h-[27.41%] w-[5%] top-[37.04%] right-[31.77%] bottom-[35.56%] left-[63.23%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[101.04%] top-[100%] right-[-1.04%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Transaction"
            property1AdminWidth="100%"
            property1AdminHeight="78.38%"
            property1AdminPosition="absolute"
            property1AdminTop="0%"
            property1AdminRight="0%"
            property1AdminBottom="21.62%"
            property1AdminLeft="0%"
            adminFontWeight="500"
            adminColor="#616161"
          />
        </div>
      </div>
      <div className="absolute h-[27.41%] w-[2.92%] top-[37.04%] right-[45.31%] bottom-[35.56%] left-[51.77%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[101.79%] top-[100%] right-[-1.79%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Tenant"
            property1AdminWidth="100%"
            property1AdminHeight="78.38%"
            property1AdminPosition="absolute"
            property1AdminTop="0%"
            property1AdminRight="0%"
            property1AdminBottom="21.62%"
            property1AdminLeft="0%"
            adminFontWeight="500"
            adminColor="#616161"
          />
        </div>
      </div>
      <div className="absolute h-[27.41%] w-[6.46%] top-[37.04%] right-[22.81%] bottom-[35.56%] left-[70.73%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[100.81%] top-[100%] right-[-0.81%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Linked Account"
            property1AdminWidth="100%"
            property1AdminHeight="78.38%"
            property1AdminPosition="absolute"
            property1AdminTop="0%"
            property1AdminRight="0%"
            property1AdminBottom="21.62%"
            property1AdminLeft="0%"
            adminFontWeight="500"
            adminColor="#616161"
          />
        </div>
      </div>
      <div className="absolute h-[27.41%] w-[3.54%] top-[37.04%] right-[39.27%] bottom-[35.56%] left-[57.19%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[101.47%] top-[100%] right-[-1.47%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Property"
            property1AdminWidth="100%"
            property1AdminHeight="78.38%"
            property1AdminPosition="absolute"
            property1AdminTop="0%"
            property1AdminRight="0%"
            property1AdminBottom="21.62%"
            property1AdminLeft="0%"
            adminFontWeight="600"
            adminColor="#00d095"
          />
        </div>
      </div>
    </div>
  );
};

AllHeaders.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default AllHeaders;
