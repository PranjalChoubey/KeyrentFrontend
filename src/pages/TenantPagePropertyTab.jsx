import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AllHeaders1 from "../components/AllHeaders1";
import Property1Admin from "../components/Property1Admin";
import GroupComponent from "../components/GroupComponent";
import Footer1 from "../components/Footer1";

const TenantPagePropertyTab = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/tenant-page-property-tab");
  }, [navigate]);

  const onRentTextClick = useCallback(() => {
    navigate("/tenant-page-rent-tab");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1354px] overflow-hidden text-left text-base text-text1 font-head5-2-23-med">
      <img
        className="absolute top-[275px] left-[620px] w-[1300px] h-[893px]"
        alt=""
        src="/mask-group.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-tertiary w-[1920px] h-[1168px] opacity-[0.5]" />
      <div className="absolute top-[195px] left-[216px] text-7xl font-medium text-secondary">
        Property List
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
      <AllHeaders1 />
      <AllHeaders1 groupDivTop="13px" groupDivLeft="-36px" />
      <div className="absolute top-[52px] left-[274px] text-7xl font-extrabold text-secondary text-center inline-block w-[114px]">
        KeyRent
      </div>
      <img
        className="absolute top-[25px] left-[176px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
      <div className="absolute h-[6.65%] w-[77.5%] top-[1.77%] right-[11.25%] bottom-[91.58%] left-[11.25%] rounded-3xl bg-white opacity-[0]" />
      <div className="absolute top-[57px] left-[960px] tracking-[0.15px] font-medium">
        Dashboard
      </div>
      <div
        className="absolute top-[57px] left-[1078px] tracking-[0.15px] font-medium cursor-pointer"
        onClick={onRentTextClick}
      >
        Rent
      </div>
      <div className="absolute h-[2.73%] w-[3.54%] top-[3.77%] right-[35.99%] bottom-[93.5%] left-[60.47%]">
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
      <div className="absolute h-[2.73%] w-[3.65%] top-[4.21%] right-[30.57%] bottom-[93.06%] left-[65.78%]">
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
      <div className="absolute top-[56px] left-[1372px] tracking-[0.15px] font-medium">
        Transaction
      </div>
      <GroupComponent
        tenantName="Landlord Name"
        detailsEdit="Details"
        adminFullName1="Landlord Full Name 1"
        adminFullName2="Landlord Full Name 2"
        adminFullName3="Landlord Full Name 3"
        adminFullName4="Landlord Full Name 4"
        adminFullName5="Landlord Full Name 5"
        adminFullName6="Landlord Full Name 6"
        adminFullName7="Landlord Full Name 7"
        adminFullName8="Landlord Full Name 8"
        adminFullName9="Landlord Full Name 9"
        inactive="Active"
        draft="Active"
        inactive1="Disable"
        draft1="Active"
        inactive2="Active"
        showEditIcon={false}
        editIconVisible={false}
        editIconVisible1={false}
        editIconVisible2={false}
        editIconVisible3={false}
        editIconVisible4={false}
        editIconVisible5={false}
        editIconVisible6={false}
        editIconVisible7={false}
        adminFullNameLeft="1360px"
        statusBorderRadius="unset"
        viewIconBackgroundColor="#d5f3b8"
        frameDivColor="#64b316"
        viewIconBackgroundColor1="#d5f3b8"
        frameDivColor1="#64b316"
        viewIconBackgroundColor2="#dbdbdb"
        frameDivColor2="#9c9c9c"
        viewIconBackgroundColor3="#d5f3b8"
        frameDivColor3="#64b316"
        viewIconBackgroundColor4="#d5f3b8"
        frameDivColor4="#64b316"
        propOpacity="unset"
        propOpacity1="unset"
        onFrameContainerClick={onFrameContainerClick}
        showEditIcon1={false}
        editIconVisible8={false}
        editIconVisible11={false}
        editIconVisible21={false}
        editIconVisible31={false}
        editIconVisible41={false}
        editIconVisible51={false}
        editIconVisible61={false}
        editIconVisible71={false}
      />
      <Footer1 groupIconTop="1167px" groupIconLeft="0px" />
      <img
        className="absolute top-[1196px] left-[924px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
    </div>
  );
};

export default TenantPagePropertyTab;
