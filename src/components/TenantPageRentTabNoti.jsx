import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "./Property1Variant";
import ButtonChips from "./ButtonChips";
import PropTypes from "prop-types";

const TenantPageRentTabNoti = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonChipsContainerClick = useCallback(() => {
    navigate("/tenant-page-rent-tab");
  }, [navigate]);

  return (
    <div
      className={`relative shadow-[0px_20px_30px_rgba(29,_94,_109,_0.2)] rounded-3xl bg-white flex flex-col items-center justify-center pt-14 px-14 pb-[60px] box-border max-w-full max-h-full overflow-auto text-left text-7xl text-secondary font-head5-2-23-med ${className}`}
    >
      <div className="w-[486px] relative h-[484px]">
        <div className="absolute top-[0px] left-[0px] font-medium">
          Do you want to notify landlord?
        </div>
        <img
          className="absolute top-[7px] left-[462px] w-6 h-6 overflow-hidden"
          alt=""
          src="/menu--close.svg"
        />
        <div className="absolute top-[87px] left-[0px] w-[481px] h-[293px] text-base text-text1">
          <div className="absolute top-[32px] left-[0px] rounded-2xl bg-background w-[481px] h-[261px]" />
          <div className="absolute top-[56px] left-[24px] tracking-[0.15px]">
            Message here...
          </div>
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Message
          </div>
        </div>
        <div className="absolute h-[11.57%] w-[64.2%] top-[88.43%] right-[18.31%] bottom-[0%] left-[17.49%]">
          <Property1Variant
            startYourProject="Notify"
            property1Variant3BackgroundColor="#00d095"
            property1Variant3Position="absolute"
            property1Variant3Height="100%"
            property1Variant3Width="50.64%"
            property1Variant3Top="0%"
            property1Variant3Right="0%"
            property1Variant3Bottom="0%"
            property1Variant3Left="49.36%"
            startYourProjectColor="#fff"
          />
          <ButtonChips
            learnMore="Cancel"
            buttonChipsPosition="absolute"
            buttonChipsTop="0px"
            buttonChipsLeft="0px"
            onButtonChipsContainerClick={onButtonChipsContainerClick}
          />
        </div>
      </div>
    </div>
  );
};

TenantPageRentTabNoti.propTypes = {
  className: PropTypes.string,
};

export default TenantPageRentTabNoti;
