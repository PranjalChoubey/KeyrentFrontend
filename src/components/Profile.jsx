import { useMemo } from "react";
import PropTypes from "prop-types";

const Profile = ({
  className = "",
  profileIconOverflow,
  profileIconPosition,
  profileIconTop,
  profileIconLeft,
}) => {
  const profileIconStyle = useMemo(() => {
    return {
      overflow: profileIconOverflow,
      position: profileIconPosition,
      top: profileIconTop,
      left: profileIconLeft,
    };
  }, [
    profileIconOverflow,
    profileIconPosition,
    profileIconTop,
    profileIconLeft,
  ]);

  return (
    <img
      className={`w-[94px] max-w-full overflow-hidden h-14 ${className}`}
      alt=""
      src="/profile.svg"
      style={profileIconStyle}
    />
  );
};

Profile.propTypes = {
  className: PropTypes.string,

  /** Style props */
  profileIconOverflow: PropTypes.any,
  profileIconPosition: PropTypes.any,
  profileIconTop: PropTypes.any,
  profileIconLeft: PropTypes.any,
};

export default Profile;
