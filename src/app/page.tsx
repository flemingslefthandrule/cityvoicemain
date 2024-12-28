import React from "react";
import Post from "./post/page";
import RightNavigation from "./Rightnavigation/page";
import LeftNavigation from "./leftNavigation/page";
import CreatePost from "./createPost/page";
export default function Home() {
  return (
    <div className="w-screen bg-[#F0F2F5]">
      <div className="w-fit flex mx-auto gap-1 ">
        <RightNavigation />{" "}
        <div className="flex flex-col gap-1">
          <CreatePost />
          <Post
            src="https://via.placeholder.com/50"
            username="John Doe"
            userLink="/user/john-doe"
            postTitle="This is a placeholder title for a post"
            postImage="https://via.placeholder.com/600x300"
            upvotes={15}
            downvotes={5}
            comments={[
              {
                userProfile: "https://via.placeholder.com/50",
                username: "User One",
                timeStamp: "2024-12-24 10:00",
                comment: "Great post! Thanks for sharing.",
                likes: 5,
                dislikes: 0,
              },
              {
                userProfile: "https://via.placeholder.com/50",
                username: "User Two",
                timeStamp: "2024-12-24 10:30",
                comment: "Interesting perspective, I enjoyed reading this.",
                likes: 8,
                dislikes: 1,
              },
              {
                userProfile: "https://via.placeholder.com/50",
                username: "User Three",
                timeStamp: "2024-12-24 11:00",
                comment: "Can you elaborate more on the second point?",
                likes: 2,
                dislikes: 0,
              },
            ]}
            postLink="/post/placeholder"
            location="Placeholder City, Country"
            locationLink="/location/placeholder"
          />
        </div>
        <LeftNavigation />
      </div>
    </div>
  );
}
