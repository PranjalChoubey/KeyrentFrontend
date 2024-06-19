import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Draft = ({
  className = "",
  draft,
  property1DraftBackgroundColor,
  property1DraftWidth,
  property1DraftPosition,
  property1DraftTop,
  property1DraftLeft,
  property1DraftBorderRadius,
  draftColor,
  draftFontSize,
}) => {
  const property1DraftStyle = useMemo(() => {
    return {
      backgroundColor: property1DraftBackgroundColor,
      width: property1DraftWidth,
      position: property1DraftPosition,
      top: property1DraftTop,
      left: property1DraftLeft,
      borderRadius: property1DraftBorderRadius,
    };
  }, [
    property1DraftBackgroundColor,
    property1DraftWidth,
    property1DraftPosition,
    property1DraftTop,
    property1DraftLeft,
    property1DraftBorderRadius,
  ]);

  const draftStyle = useMemo(() => {
    return {
      color: draftColor,
      fontSize: draftFontSize,
    };
  }, [draftColor, draftFontSize]);

  return (
    <div
      className={`w-[152px] rounded-lg bg-lightblue flex flex-row items-center justify-center py-2 px-5 box-border text-center text-smi text-steelblue font-head5-2-23-med ${className}`}
      style={property1DraftStyle}
    >
      <div
        className="relative tracking-[0.25px] uppercase font-semibold"
        style={draftStyle}
      >
        {draft}
      </div>
    </div>
  );
};

Property1Draft.propTypes = {
  className: PropTypes.string,
  draft: PropTypes.string,

  /** Style props */
  property1DraftBackgroundColor: PropTypes.any,
  property1DraftWidth: PropTypes.any,
  property1DraftPosition: PropTypes.any,
  property1DraftTop: PropTypes.any,
  property1DraftLeft: PropTypes.any,
  property1DraftBorderRadius: PropTypes.any,
  draftColor: PropTypes.any,
  draftFontSize: PropTypes.any,
};

export default Property1Draft;
