import { useState, useCallback } from "react";
import TenantPageLandlordTab1 from "../components/TenantPageLandlordTab1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Property1Amount from "../components/Property1Amount";
import Property1AdminName from "../components/Property1AdminName";
import Property1Status from "../components/Property1Status";
import Property1TenantHeader from "../components/Property1TenantHeader";
import Footer1 from "../components/Footer1";

const TenantPageLandlordTab = () => {
  const [isTenantPageLandlordTabOpen, setTenantPageLandlordTabOpen] =
    useState(false);
  const navigate = useNavigate();

  const openTenantPageLandlordTab = useCallback(() => {
    setTenantPageLandlordTabOpen(true);
  }, []);

  const closeTenantPageLandlordTab = useCallback(() => {
    setTenantPageLandlordTabOpen(false);
  }, []);

  const onGroupContainerClick = useCallback(() => {
    navigate("/tenant-page-property-tab1");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-white h-[1354px] overflow-hidden text-left text-base text-text1 font-head5-2-23-med">
        <img
          className="absolute top-[275px] left-[620px] w-[1300px] h-[893px]"
          alt=""
          src="/mask-group.svg"
        />
        <div className="absolute top-[271px] left-[-488px] bg-tertiary w-[1920px] h-[1168px] opacity-[0.5]" />
        <div className="absolute top-[195px] left-[216px] text-7xl font-medium text-secondary">
          Landlord List
        </div>
        <div className="absolute h-[3.55%] w-[24.58%] top-[14.11%] right-[17.86%] bottom-[82.35%] left-[57.55%] shadow-[0px_2px_2px_rgba(29,_94,_109,_0.05)]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-white" />
          <div className="absolute top-[25%] left-[11.86%] tracking-[0.15px] opacity-[0.5]">
            Search
          </div>
          <img
            className="absolute top-[12px] left-[16px] w-6 h-6 overflow-hidden"
            alt=""
            src="/search1.svg"
          />
        </div>
        <div className="absolute top-[191px] left-[1593px] shadow-[0px_2px_2px_rgba(29,_94,_109,_0.05)] rounded-2xl bg-white flex flex-row items-center justify-start py-3 px-4 gap-[16px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/filter.svg"
          />
          <div className="relative tracking-[0.15px]">Filter</div>
        </div>
        <div className="absolute h-[1.77%] w-[11.48%] top-[78.51%] right-[44.25%] bottom-[19.72%] left-[44.27%]">
          <img
            className="absolute h-3/6 w-[3.36%] top-[25%] right-[96.64%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
          <div className="absolute top-[0px] left-[43.7px] tracking-[0.15px]">
            1
          </div>
          <div className="absolute top-[0px] left-[73.7px] w-6 h-6 text-white">
            <div className="absolute top-[0px] left-[0px] rounded bg-secondary w-6 h-6" />
            <div className="absolute top-[0px] left-[7.7px] tracking-[0.15px] font-semibold">
              2
            </div>
          </div>
          <div className="absolute top-[0px] left-[121.7px] tracking-[0.15px]">
            . . .
          </div>
          <div className="absolute top-[0px] left-[165.7px] tracking-[0.15px]">
            8
          </div>
          <img
            className="absolute h-3/6 w-[3.36%] top-[25%] right-[0%] bottom-[25%] left-[96.64%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/vector5.svg"
          />
        </div>
        <div className="absolute top-[271px] left-[216px] shadow-[0px_20px_35px_rgba(29,_94,_109,_0.03)] w-[1488px] h-[712px] text-center text-white">
          <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-secondary w-[1488px] h-16" />
          <div className="absolute top-[20px] left-[32px] tracking-[0.15px] font-semibold">
            Landlord Name
          </div>
          <div className="absolute top-[20px] left-[566px] tracking-[0.15px] font-semibold">
            Email
          </div>
          <div className="absolute top-[20px] left-[986px] tracking-[0.15px] font-semibold">
            Phone
          </div>
          <div className="absolute top-[20px] left-[1295px] tracking-[0.15px] font-semibold">
            Send Query
          </div>
          <div className="absolute top-[64px] left-[0px] w-[1488px] flex flex-row items-center justify-start">
            <Property1Amount
              prop="Landlord Full Name 1"
              prop1="Landlord Full Name 2"
              prop2="Landlord Full Name 3"
              prop3="Landlord Full Name 4"
              prop4="Landlord Full Name 5"
              prop5="Landlord Full Name 6"
              prop6="Landlord Full Name 7"
              prop7="Landlord Full Name 8"
              prop8="Landlord Full Name 9"
              property1AmountWidth="534px"
              frameDivFlexDirection="column"
              frameDivFlexDirection1="column"
              frameDivFlexDirection2="column"
              frameDivFlexDirection3="column"
              frameDivFlexDirection4="column"
              frameDivFlexDirection5="column"
              frameDivFlexDirection6="column"
              frameDivFlexDirection7="column"
            />
            <Property1AdminName
              adminFullName1="landlordname@email.com"
              adminFullName2="landlordname@email.com"
              adminFullName3="landlordname@email.com"
              adminFullName4="landlordname@email.com"
              adminFullName5="landlordname@email.com"
              adminFullName6="landlordname@email.com"
              adminFullName7="landlordname@email.com"
              adminFullName8="landlordname@email.com"
              adminFullName9="landlordname@email.com"
              property1AdminNameWidth="420px"
              frameDivBorderRadius="0px 0px 0px 16px"
            />
            <Property1AdminName
              adminFullName1="9898989898"
              adminFullName2="9898989898"
              adminFullName3="9898989898"
              adminFullName4="9898989898"
              adminFullName5="9898989898"
              adminFullName6="9898989898"
              adminFullName7="9898989898"
              adminFullName8="9898989898"
              adminFullName9="9898989898"
              property1AdminNameWidth="300px"
              frameDivBorderRadius="0px 0px 0px 16px"
            />
            <Property1Status
              active="Send Query"
              disable="Send Query"
              inactive="Send Query"
              active1="Send Query"
              inactive1="Send Query"
              active2="Send Query"
              active3="Send Query"
              disable1="Send Query"
              inactive2="Send Query"
              property1StatusWidth="234px"
              statusBorderRadius="41px"
              statusBackgroundColor="#00d095"
              statusWidth="152px"
              activeColor="#fff"
              statusBorderRadius1="41px"
              statusBackgroundColor1="#00d095"
              statusWidth1="152px"
              disableColor="#fff"
              statusBackgroundColor2="#00d095"
              statusBorderRadius2="41px"
              statusWidth2="152px"
              inactiveColor="#fff"
              statusBackgroundColor3="#00d095"
              statusBorderRadius3="41px"
              statusWidth3="152px"
              activeColor1="#fff"
              statusBackgroundColor4="#00d095"
              statusBorderRadius4="41px"
              statusWidth4="152px"
              inactiveColor1="#fff"
              statusBorderRadius5="41px"
              statusBackgroundColor5="#00d095"
              statusWidth5="152px"
              activeColor2="#fff"
              statusBackgroundColor6="#00d095"
              statusBorderRadius6="41px"
              statusWidth6="152px"
              activeColor3="#fff"
              statusBorderRadius7="41px"
              statusBackgroundColor7="#00d095"
              statusWidth7="152px"
              disableColor1="#fff"
              statusBackgroundColor8="#00d095"
              statusBorderRadius8="41px"
              statusWidth8="152px"
              inactiveColor2="#fff"
            />
          </div>
        </div>
        <Property1TenantHeader
          showGroupIcon={false}
          showGroupDiv={false}
          property1TenantHeaderPosition="absolute"
          property1TenantHeaderTop="0px"
          property1TenantHeaderLeft="0px"
          lineDivOpacity="0"
          adminFontWeight="500"
          adminColor="#616161"
          lineDivOpacity1="0"
          groupDivHeight="0px"
          groupDivWidth="0px"
          groupDivRight="unset"
          groupDivBottom="unset"
          groupDivHeight1="37px"
          groupDivWidth1="125px"
          groupDivTop="unset"
          groupDivRight1="unset"
          groupDivBottom1="unset"
          groupDivLeft="unset"
          lineDivOpacity2="0"
          lineDivOpacity3="0"
          adminFontWeight1="600"
          adminColor1="#00d095"
          lineDivOpacity4="0"
          onGroupContainerClick={onGroupContainerClick}
        />
        <div className="absolute top-[56px] left-[314px] text-7xl font-extrabold text-secondary text-center inline-block w-[114px]">
          KeyRent
        </div>
        <img
          className="absolute top-[29px] left-[216px] w-20 h-20 object-cover"
          alt=""
          src="/whatsapp-image-20240512-at-1004-1@2x.png"
        />
        <Footer1 groupIconTop="1168px" groupIconLeft="-24px" />
        <img
          className="absolute top-[1186px] left-[880px] w-20 h-20 object-cover"
          alt=""
          src="/whatsapp-image-20240512-at-1004-1@2x.png"
        />
      </div>
      {isTenantPageLandlordTabOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTenantPageLandlordTab}
        >
          <TenantPageLandlordTab1 onClose={closeTenantPageLandlordTab} />
        </PortalPopup>
      )}
    </>
  );
};

export default TenantPageLandlordTab;
