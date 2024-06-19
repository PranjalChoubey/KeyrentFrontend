import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Default = ({
  className = "",
  addNewPlan,
  property1DefaultWidth,
  property1DefaultPosition,
  onEditIconClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      position: property1DefaultPosition,
    };
  }, [property1DefaultWidth, property1DefaultPosition]);

  return (
    <div
      className={`w-[179px] h-12 text-left text-base text-primary font-head5-2-23-med ${className}`}
      style={property1DefaultStyle}
      onClick={onEditIconClick}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_2px_2px_rgba(29,_94,_109,_0.05)] rounded-2xl bg-white flex flex-row items-center justify-center py-3 px-4 box-border gap-[11px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/add.svg"
        />
        <div className="relative leading-[24px] font-semibold">
          {addNewPlan}
        </div>
      </div>
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,
  addNewPlan: PropTypes.string,

  /** Style props */
  property1DefaultWidth: PropTypes.any,
  property1DefaultPosition: PropTypes.any,

  /** Action props */
  onEditIconClick: PropTypes.func,
};

export default Property1Default;
