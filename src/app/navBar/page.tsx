import React from "react";

function NavBar() {
  return (
    <div className="w-full text-[#4D869C] bg-[#eef7ff] py-2 border flex justify-center gap-40 items-center p-2 rounded-xl border-[#9E9E9E] shadow-md">
      <h1 className="text-4xl font-semibold">CITY VOICE</h1>
      <input
        className="w-[40%] bg-transparent border-2 border-[#1A1A1A] p-1 rounded-lg outline-none"
        type="search"
        placeholder="Search"
      />
    </div>
  );
}

export default NavBar;
