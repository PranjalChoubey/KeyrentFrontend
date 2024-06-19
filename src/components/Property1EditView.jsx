import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1EditView = ({
  className = "",
  edit,
  view,
  edit1,
  view1,
  edit2,
  view2,
  edit3,
  view3,
  edit4,
  view4,
  edit5,
  view5,
  edit6,
  view6,
  edit7,
  view7,
  edit8,
  view8,
  showEditIcon,
  editIconVisible,
  editIconVisible1,
  editIconVisible2,
  editIconVisible3,
  editIconVisible4,
  editIconVisible5,
  editIconVisible6,
  editIconVisible7,
  property1EditViewWidth,
  editIconOpacity,
  viewIconOpacity,
  viewIconOpacity1,
  editIconOpacity1,
  frameDivBorderRadius,
  onFrameContainerClick,
}) => {
  const property1EditViewStyle = useMemo(() => {
    return {
      width: property1EditViewWidth,
    };
  }, [property1EditViewWidth]);

  const editIconStyle = useMemo(() => {
    return {
      opacity: editIconOpacity,
    };
  }, [editIconOpacity]);

  const viewIconStyle = useMemo(() => {
    return {
      opacity: viewIconOpacity,
    };
  }, [viewIconOpacity]);

  const viewIcon1Style = useMemo(() => {
    return {
      opacity: viewIconOpacity1,
    };
  }, [viewIconOpacity1]);

  const editIcon1Style = useMemo(() => {
    return {
      opacity: editIconOpacity1,
    };
  }, [editIconOpacity1]);

  const frameDiv9Style = useMemo(() => {
    return {
      borderRadius: frameDivBorderRadius,
    };
  }, [frameDivBorderRadius]);

  return (
    <div
      className={`w-[168px] flex flex-col items-center justify-center ${className}`}
      style={property1EditViewStyle}
    >
      <div
        className="self-stretch bg-white flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]"
        onClick={onFrameContainerClick}
      >
        {showEditIcon && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view}
        />
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit1}
            style={editIconStyle}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view1}
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible1 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit2}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view2}
        />
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible2 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit3}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view3}
          style={viewIconStyle}
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible3 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit4}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view4}
        />
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible4 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit5}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view5}
        />
      </div>
      <div className="self-stretch bg-white flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible5 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit6}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view6}
          style={viewIcon1Style}
        />
      </div>
      <div className="self-stretch bg-row-color flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]">
        {editIconVisible6 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit7}
            style={editIcon1Style}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view7}
        />
      </div>
      <div
        className="self-stretch rounded-t-none rounded-br-2xl rounded-bl-none bg-white flex flex-row items-center justify-center py-[23px] px-5 gap-[36px]"
        style={frameDiv9Style}
      >
        {editIconVisible7 && (
          <img
            className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
            alt=""
            src={edit8}
          />
        )}
        <img
          className="w-[26px] relative h-[26px] overflow-hidden shrink-0"
          alt=""
          src={view8}
        />
      </div>
    </div>
  );
};

Property1EditView.propTypes = {
  className: PropTypes.string,
  edit: PropTypes.string,
  view: PropTypes.string,
  edit1: PropTypes.string,
  view1: PropTypes.string,
  edit2: PropTypes.string,
  view2: PropTypes.string,
  edit3: PropTypes.string,
  view3: PropTypes.string,
  edit4: PropTypes.string,
  view4: PropTypes.string,
  edit5: PropTypes.string,
  view5: PropTypes.string,
  edit6: PropTypes.string,
  view6: PropTypes.string,
  edit7: PropTypes.string,
  view7: PropTypes.string,
  edit8: PropTypes.string,
  view8: PropTypes.string,
  showEditIcon: PropTypes.bool,
  editIconVisible: PropTypes.bool,
  editIconVisible1: PropTypes.bool,
  editIconVisible2: PropTypes.bool,
  editIconVisible3: PropTypes.bool,
  editIconVisible4: PropTypes.bool,
  editIconVisible5: PropTypes.bool,
  editIconVisible6: PropTypes.bool,
  editIconVisible7: PropTypes.bool,

  /** Style props */
  property1EditViewWidth: PropTypes.any,
  editIconOpacity: PropTypes.any,
  viewIconOpacity: PropTypes.any,
  viewIconOpacity1: PropTypes.any,
  editIconOpacity1: PropTypes.any,
  frameDivBorderRadius: PropTypes.any,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default Property1EditView;
