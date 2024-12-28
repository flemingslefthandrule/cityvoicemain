import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileProps } from "./types";

function Profile({
  src,
  username,
  userLink,
  location,
  locationLink,
}: ProfileProps) {
  return (
    <>
      {" "}
      <div className="flex w-full">
        <Image
          className="aspect-square rounded-full w-7 h-7 cursor-pointer "
          src={src ? src : "https://via.placeholder.com/50"}
          height={500}
          width={500}
          alt="profilePicture"
        />
        <div className="flex flex-col pl-2">
          <Link href={userLink}>
            <h4 className="text-[0.7rem] font-bold"> {username}</h4>
          </Link>
          <Link href={locationLink}>
            <h4 className="text-[0.55rem] font-normal text-[rgba(0,0,0,0.5)]">
              {location}
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profile;
