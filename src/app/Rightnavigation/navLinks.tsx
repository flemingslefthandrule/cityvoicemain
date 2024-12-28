import React from "react";

interface NavlinksProps {
  name: string;
}

function NavLinks({ name }: NavlinksProps) {
  return (
    <div className="w-full text-center hover:text-[#7AB2B2] cursor-pointer">
      {name}
    </div>
  );
}

export default NavLinks;
