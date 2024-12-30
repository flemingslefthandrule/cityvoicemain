"use client";
import Image from "next/image";
import React, { useState } from "react";
import Comment from "./Comment";
import { PostProps } from "./types";
import Profile from "./profile";

function Post({
  src = "https://via.placeholder.com/50",
  username = "Unknown",
  userLink = "#",
  postTitle = "Untitled",
  postImage,
  upvotes = 0,
  downvotes = 0,
  comments = [],
  postLink = "#",
  location = "Unknown",
  locationLink = "#",
}: PostProps) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2 justify-center w-[30vw] p-4 mx-auto bg-[#EEF7FF] text-[#000000] aspect-video rounded-xl border-[#9E9E9E] border shadow-xl">
      <Profile
        src={src}
        username={username}
        userLink={userLink}
        location={location}
        locationLink={locationLink}
      />
      <h1 className="w-full flex justify-start text-sm">{postTitle}</h1>
      {postImage && (
        <Image
          className="aspect-video rounded-2xl h-32"
          src={postImage ? postImage : "https://via.placeholder.com/50"}
          height={500}
          width={500}
          alt="postImage"
        />
      )}
      <div className="flex items-center justify-around border-y border-gray-300 py-1 w-full text-[0.6rem] font-sans">
        <div
          onClick={() => {
            alert("no of upvotes: " + upvotes);
          }}
          className="flex items-center cursor-pointer gap-2  "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33329 13.3333V5.21666L3.59996 8.94999L2.66663 7.99999L7.99996 2.66666L13.3333 7.99999L12.4 8.94999L8.66663 5.21666V13.3333H7.33329Z"
              fill="#44E341"
            />
          </svg>

          <span className="text-[#44E341] ">Upvote</span>
        </div>
        <div
          onClick={() => {
            alert("no of upvotes: " + downvotes);
          }}
          className="flex items-center cursor-pointer gap-2 "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33329 2.66666V10.7833L3.59996 7.04999L2.66663 7.99999L7.99996 13.3333L13.3333 7.99999L12.4 7.04999L8.66663 10.7833V2.66666H7.33329Z"
              fill="#E34141"
            />
          </svg>
          <span className="text-[#E34141]">Downvote</span>
        </div>
        <div className="flex items-center cursor-pointer gap-2 ">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.46665 7.73334H9.86665V6.66668H3.46665V7.73334ZM3.46665 6.13334H9.86665V5.06668H3.46665V6.13334ZM3.46665 4.53334H9.86665V3.46668H3.46665V4.53334ZM12 12L9.86665 9.86668H2.39998C2.10665 9.86668 1.85554 9.76223 1.64665 9.55334C1.43776 9.34445 1.33331 9.09334 1.33331 8.80001V2.40001C1.33331 2.10668 1.43776 1.85557 1.64665 1.64668C1.85554 1.43779 2.10665 1.33334 2.39998 1.33334H10.9333C11.2266 1.33334 11.4778 1.43779 11.6866 1.64668C11.8955 1.85557 12 2.10668 12 2.40001V12ZM2.39998 8.80001H10.32L10.9333 9.40001V2.40001H2.39998V8.80001Z"
              fill="black"
            />
          </svg>

          <span
            onClick={() => {
              setShowComments(!showComments);
            }}
            className="text-[#000]"
          >
            Comments
          </span>
        </div>
        <div
          onClick={() => {
            alert(`this is the link of the post : ${postLink}`);
          }}
          className="flex items-center cursor-pointer gap-2"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 14.6667C10.7778 14.6667 10.3055 14.4722 9.91665 14.0833C9.52776 13.6945 9.33331 13.2222 9.33331 12.6667C9.33331 12.6 9.34998 12.4445 9.38331 12.2L4.69998 9.46668C4.5222 9.63334 4.31665 9.7639 4.08331 9.85834C3.84998 9.95279 3.59998 10 3.33331 10C2.77776 10 2.30554 9.80556 1.91665 9.41668C1.52776 9.02779 1.33331 8.55557 1.33331 8.00001C1.33331 7.44445 1.52776 6.97223 1.91665 6.58334C2.30554 6.19445 2.77776 6.00001 3.33331 6.00001C3.59998 6.00001 3.84998 6.04723 4.08331 6.14168C4.31665 6.23612 4.5222 6.36668 4.69998 6.53334L9.38331 3.80001C9.36109 3.72223 9.3472 3.64723 9.34165 3.57501C9.33609 3.50279 9.33331 3.42223 9.33331 3.33334C9.33331 2.77779 9.52776 2.30557 9.91665 1.91668C10.3055 1.52779 10.7778 1.33334 11.3333 1.33334C11.8889 1.33334 12.3611 1.52779 12.75 1.91668C13.1389 2.30557 13.3333 2.77779 13.3333 3.33334C13.3333 3.8889 13.1389 4.36112 12.75 4.75001C12.3611 5.1389 11.8889 5.33334 11.3333 5.33334C11.0666 5.33334 10.8166 5.28612 10.5833 5.19168C10.35 5.09723 10.1444 4.96668 9.96665 4.80001L5.28331 7.53334C5.30554 7.61112 5.31942 7.68612 5.32498 7.75834C5.33054 7.83057 5.33331 7.91112 5.33331 8.00001C5.33331 8.0889 5.33054 8.16945 5.32498 8.24168C5.31942 8.3139 5.30554 8.3889 5.28331 8.46668L9.96665 11.2C10.1444 11.0333 10.35 10.9028 10.5833 10.8083C10.8166 10.7139 11.0666 10.6667 11.3333 10.6667C11.8889 10.6667 12.3611 10.8611 12.75 11.25C13.1389 11.6389 13.3333 12.1111 13.3333 12.6667C13.3333 13.2222 13.1389 13.6945 12.75 14.0833C12.3611 14.4722 11.8889 14.6667 11.3333 14.6667ZM11.3333 13.3333C11.5222 13.3333 11.6805 13.2695 11.8083 13.1417C11.9361 13.0139 12 12.8556 12 12.6667C12 12.4778 11.9361 12.3195 11.8083 12.1917C11.6805 12.0639 11.5222 12 11.3333 12C11.1444 12 10.9861 12.0639 10.8583 12.1917C10.7305 12.3195 10.6666 12.4778 10.6666 12.6667C10.6666 12.8556 10.7305 13.0139 10.8583 13.1417C10.9861 13.2695 11.1444 13.3333 11.3333 13.3333ZM3.33331 8.66668C3.5222 8.66668 3.68054 8.60279 3.80831 8.47501C3.93609 8.34723 3.99998 8.1889 3.99998 8.00001C3.99998 7.81112 3.93609 7.65279 3.80831 7.52501C3.68054 7.39723 3.5222 7.33334 3.33331 7.33334C3.14442 7.33334 2.98609 7.39723 2.85831 7.52501C2.73054 7.65279 2.66665 7.81112 2.66665 8.00001C2.66665 8.1889 2.73054 8.34723 2.85831 8.47501C2.98609 8.60279 3.14442 8.66668 3.33331 8.66668ZM11.3333 4.00001C11.5222 4.00001 11.6805 3.93612 11.8083 3.80834C11.9361 3.68057 12 3.52223 12 3.33334C12 3.14445 11.9361 2.98612 11.8083 2.85834C11.6805 2.73057 11.5222 2.66668 11.3333 2.66668C11.1444 2.66668 10.9861 2.73057 10.8583 2.85834C10.7305 2.98612 10.6666 3.14445 10.6666 3.33334C10.6666 3.52223 10.7305 3.68057 10.8583 3.80834C10.9861 3.93612 11.1444 4.00001 11.3333 4.00001Z"
              fill="black"
            />
          </svg>
          <span className="text-[#000]">Share</span>
        </div>
      </div>
      <div className="flex w-full gap-1 items-center">
        <Image
          className="aspect-square rounded-full w-6 h-6"
          src={src ? src : "https://via.placeholder.com/50"}
          height={500}
          width={500}
          alt="profilePicture"
        />
        <input
          type="text"
          placeholder="Add a comment"
          className="w-full  border border-gray-300 rounded-full bg-transparent px-2 py-1 font-normal  text-[0.8rem] placeholder:text-gray-400 focus:outline-none text-[#5f5f5f]"
        />
        <svg
          className="cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 20V4L22 12L3 20ZM5 17L16.85 12L5 7V10.5L11 12L5 13.5V17Z"
            fill="#4D869C"
          />
        </svg>
      </div>
      <div className="flex items-center justify-around border-t border-gray-300 py-1  w-full text-sm font-sans"></div>
      {showComments ? (
        <>
          <span
            onClick={() => {
              setShowComments(false);
            }}
            className="w-full justify-center flex  text-[0.6rem] text-gray-400 cursor-pointer"
          >
            Hide Comments
          </span>
          <div className="flex flex-col gap-2 w-full px-4 overflow-y-auto h-[200px]">
            {comments.map((comment, index) => (
              <Comment
                key={index}
                userProfile={comment.userProfile}
                username={comment.username}
                timeStamp={comment.timeStamp}
                comment={comment.comment}
                likes={comment.likes}
                dislikes={comment.dislikes}
              />
            ))}
          </div>
        </>
      ) : (
        <div
          className="text-[0.6rem]  rounded-lg w-full justify-center flex text-gray-400 cursor-pointer"
          onClick={() => {
            setShowComments(true);
          }}
        >
          Show {comments?.length} Comments
        </div>
      )}
    </div>
  );
}

export default Post;
