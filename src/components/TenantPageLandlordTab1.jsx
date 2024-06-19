import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "./Property1Variant";
import ButtonChips from "./ButtonChips";
import Property1Fill from "./Property1Fill";
import PropTypes from "prop-types";

const TenantPageLandlordTab1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonChipsContainerClick = useCallback(() => {
    navigate("/tenant-page-landlord-tab");
  }, [navigate]);

  return (
    <div
      className={`relative shadow-[0px_20px_30px_rgba(29,_94,_109,_0.2)] rounded-3xl bg-white flex flex-col items-center justify-center pt-14 px-14 pb-[60px] box-border max-w-full max-h-full overflow-auto text-left text-base text-text1 font-head5-2-23-med ${className}`}
    >
      <div className="w-[430px] relative h-[561px]">
        <div className="absolute h-[9.98%] w-[72.56%] top-[90.02%] right-[13.72%] bottom-[0%] left-[13.72%]">
          <Property1Variant
            startYourProject="Send"
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
        <div className="absolute top-[0px] left-[0px] text-7xl font-medium text-secondary">
          Send Query To Landlord
        </div>
        <div className="absolute top-[87px] left-[0px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Title
          </div>
          <Property1Fill
            john="Query Title"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="unset"
          />
        </div>
        <div className="absolute top-[207px] left-[0px] w-[430px] h-[250px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Message
          </div>
          <Property1Fill
            john="Message here"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="218px"
            johnOpacity="unset"
          />
        </div>
        <img
          className="absolute top-[7px] left-[406px] w-6 h-6 overflow-hidden"
          alt=""
          src="/menu--close.svg"
        />
      </div>
    </div>
  );
};

TenantPageLandlordTab1.propTypes = {
  className: PropTypes.string,
};

export default TenantPageLandlordTab1;
