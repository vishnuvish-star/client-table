import React from "react";

const UserProfile = ({ profileInfo }) => {
  // console.log(profileInfo);
  return (
    <>
      <div className="flex items-center mt-5 p-4">
        <h2 className="p-2">First Name</h2>
        <ul className="flex justify-center items-center m-4 p-2 gap-3">
          <li className="">Email</li>
          <li>Number</li>
          <li>Role</li>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
