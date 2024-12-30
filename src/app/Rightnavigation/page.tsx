import React from "react";
import NavLinks from "./navLinks";
import Profile from "../postComponent/profile";

function Navigation() {
  return (
    <div className="h-screen border-[#9E9E9E] border flex flex-col bg-[#EEF7FF] text-[#000000] m-auto w-[18vw] rounded-xl p-5  shadow-xl">
      <div className="flex flex-col text-lg h-[50%] w-full  font-bold gap-8  ">
        <NavLinks name="Home" />
        <NavLinks name="Local Feed" />
        <NavLinks name="Global Feed" />
        <NavLinks name="Settings" />
        <NavLinks name="Profile" />
      </div>
      <div className="flex flex-col gap-5 text-sm h-[30%] ">
        <h1 className="text-xl font-medium text-[#4D869C]">My Following</h1>
        <Profile
          src="https://via.placeholder.com/150" // Placeholder image URL
          username="Placeholder Username" // Placeholder username
          userLink="#placeholder-user" // Placeholder link
          location="Placeholder Location" // Placeholder location
          locationLink="#placeholder-location" // Placeholder location link
        />{" "}
        <Profile
          src="https://via.placeholder.com/150" // Placeholder image URL
          username="Placeholder Username" // Placeholder username
          userLink="#placeholder-user" // Placeholder link
          location="Placeholder Location" // Placeholder location
          locationLink="#placeholder-location" // Placeholder location link
        />{" "}
        <Profile
          src="https://via.placeholder.com/150" // Placeholder image URL
          username="Placeholder Username" // Placeholder username
          userLink="#placeholder-user" // Placeholder link
          location="Placeholder Location" // Placeholder location
          locationLink="#placeholder-location" // Placeholder location link
        />{" "}
        <Profile
          src="https://via.placeholder.com/150" // Placeholder image URL
          username="Placeholder Username" // Placeholder username
          userLink="#placeholder-user" // Placeholder link
          location="Placeholder Location" // Placeholder location
          locationLink="#placeholder-location" // Placeholder location link
        />
      </div>
    </div>
  );
}

export default Navigation;
