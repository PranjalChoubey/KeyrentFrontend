import Property1AdminName from "./Property1AdminName";
import Property1Status from "./Property1Status";
import Property1EditView from "./Property1EditView";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[64px] left-[0px] w-[1488px] flex flex-row items-center justify-start ${className}`}
    >
      <Property1AdminName
        adminFullName1="Tenant Full Name 1"
        adminFullName2="Tenant Full Name 2"
        adminFullName3="Tenant Full Name 3"
        adminFullName4="Tenant Full Name 4"
        adminFullName5="Tenant Full Name 5"
        adminFullName6="Tenant Full Name 6"
        adminFullName7="Tenant Full Name 7"
        adminFullName8="Tenant Full Name 8"
        adminFullName9="Tenant Full Name 9"
        property1AdminNameWidth="1068px"
        frameDivBorderRadius="0px 0px 0px 16px"
      />
      <Property1Status
        active="Active"
        disable="Disable"
        inactive="Inactive"
        active1="Active"
        inactive1="Inactive"
        active2="Active"
        active3="Active"
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
        statusBackgroundColor3="#d5f3b8"
        statusBorderRadius3="8px"
        statusWidth3="152px"
        activeColor1="#64b316"
        statusBackgroundColor4="#f5dbdb"
        statusBorderRadius4="8px"
        statusWidth4="152px"
        inactiveColor1="#fc5858"
        statusBorderRadius5="8px"
        statusBackgroundColor5="#d5f3b8"
        statusWidth5="152px"
        activeColor2="#64b316"
        statusBackgroundColor6="#d5f3b8"
        statusBorderRadius6="8px"
        statusWidth6="152px"
        activeColor3="#64b316"
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
        view3="/view.svg"
        edit4="/edit.svg"
        view4="/view.svg"
        edit5="/edit.svg"
        view5="/view.svg"
        edit6="/edit.svg"
        view6="/view.svg"
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
        viewIconOpacity="unset"
        viewIconOpacity1="unset"
        editIconOpacity1="0"
        frameDivBorderRadius="0px 0px 16px 0px"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
