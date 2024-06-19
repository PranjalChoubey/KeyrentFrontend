import { useState, useCallback } from "react";
import TenantPageRentTabNoti from "../components/TenantPageRentTabNoti";
import PortalPopup from "../components/PortalPopup";
import Property1Amount from "../components/Property1Amount";
import Property1AdminName from "../components/Property1AdminName";
import Property1Status from "../components/Property1Status";
import Property1EditView from "../components/Property1EditView";
import AllHeaders1 from "../components/AllHeaders1";
import Property1Admin from "../components/Property1Admin";
import Footer1 from "../components/Footer1";

const TenantPageRentTab = () => {
  const [isTenantPageRentTabNotiOpen, setTenantPageRentTabNotiOpen] =
    useState(false);

  const openTenantPageRentTabNoti = useCallback(() => {
    setTenantPageRentTabNotiOpen(true);
  }, []);

  const closeTenantPageRentTabNoti = useCallback(() => {
    setTenantPageRentTabNotiOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-white h-[1354px] overflow-hidden text-left text-base text-text1 font-head5-2-23-med">
        <img
          className="absolute top-[275px] left-[620px] w-[1300px] h-[893px]"
          alt=""
          src="/mask-group.svg"
        />
        <div className="absolute top-[0px] left-[0px] bg-tertiary w-[1920px] h-[1168px] opacity-[0.5]" />
        <div className="absolute top-[271px] left-[216px] shadow-[0px_20px_35px_rgba(29,_94,_109,_0.03)] w-[1488px] h-[712px] text-center text-white">
          <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-secondary w-[1488px] h-16" />
          <div className="absolute top-[20px] left-[32px] tracking-[0.15px] font-semibold">
            Landlord Name
          </div>
          <div className="absolute top-[20px] left-[499px] tracking-[0.15px] font-semibold">
            Property Name
          </div>
          <div className="absolute top-[20px] left-[867px] tracking-[0.15px] font-semibold">
            Amount
          </div>
          <div className="absolute top-[20px] left-[1328px] tracking-[0.15px] font-semibold">
            Notify/Details
          </div>
          <div className="absolute top-[20px] left-[1096px] tracking-[0.15px] font-semibold">
            Pay Rent
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
              property1AmountWidth="467px"
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
              adminFullName1="Property Name 1"
              adminFullName2="Property Name 2"
              adminFullName3="Property Name 3"
              adminFullName4="Property Name 4"
              adminFullName5="Property Name 5"
              adminFullName6="Property Name 6"
              adminFullName7="Property Name 7"
              adminFullName8="Property Name 8"
              adminFullName9="Property Name 9"
              property1AdminNameWidth="380px"
              frameDivBorderRadius="unset"
            />
            <Property1Amount
              prop="$50"
              prop1="$80"
              prop2="$120"
              prop3="$150"
              prop4="$50"
              prop5="$50"
              prop6="$50"
              prop7="$100"
              prop8="$50"
              property1AmountWidth="180px"
              frameDivFlexDirection="row"
              frameDivFlexDirection1="row"
              frameDivFlexDirection2="row"
              frameDivFlexDirection3="row"
              frameDivFlexDirection4="row"
              frameDivFlexDirection5="row"
              frameDivFlexDirection6="row"
              frameDivFlexDirection7="row"
            />
            <Property1Status
              active="Pay"
              disable="Pay"
              inactive="Pay"
              active1="Pay"
              inactive1="Pay"
              active2="Pay"
              active3="Pay"
              disable1="Pay"
              inactive2="Pay"
              property1StatusWidth="244px"
              statusBorderRadius="78px"
              statusBackgroundColor="#00d095"
              statusWidth="unset"
              activeColor="#fff"
              statusBorderRadius1="78px"
              statusBackgroundColor1="#00d095"
              statusWidth1="unset"
              disableColor="#fff"
              statusBackgroundColor2="#00d095"
              statusBorderRadius2="78px"
              statusWidth2="unset"
              inactiveColor="#fff"
              statusBackgroundColor3="#00d095"
              statusBorderRadius3="78px"
              statusWidth3="unset"
              activeColor1="#fff"
              statusBackgroundColor4="#00d095"
              statusBorderRadius4="78px"
              statusWidth4="unset"
              inactiveColor1="#fff"
              statusBorderRadius5="78px"
              statusBackgroundColor5="#00d095"
              statusWidth5="unset"
              activeColor2="#fff"
              statusBackgroundColor6="#00d095"
              statusBorderRadius6="78px"
              statusWidth6="unset"
              activeColor3="#fff"
              statusBorderRadius7="78px"
              statusBackgroundColor7="#00d095"
              statusWidth7="unset"
              disableColor1="#fff"
              statusBackgroundColor8="#00d095"
              statusBorderRadius8="78px"
              statusWidth8="unset"
              inactiveColor2="#fff"
            />
            <Property1EditView
              edit="/notifications.svg"
              view="/view4.svg"
              edit1="/notifications.svg"
              view1="/view4.svg"
              edit2="/notifications.svg"
              view2="/view4.svg"
              edit3="/notifications.svg"
              view3="/view4.svg"
              edit4="/notifications.svg"
              view4="/view4.svg"
              edit5="/notifications.svg"
              view5="/view4.svg"
              edit6="/notifications.svg"
              view6="/view4.svg"
              edit7="/notifications.svg"
              view7="/view4.svg"
              edit8="/notifications.svg"
              view8="/view4.svg"
              showEditIcon
              editIconVisible
              editIconVisible1
              editIconVisible2
              editIconVisible3
              editIconVisible4
              editIconVisible5
              editIconVisible6
              editIconVisible7
              property1EditViewWidth="217px"
              editIconOpacity="unset"
              viewIconOpacity="unset"
              viewIconOpacity1="unset"
              editIconOpacity1="unset"
              frameDivBorderRadius="unset"
            />
          </div>
        </div>
        <a
          className="absolute top-[195px] left-[216px] text-7xl [text-decoration:none] text-secondary"
          href={`https://www.figma.com/proto/rUJfD8AeqiHwCBc2DjTh8c/CrimeWiz?page-id=0%3A1&node-id=156-477&viewport=2584%2C857%2C0.16&scaling=scale-down&starting-point-node-id=155%3A301&show-proto-sidebar=1`}
          target="_blank"
        >
          <span className="font-medium">{`Payment `}</span>
          <b className="text-primary">Due</b>
        </a>
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
        <AllHeaders1 groupDivTop="24px" groupDivLeft="12px" />
        <div className="absolute top-[74px] left-[280px] text-7xl font-extrabold text-secondary text-center inline-block w-[114px]">
          KeyRent
        </div>
        <img
          className="absolute top-[47px] left-[182px] w-20 h-20 object-cover"
          alt=""
          src="/whatsapp-image-20240512-at-1004-1@2x.png"
        />
        <div className="absolute h-[2.73%] w-[3.65%] top-[5.98%] right-[28.33%] bottom-[91.29%] left-[68.02%]">
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
        <div className="absolute h-[2.73%] w-[5%] top-[5.83%] right-[21.93%] bottom-[91.43%] left-[73.07%]">
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
        <div className="absolute h-[2.73%] w-[3.54%] top-[5.83%] right-[33.96%] bottom-[91.43%] left-[62.5%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-[2.7%] w-[101.47%] top-[100%] right-[-1.47%] bottom-[-2.7%] left-[0%] box-border opacity-[0] border-t-[1px] border-solid border-primary" />
            <Property1Admin
              admin="Property"
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
        <Property1Admin
          admin="Dashboard"
          property1AdminWidth="4.69%"
          property1AdminHeight="2.14%"
          property1AdminPosition="absolute"
          property1AdminTop="6.06%"
          property1AdminRight="43.59%"
          property1AdminBottom="91.8%"
          property1AdminLeft="51.72%"
          adminFontWeight="500"
          adminColor="#616161"
        />
        <div className="absolute h-[2.73%] w-[1.88%] top-[5.83%] right-[39.43%] bottom-[91.43%] left-[58.7%]">
          <div className="absolute h-[2.7%] w-[102.78%] top-[98.65%] right-[-1.39%] bottom-[-1.35%] left-[-1.39%] box-border border-t-[1px] border-solid border-primary" />
          <Property1Admin
            admin="Rent"
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
        <Footer1 groupIconTop="1168px" groupIconLeft="0px" />
        <img
          className="absolute top-[1201px] left-[912px] w-20 h-20 object-cover"
          alt=""
          src="/whatsapp-image-20240512-at-1004-1@2x.png"
        />
      </div>
      {isTenantPageRentTabNotiOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTenantPageRentTabNoti}
        >
          <TenantPageRentTabNoti onClose={closeTenantPageRentTabNoti} />
        </PortalPopup>
      )}
    </>
  );
};

export default TenantPageRentTab;
