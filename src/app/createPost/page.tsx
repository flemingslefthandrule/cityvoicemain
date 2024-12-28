import Image from "next/image";
import React from "react";

function CreatePost() {
  return (
    <div className="w-[30vw] h-fit bg-[#EEF7FF] text-[#000000] border-[#9E9E9E] border rounded-xl px-5 py-3 shadow-xl">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full aspect-square w-10"
          src="https://via.placeholder.com/50"
          height={500}
          width={500}
          alt="profilePicture"
        />
        <input
          type="text"
          placeholder="Create a post"
          className="w-full border border-gray-300 rounded-full bg-[#D4DAE2] px-2 py-1 font-normal text-[0.8rem] placeholder:text-gray-400 focus:outline-none text-[#5f5f5f]"
        />
      </div>
      <div className="flex w-full  gap-2 mt-2 px-4">
        <div className="flex gap-8 mx-auto">
          <div className=" text-[#747171]  cursor-pointer">Polls</div>
          <div className=" text-[#747171] cursor-pointer ">Images</div>
          <div className=" text-[#747171] cursor-pointer">Videos</div>
        </div>
        <button className="px-4 py-1 bg-[#4D869C] font-semibold rounded-lg text-[#EEF7FF]  ">
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
