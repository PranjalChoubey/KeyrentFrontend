import { useMemo } from "react";
import Profile from "./Profile";
import Property1Admin from "./Property1Admin";
import PropTypes from "prop-types";

const AllHeaders1 = ({ className = "", groupDivTop, groupDivLeft }) => {
  const allHeaders1Style = useMemo(() => {
    return {
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivTop, groupDivLeft]);

  return (
    <div
      className={`absolute top-[13px] left-[-36px] w-[1920px] h-[135px] ${className}`}
      style={allHeaders1Style}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(121.51deg,_#e1f4f5,_#e1f4f5_47.1%,_#d6ebf0_85.04%)]" />
      <div className="absolute h-[66.67%] w-[77.5%] top-[17.78%] right-[11.25%] bottom-[15.56%] left-[11.25%] rounded-3xl bg-white opacity-[0]" />
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
      <img
        className="absolute h-[41.48%] w-[2.92%] top-[30.37%] right-[17.4%] bottom-[28.15%] left-[79.69%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-26086462.svg"
      />
      <div className="absolute h-[27.41%] w-[4.69%] top-[37.04%] right-[55.89%] bottom-[35.56%] left-[39.43%] hidden">
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
      <div className="absolute h-[27.41%] w-[5%] top-[37.04%] right-[31.82%] bottom-[35.56%] left-[63.18%] hidden">
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
      <div className="absolute h-[27.41%] w-[6.51%] top-[37.04%] right-[22.81%] bottom-[35.56%] left-[70.68%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[100.8%] top-[100%] right-[-0.8%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
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
      <div className="absolute h-[27.41%] w-[1.88%] top-[37.04%] right-[39.32%] bottom-[35.56%] left-[58.8%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[102.78%] top-[100%] right-[-2.78%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Rent"
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
      <div className="absolute h-[27.41%] w-[3.65%] top-[37.04%] right-[49.74%] bottom-[35.56%] left-[46.61%] hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[2.7%] w-[101.43%] top-[100%] right-[-1.43%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Landlord"
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
      <div className="absolute h-[27.41%] w-[3.54%] top-[37.04%] right-[43.7%] bottom-[35.56%] left-[52.76%] hidden">
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

AllHeaders1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
};

export default AllHeaders1;
