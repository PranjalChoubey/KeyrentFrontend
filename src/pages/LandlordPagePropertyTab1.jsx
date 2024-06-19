import { useCallback } from "react";
import Footer1 from "../components/Footer1";
import { useNavigate } from "react-router-dom";
import Property1Variant from "../components/Property1Variant";
import ButtonChips from "../components/ButtonChips";
import Property1Draft from "../components/Property1Draft";
import Property1Fill from "../components/Property1Fill";
import Property1AmountDisable from "../components/Property1AmountDisable";
import GroupComponent1 from "../components/GroupComponent1";
import AllHeaders from "../components/AllHeaders";
import Property1Admin from "../components/Property1Admin";

const LandlordPagePropertyTab1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/landlord-page-property-tab");
  }, [navigate]);

  const onAdminTextClick = useCallback(() => {
    navigate("/landlord-page-tenant-tab");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1672px] text-left text-base text-secondary font-head5-2-23-med">
      <img
        className="absolute top-[275px] left-[620px] w-[1300px] h-[893px]"
        alt=""
        src="/mask-group1.svg"
      />
      <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-tertiary w-[1920px] h-[1485px] opacity-[0.5]" />
      <div className="absolute top-[195px] left-[216px] text-7xl font-medium">
        Property / Add or Edit
      </div>
      <Footer1 groupIconTop="1485px" groupIconLeft="0px" />
      <div className="absolute h-[3.53%] w-[12.08%] top-[94.02%] right-[83.28%] bottom-[2.45%] left-[4.64%]">
        <div className="absolute top-[0%] left-[0%] tracking-[0.15px]">
          Looking for help? Write us on
        </div>
        <div className="absolute h-[40.68%] w-[10.34%] top-[59.32%] right-[89.66%] bottom-[0%] left-[0%] text-lgi text-white">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/emailicon@2x.png"
          />
          <div className="absolute top-[-12.5%] left-[133.33%] tracking-[0.15px] font-semibold hidden">
            Support@triplenet.com
          </div>
        </div>
      </div>
      <div className="absolute top-[268px] left-[214px] w-[1488px] h-[1136px] text-text1">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(29,_94,_109,_0.03)] rounded-2xl bg-white w-[1488px] h-[1136px]" />
        <div
          className="absolute top-[929px] left-[605px] w-[283px] h-14 cursor-pointer"
          onClick={onGroupContainerClick}
        >
          <Property1Variant
            startYourProject="Save"
            property1Variant3BackgroundColor="#dbdbdb"
            property1Variant3Position="absolute"
            property1Variant3Height="unset"
            property1Variant3Width="unset"
            property1Variant3Top="0px"
            property1Variant3Right="unset"
            property1Variant3Bottom="unset"
            property1Variant3Left="146px"
            startYourProjectColor="#9c9c9c"
          />
          <ButtonChips
            learnMore="Cancel"
            buttonChipsPosition="absolute"
            buttonChipsTop="0px"
            buttonChipsLeft="0px"
          />
        </div>
        <div className="absolute top-[1049px] left-[592px] tracking-[0.15px]">
          <span className="whitespace-pre-wrap">{`Do you want to  `}</span>
          <span className="[text-decoration:underline] font-semibold text-black">
            Delete
          </span>
          <span className="whitespace-pre-wrap"> this property?</span>
        </div>
        <Property1Draft
          draft="Disable"
          property1DraftBackgroundColor="#dbdbdb"
          property1DraftWidth="161.2px"
          property1DraftPosition="absolute"
          property1DraftTop="94px"
          property1DraftLeft="1130px"
          property1DraftBorderRadius="10.4px"
          draftColor="#9c9c9c"
          draftFontSize="16.9px"
        />
        <div className="absolute top-[209px] left-[982px] w-[452px] h-6">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-medium whitespace-pre-wrap opacity-[0.5]">{`Lease Amendment-1  -  FileName.pdf `}</div>
          <div className="absolute top-[0px] left-[340px] w-28 h-6 opacity-[0.5]">
            <img
              className="absolute top-[0px] left-[44px] w-6 h-6 overflow-hidden"
              alt=""
              src="/view3.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/download.svg"
            />
            <img
              className="absolute top-[0px] left-[88px] w-6 h-6 overflow-hidden"
              alt=""
              src="/delete.svg"
            />
          </div>
        </div>
        <div className="absolute top-[249px] left-[982px] w-[452px] h-6">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-medium whitespace-pre-wrap opacity-[0.5]">{`Lease Amendment-2  -  FileName.pdf `}</div>
          <div className="absolute top-[0px] left-[340px] w-28 h-6 opacity-[0.5]">
            <img
              className="absolute top-[0px] left-[44px] w-6 h-6 overflow-hidden"
              alt=""
              src="/view3.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/download.svg"
            />
            <img
              className="absolute top-[0px] left-[88px] w-6 h-6 overflow-hidden"
              alt=""
              src="/delete.svg"
            />
          </div>
        </div>
        <div className="absolute top-[57px] left-[520px] tracking-[0.15px] opacity-[0.5]">
          Property Name
        </div>
        <div className="absolute top-[105px] left-[982px] tracking-[0.15px] opacity-[0.5]">
          Property Status
        </div>
        <Property1Fill
          john="ABC"
          property1FillPosition="absolute"
          property1FillTop="89px"
          property1FillLeft="520px"
          property1FillWidth="430px"
          property1FillHeight="unset"
          johnOpacity="0.5"
        />
        <div className="absolute top-[57px] left-[58px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Property Type
          </div>
          <Property1Fill
            john="Duplex"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
        </div>
        <div className="absolute top-[177px] left-[58px] w-[892px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Full Address
          </div>
          <Property1Fill
            john="17, ABC Duplex, Behind Church, XYZ Road, City, State, Country"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="892px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
        </div>
        <div className="absolute top-[297px] left-[520px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Tenant Email ID
          </div>
          <Property1Fill
            john="john@email.com"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
        </div>
        <div className="absolute top-[297px] left-[58px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Tenant Name
          </div>
          <Property1Fill
            john="John Deo"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
        </div>
        <div className="absolute top-[417px] left-[58px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Rent Amount
          </div>
          <Property1AmountDisable
            prop="200.00"
            property1AmountDisablePosition="absolute"
            property1AmountDisableTop="32px"
            property1AmountDisableLeft="0px"
          />
        </div>
        <div className="absolute top-[537px] left-[58px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Title
          </div>
          <Property1Fill
            john="Electricity Bill"
            property1FillPosition="absolute"
            property1FillTop="32px"
            property1FillLeft="0px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
        </div>
        <div className="absolute top-[537px] left-[520px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
            Amount
          </div>
          <Property1AmountDisable
            prop="100.00"
            property1AmountDisablePosition="absolute"
            property1AmountDisableTop="32px"
            property1AmountDisableLeft="0px"
          />
        </div>
        <div className="absolute top-[657px] left-[58px] w-[430px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-semibold opacity-[0.5]">
            Total Amount
          </div>
          <Property1AmountDisable
            prop="300.00"
            property1AmountDisablePosition="absolute"
            property1AmountDisableTop="32px"
            property1AmountDisableLeft="0px"
          />
        </div>
        <GroupComponent1 startDate="Start Date" dDMMYYYY="01/01/2023" />
        <GroupComponent1
          startDate="End Date"
          dDMMYYYY="01/01/2024"
          propLeft="520px"
        />
        <div className="absolute top-[305px] left-[982px] w-80 h-[29px] text-lgi">
          <div className="absolute top-[0px] left-[0px] [text-decoration:underline] tracking-[0.15px] font-medium opacity-[0.5]">
            Upload Agreement Document
          </div>
          <img
            className="absolute top-[2px] left-[296px] w-6 h-6 overflow-hidden object-contain"
            alt=""
            src="/back.svg"
          />
        </div>
      </div>
      <AllHeaders propLeft="5px" />
      <div className="absolute h-[2.21%] w-[4.69%] top-[3.17%] right-[35.42%] bottom-[94.62%] left-[59.9%]">
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
      <div
        className="absolute top-[52px] left-[1287px] tracking-[0.15px] font-medium text-text1 cursor-pointer"
        onClick={onAdminTextClick}
      >
        Tenant
      </div>
      <div className="absolute h-[2.21%] w-[3.54%] top-[2.99%] right-[24.01%] bottom-[94.8%] left-[72.45%]">
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
      <img
        className="absolute top-[1505px] left-[918px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
      <img
        className="absolute top-[27px] left-[216px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
      <div className="absolute top-[50px] left-[323px] text-7xl font-extrabold text-center inline-block w-[114px]">
        KeyRent
      </div>
    </div>
  );
};

export default LandlordPagePropertyTab1;
