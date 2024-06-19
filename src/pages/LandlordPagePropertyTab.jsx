import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer1 from "../components/Footer1";
import GroupComponent from "../components/GroupComponent";
import AllHeaders from "../components/AllHeaders";
import Property1Admin from "../components/Property1Admin";
import Property1Default from "../components/Property1Default";

const LandlordPagePropertyTab = () => {
  const navigate = useNavigate();

  const onEditIconClick = useCallback(() => {
    navigate("/landlord-page-property-tab-add-edit-property");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1354px] text-left text-7xl text-secondary font-head5-2-23-med">
      <img
        className="absolute top-[275px] left-[620px] w-[1300px] h-[893px]"
        alt=""
        src="/mask-group.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-tertiary w-[1920px] h-[1167px] opacity-[0.5]" />
      <Footer1 />
      <div className="absolute h-[4.36%] w-[12.08%] top-[93.43%] right-[80.42%] bottom-[2.22%] left-[7.5%] text-base">
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
      <GroupComponent
        tenantName="Tenant Name"
        detailsEdit="Details/Edit"
        adminFullName1="Tenant Full Name 1"
        adminFullName2="Tenant Full Name 2"
        adminFullName3="Tenant Full Name 3"
        adminFullName4="Tenant Full Name 4"
        adminFullName5="Tenant Full Name 5"
        adminFullName6="Tenant Full Name 6"
        adminFullName7="Tenant Full Name 7"
        adminFullName8="Tenant Full Name 8"
        adminFullName9="Tenant Full Name 9"
        inactive="Inactive"
        draft="draft"
        inactive1="Inactive"
        draft1="draft"
        inactive2="Inactive"
        showEditIcon
        editIconVisible
        editIconVisible1
        editIconVisible2
        editIconVisible3
        editIconVisible4
        editIconVisible5
        editIconVisible6
        editIconVisible7
        onEditIconClick={onEditIconClick}
        showEditIcon1
        editIconVisible8
        editIconVisible11
        editIconVisible21
        editIconVisible31
        editIconVisible41
        editIconVisible51
        editIconVisible61
        editIconVisible71
      />
      <div className="absolute top-[195px] left-[216px] font-medium">
        Property List
      </div>
      <div className="absolute top-[195px] left-[216px] font-medium">
        Property List
      </div>
      <div className="absolute top-[36px] left-[260px] font-medium">
        Property List
      </div>
      <div className="absolute h-[1.77%] w-[11.48%] top-[78.51%] right-[44.25%] bottom-[19.72%] left-[44.27%] text-base text-text1">
        <img
          className="absolute h-3/6 w-[3.36%] top-[19.17%] right-[96.64%] bottom-[30.83%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
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
          className="absolute h-3/6 w-[3.36%] top-[19.17%] right-[0%] bottom-[30.83%] left-[96.64%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector3.svg"
        />
      </div>
      <AllHeaders />
      <div className="absolute top-[52px] left-[274px] font-extrabold text-center inline-block w-[114px]">
        KeyRent
      </div>
      <div className="absolute h-[2.73%] w-[4.69%] top-[3.69%] right-[35.21%] bottom-[93.57%] left-[60.1%]">
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
      <div className="absolute h-[2.73%] w-[2.92%] top-[3.62%] right-[29.79%] bottom-[93.65%] left-[67.29%]">
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
      <div className="absolute top-[191px] left-[876px] flex flex-row items-center justify-center gap-[16px] text-base text-text1">
        <div className="w-[472px] relative shadow-[0px_2px_2px_rgba(29,_94,_109,_0.05)] h-12">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-white" />
          <div className="absolute h-3/6 w-[12.08%] top-[25%] left-[11.86%] tracking-[0.15px] flex items-center opacity-[0.5]">
            Search
          </div>
          <img
            className="absolute top-[12.2px] left-[16px] w-6 h-6 overflow-hidden"
            alt=""
            src="/search.svg"
          />
        </div>
        <div className="shadow-[0px_2px_2px_rgba(29,_94,_109,_0.05)] rounded-2xl bg-white flex flex-row items-center justify-start py-3 px-4 gap-[16px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/filter.svg"
          />
          <div className="relative tracking-[0.15px]">Filter</div>
        </div>
        <Property1Default
          addNewPlan="Add New Property"
          property1DefaultWidth="213px"
          property1DefaultPosition="relative"
          onEditIconClick={onEditIconClick}
        />
      </div>
      <img
        className="absolute top-[1196px] left-[912px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
      <img
        className="absolute top-[25px] left-[176px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
    </div>
  );
};

export default LandlordPagePropertyTab;
