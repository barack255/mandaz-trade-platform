import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h3>{user.displayName || "Anonymous User"}</h3>
      <p>Email: {user.email}</p>
      {/* Display other user profile details here */}
    </div>
  );
};

export default Profile;
