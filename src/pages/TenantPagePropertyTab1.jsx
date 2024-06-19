import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "../components/Property1Variant";
import Property1Fill from "../components/Property1Fill";
import Footer1 from "../components/Footer1";
import Property1Draft from "../components/Property1Draft";

const TenantPagePropertyTab1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/tenant-page-property-tab1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1584px] overflow-hidden text-left text-7xl text-secondary font-head5-2-23-med">
      <img
        className="absolute top-[283px] left-[620px] w-[1300px] h-[893px]"
        alt=""
        src="/mask-group2.svg"
      />
      <div className="absolute top-[-3px] left-[-3px] bg-tertiary w-[1920px] h-[1397px] opacity-[0.5]" />
      <div className="absolute top-[195px] left-[216px] w-[1488px] h-[1122px]">
        <div className="absolute top-[0px] left-[0px] font-medium">
          Property / View
        </div>
        <div className="absolute top-[74px] left-[0px] w-[1488px] h-[1048px] text-base text-text1">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_35px_rgba(29,_94,_109,_0.03)] rounded-2xl bg-white w-[1488px] h-[1048px]" />
          <div
            className="absolute top-[928px] left-[676px] w-[137px] h-14 cursor-pointer"
            onClick={onGroupContainerClick}
          >
            <Property1Variant
              startYourProject="Back"
              property1Variant3BackgroundColor="#00d095"
              property1Variant3Position="absolute"
              property1Variant3Height="unset"
              property1Variant3Width="unset"
              property1Variant3Top="0px"
              property1Variant3Right="unset"
              property1Variant3Bottom="unset"
              property1Variant3Left="0px"
              startYourProjectColor="#fff"
            />
          </div>
          <div className="absolute top-[208px] left-[980px] w-[452px] h-6">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-medium whitespace-pre-wrap opacity-[0.5]">{`Lease Amendment-1  -  FileName.pdf `}</div>
            <div className="absolute top-[0px] left-[384px] w-[68px] h-6 opacity-[0.5]">
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
            </div>
          </div>
          <div className="absolute top-[248px] left-[980px] w-[452px] h-6">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-medium whitespace-pre-wrap opacity-[0.5]">{`Lease Amendment-2  -  FileName.pdf `}</div>
            <div className="absolute top-[0px] left-[384px] w-[68px] h-6 opacity-[0.5]">
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
            </div>
          </div>
          <div className="absolute top-[56px] left-[518px] tracking-[0.15px] opacity-[0.5]">
            Property Name
          </div>
          <div className="absolute top-[104px] left-[980px] tracking-[0.15px] opacity-[0.5]">
            Property Status
          </div>
          <Property1Fill
            john="ABC"
            property1FillPosition="absolute"
            property1FillTop="88px"
            property1FillLeft="518px"
            property1FillWidth="430px"
            property1FillHeight="unset"
            johnOpacity="0.5"
          />
          <div className="absolute top-[56px] left-[56px] w-[430px] h-[88px]">
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
          <div className="absolute top-[176px] left-[56px] w-[892px] h-[88px]">
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
          <div className="absolute top-[296px] left-[518px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Landlord Email ID
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
          <div className="absolute top-[296px] left-[56px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Landlord Name
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
          <div className="absolute top-[416px] left-[56px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Rent Amount
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[536px] left-[56px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Gas Bill
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[416px] left-[518px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Electricity Bill
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[536px] left-[518px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Maintenance Bill
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[656px] left-[56px] w-[430px] h-[88px] text-text">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] font-semibold">
              Total Amount
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[776px] left-[56px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Start Date
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
          <div className="absolute top-[776px] left-[518px] w-[430px] h-[88px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              End Date
            </div>
            <Property1Fill
              john="John"
              property1FillPosition="absolute"
              property1FillTop="32px"
              property1FillLeft="0px"
              property1FillWidth="430px"
              property1FillHeight="unset"
              johnOpacity="0.5"
            />
          </div>
        </div>
      </div>
      <div className="absolute h-[8.52%] w-full top-[0%] right-[1.82%] bottom-[91.48%] left-[-1.82%] [background:linear-gradient(121.51deg,_#e1f4f5,_#e1f4f5_47.1%,_#d6ebf0_85.04%)]" />
      <Footer1 groupIconTop="1397px" groupIconLeft="21px" />
      <Property1Draft
        draft="Active"
        property1DraftBackgroundColor="#d5f3b8"
        property1DraftWidth="161.2px"
        property1DraftPosition="absolute"
        property1DraftTop="368px"
        property1DraftLeft="1368px"
        property1DraftBorderRadius="10.4px"
        draftColor="#64b316"
        draftFontSize="16.9px"
      />
      <img
        className="absolute top-[1426px] left-[941px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
    </div>
  );
};

export default TenantPagePropertyTab1;
