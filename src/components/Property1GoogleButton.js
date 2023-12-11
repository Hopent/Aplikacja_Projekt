import { useMemo } from "react";
import "./Property1GoogleButton.css";

const Property1GoogleButton = ({
  dimensionCode,
  property1GoogleButtonPosition,
  groupDivWidth,
  groupDivRight,
  groupDivLeft,
  googleLeft,
  googleFontFamily,
  iconWidth,
  iconRight,
}) => {
  const property1GoogleButtonStyle = useMemo(() => {
    return {
      position: property1GoogleButtonPosition,
    };
  }, [property1GoogleButtonPosition]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      right: groupDivRight,
      left: groupDivLeft,
    };
  }, [groupDivWidth, groupDivRight, groupDivLeft]);

  const googleStyle = useMemo(() => {
    return {
      left: googleLeft,
      fontFamily: googleFontFamily,
    };
  }, [googleLeft, googleFontFamily]);

  const iconStyle = useMemo(() => {
    return {
      width: iconWidth,
      right: iconRight,
    };
  }, [iconWidth, iconRight]);

  return (
    <div className="property-1google-button" style={property1GoogleButtonStyle}>
      <div className="property-1google-button-inner">
        <div className="group-child" />
      </div>
      <div className="google-parent" style={groupDivStyle}>
        <div className="google" style={googleStyle}>
          Google
        </div>
        <img className="icon" alt="" src={dimensionCode} style={iconStyle} />
      </div>
    </div>
  );
};

export default Property1GoogleButton;
