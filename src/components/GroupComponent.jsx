import { useMemo } from "react";
import Property1AdminName from "./Property1AdminName";
import Property1Amount from "./Property1Amount";
import Property1Status from "./Property1Status";
import Property1EditView from "./Property1EditView";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  tenantName,
  detailsEdit,
  adminFullName1,
  adminFullName2,
  adminFullName3,
  adminFullName4,
  adminFullName5,
  adminFullName6,
  adminFullName7,
  adminFullName8,
  adminFullName9,
  inactive,
  draft,
  inactive1,
  draft1,
  inactive2,
  showEditIcon,
  editIconVisible,
  editIconVisible1,
  editIconVisible2,
  editIconVisible3,
  editIconVisible4,
  editIconVisible5,
  editIconVisible6,
  editIconVisible7,
  adminFullNameLeft,
  statusBorderRadius,
  viewIconBackgroundColor,
  frameDivColor,
  viewIconBackgroundColor1,
  frameDivColor1,
  viewIconBackgroundColor2,
  frameDivColor2,
  viewIconBackgroundColor3,
  frameDivColor3,
  viewIconBackgroundColor4,
  frameDivColor4,
  propOpacity,
  propOpacity1,
  onFrameContainerClick,
  onEditIconClick,
  showEditIcon1,
  editIconVisible8,
  editIconVisible11,
  editIconVisible21,
  editIconVisible31,
  editIconVisible41,
  editIconVisible51,
  editIconVisible61,
  editIconVisible71,
}) => {
  const detailsEditStyle = useMemo(() => {
    return {
      left: adminFullNameLeft,
    };
  }, [adminFullNameLeft]);

  const frameDiv8Style = useMemo(() => {
    return {
      borderRadius: statusBorderRadius,
    };
  }, [statusBorderRadius]);

  const property1DraftStyle = useMemo(() => {
    return {
      backgroundColor: viewIconBackgroundColor,
    };
  }, [viewIconBackgroundColor]);

  const draftStyle = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const property1DraftStyle1 = useMemo(() => {
    return {
      backgroundColor: viewIconBackgroundColor1,
    };
  }, [viewIconBackgroundColor1]);

  const draftStyle1 = useMemo(() => {
    return {
      color: frameDivColor1,
    };
  }, [frameDivColor1]);

  const property1DraftStyle2 = useMemo(() => {
    return {
      backgroundColor: viewIconBackgroundColor2,
    };
  }, [viewIconBackgroundColor2]);

  const draftStyle2 = useMemo(() => {
    return {
      color: frameDivColor2,
    };
  }, [frameDivColor2]);

  const property1DraftStyle3 = useMemo(() => {
    return {
      backgroundColor: viewIconBackgroundColor3,
    };
  }, [viewIconBackgroundColor3]);

  const draftStyle3 = useMemo(() => {
    return {
      color: frameDivColor3,
    };
  }, [frameDivColor3]);

  const property1DraftStyle4 = useMemo(() => {
    return {
      backgroundColor: viewIconBackgroundColor4,
    };
  }, [viewIconBackgroundColor4]);

  const draftStyle4 = useMemo(() => {
    return {
      color: frameDivColor4,
    };
  }, [frameDivColor4]);

  const viewIconStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const viewIcon1Style = useMemo(() => {
    return {
      opacity: propOpacity1,
    };
  }, [propOpacity1]);

  return (
    <div
      className={`absolute top-[271px] left-[216px] shadow-[0px_20px_35px_rgba(29,_94,_109,_0.03)] w-[1488px] h-[712px] text-center text-base text-white font-head5-2-23-med ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-secondary w-[1488px] h-16" />
      <div className="absolute top-[20px] left-[32px] tracking-[0.15px] font-semibold">
        Property Type
      </div>
      <div className="absolute top-[20px] left-[340px] tracking-[0.15px] font-semibold">
        Property Name
      </div>
      <div className="absolute top-[20px] left-[720px] tracking-[0.15px] font-semibold">
        {tenantName}
      </div>
      <div className="absolute top-[20px] left-[1102px] tracking-[0.15px] font-semibold">
        Status
      </div>
      <div
        className="absolute top-[20px] left-[1340px] tracking-[0.15px] font-semibold"
        style={detailsEditStyle}
      >
        {detailsEdit}
      </div>
      <div className="absolute top-[64px] left-[0px] w-[1488px] flex flex-row items-center justify-start">
        <Property1AdminName
          adminFullName1="Appartment"
          adminFullName2="Duplex"
          adminFullName3="Rowhouse"
          adminFullName4="Tenement"
          adminFullName5="Appartment"
          adminFullName6="Duplex"
          adminFullName7="Rowhouse"
          adminFullName8="Tenement"
          adminFullName9="Tenement"
          property1AdminNameWidth="308px"
          frameDivBorderRadius="0px 0px 0px 16px"
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
          frameDivBorderRadius="0px 0px 0px 16px"
        />
        <Property1Amount
          prop="Tenant Full Name 1"
          prop1="Tenant Full Name 2"
          prop2="Tenant Full Name 3"
          prop3="Tenant Full Name 4"
          prop4="Tenant Full Name 5"
          prop5="Tenant Full Name 6"
          prop6="Tenant Full Name 7"
          prop7="Tenant Full Name 8"
          prop8="Tenant Full Name 9"
          property1AmountWidth="380px"
          frameDivFlexDirection="column"
          frameDivFlexDirection1="column"
          frameDivFlexDirection2="column"
          frameDivFlexDirection3="column"
          frameDivFlexDirection4="column"
          frameDivFlexDirection5="column"
          frameDivFlexDirection6="column"
          frameDivFlexDirection7="column"
        />
        <Property1Status
          active="Active"
          disable="Disable"
          inactive="Inactive"
          active1="draft"
          inactive1="Inactive"
          active2="Active"
          active3="draft"
          disable1="Disable"
          inactive2="Inactive"
          property1StatusWidth="220px"
          statusBorderRadius="8px"
          statusBackgroundColor="#d5f3b8"
          statusWidth="152px"
          activeColor="#64b316"
          statusBorderRadius1="8px"
          statusBackgroundColor1="#dbdbdb"
          statusWidth1="152px"
          disableColor="#9c9c9c"
          statusBackgroundColor2="#f5dbdb"
          statusBorderRadius2="8px"
          statusWidth2="152px"
          inactiveColor="#fc5858"
          statusBackgroundColor3="#caebfe"
          statusBorderRadius3="8px"
          statusWidth3="152px"
          activeColor1="#2e95ce"
          statusBackgroundColor4="#f5dbdb"
          statusBorderRadius4="8px"
          statusWidth4="152px"
          inactiveColor1="#fc5858"
          statusBorderRadius5="8px"
          statusBackgroundColor5="#d5f3b8"
          statusWidth5="152px"
          activeColor2="#64b316"
          statusBackgroundColor6="#caebfe"
          statusBorderRadius6="8px"
          statusWidth6="152px"
          activeColor3="#2e95ce"
          statusBorderRadius7="8px"
          statusBackgroundColor7="#dbdbdb"
          statusWidth7="152px"
          disableColor1="#9c9c9c"
          statusBackgroundColor8="#f5dbdb"
          statusBorderRadius8="8px"
          statusWidth8="152px"
          inactiveColor2="#fc5858"
        />
        <Property1EditView
          edit="/edit.svg"
          view="/view.svg"
          view1="/view.svg"
          edit2="/edit.svg"
          view2="/view.svg"
          edit3="/edit.svg"
          edit4="/edit.svg"
          view4="/view.svg"
          edit5="/edit.svg"
          view5="/view.svg"
          edit6="/edit.svg"
          view7="/view.svg"
          edit8="/edit.svg"
          view8="/view.svg"
          showEditIcon
          editIconVisible
          editIconVisible1
          editIconVisible2
          editIconVisible3
          editIconVisible4
          editIconVisible5
          editIconVisible6
          editIconVisible7
          property1EditViewWidth="200px"
          editIconOpacity="0"
          viewIconOpacity="0"
          viewIconOpacity1="0"
          editIconOpacity1="0"
          frameDivBorderRadius="0px 0px 16px 0px"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  tenantName: PropTypes.string,
  detailsEdit: PropTypes.string,
  adminFullName1: PropTypes.string,
  adminFullName2: PropTypes.string,
  adminFullName3: PropTypes.string,
  adminFullName4: PropTypes.string,
  adminFullName5: PropTypes.string,
  adminFullName6: PropTypes.string,
  adminFullName7: PropTypes.string,
  adminFullName8: PropTypes.string,
  adminFullName9: PropTypes.string,
  inactive: PropTypes.string,
  draft: PropTypes.string,
  inactive1: PropTypes.string,
  draft1: PropTypes.string,
  inactive2: PropTypes.string,
  showEditIcon: PropTypes.bool,
  editIconVisible: PropTypes.bool,
  editIconVisible1: PropTypes.bool,
  editIconVisible2: PropTypes.bool,
  editIconVisible3: PropTypes.bool,
  editIconVisible4: PropTypes.bool,
  editIconVisible5: PropTypes.bool,
  editIconVisible6: PropTypes.bool,
  editIconVisible7: PropTypes.bool,
  showEditIcon1: PropTypes.bool,
  editIconVisible8: PropTypes.bool,
  editIconVisible11: PropTypes.bool,
  editIconVisible21: PropTypes.bool,
  editIconVisible31: PropTypes.bool,
  editIconVisible41: PropTypes.bool,
  editIconVisible51: PropTypes.bool,
  editIconVisible61: PropTypes.bool,
  editIconVisible71: PropTypes.bool,

  /** Style props */
  adminFullNameLeft: PropTypes.any,
  statusBorderRadius: PropTypes.any,
  viewIconBackgroundColor: PropTypes.any,
  frameDivColor: PropTypes.any,
  viewIconBackgroundColor1: PropTypes.any,
  frameDivColor1: PropTypes.any,
  viewIconBackgroundColor2: PropTypes.any,
  frameDivColor2: PropTypes.any,
  viewIconBackgroundColor3: PropTypes.any,
  frameDivColor3: PropTypes.any,
  viewIconBackgroundColor4: PropTypes.any,
  frameDivColor4: PropTypes.any,
  propOpacity: PropTypes.any,
  propOpacity1: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
  onEditIconClick: PropTypes.func,
};

export default GroupComponent;
