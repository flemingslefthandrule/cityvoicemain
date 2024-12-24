import Image from "next/image";
import React from "react";
import { CommentProps } from "./types";

function Comment({
  userProfile,
  username,
  timeStamp,
  comment,
  likes,
  dislikes,
}: CommentProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full aspect-square w-6"
          src={userProfile ? userProfile : "/profile.png"}
          height={500}
          width={500}
          alt="profilePicture"
        />
        <h4 className="text-[0.75rem] font-medium"> {username}</h4>
        <h6 className="text-[0.5rem] justify-end flex ml-3 flex-col ">
          {timeStamp}
        </h6>
      </div>
      <p className="text-xs font-medium">{comment}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-xs">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 7.875H2.625V3L5.25 0.375L5.71875 0.84375C5.7625 0.8875 5.79844 0.946875 5.82656 1.02187C5.85469 1.09687 5.86875 1.16875 5.86875 1.2375V1.36875L5.45625 3H7.875C8.075 3 8.25 3.075 8.4 3.225C8.55 3.375 8.625 3.55 8.625 3.75V4.5C8.625 4.54375 8.61875 4.59062 8.60625 4.64062C8.59375 4.69062 8.58125 4.7375 8.56875 4.78125L7.44375 7.425C7.3875 7.55 7.29375 7.65625 7.1625 7.74375C7.03125 7.83125 6.89375 7.875 6.75 7.875ZM3.375 7.125H6.75L7.875 4.5V3.75H4.5L5.00625 1.6875L3.375 3.31875V7.125ZM2.625 3V3.75H1.5V7.125H2.625V7.875H0.75V3H2.625Z"
              fill="#445154"
            />
          </svg>
          <p>{likes}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 1.35001H6.525V5.85001L3.825 8.55001L3.525 8.34376C3.41875 8.26876 3.3375 8.17344 3.28125 8.05782C3.225 7.94219 3.20937 7.82188 3.23437 7.69688L3.24375 7.65001L3.6 5.85001H1.125C0.937497 5.85001 0.778122 5.78438 0.646872 5.65313C0.515622 5.52188 0.449997 5.36251 0.449997 5.17501V4.64063C0.449997 4.59063 0.454684 4.54532 0.464059 4.50469C0.473434 4.46407 0.487497 4.42188 0.506247 4.37813L1.62187 1.76251C1.67187 1.63751 1.75468 1.53751 1.87031 1.46251C1.98593 1.38751 2.1125 1.35001 2.25 1.35001ZM5.85 2.02501H2.25L1.125 4.64063V5.17501H4.425L3.96562 7.45313L5.85 5.56876V2.02501ZM6.525 5.85001V5.17501H7.875V2.02501H6.525V1.35001H8.55V5.85001H6.525Z"
              fill="#445154"
            />
          </svg>
          <p>{dislikes}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 1.35001H6.525V5.85001L3.825 8.55001L3.525 8.34376C3.41875 8.26876 3.3375 8.17344 3.28125 8.05782C3.225 7.94219 3.20937 7.82188 3.23437 7.69688L3.24375 7.65001L3.6 5.85001H1.125C0.937497 5.85001 0.778122 5.78438 0.646872 5.65313C0.515622 5.52188 0.449997 5.36251 0.449997 5.17501V4.64063C0.449997 4.59063 0.454684 4.54532 0.464059 4.50469C0.473434 4.46407 0.487497 4.42188 0.506247 4.37813L1.62187 1.76251C1.67187 1.63751 1.75468 1.53751 1.87031 1.46251C1.98593 1.38751 2.1125 1.35001 2.25 1.35001ZM5.85 2.02501H2.25L1.125 4.64063V5.17501H4.425L3.96562 7.45313L5.85 5.56876V2.02501ZM6.525 5.85001V5.17501H7.875V2.02501H6.525V1.35001H8.55V5.85001H6.525Z"
              fill="#445154"
            />
          </svg>
          <p>Reply</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
