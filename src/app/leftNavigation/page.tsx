import React from "react";
import Question from "./question";

function LeftNavigation() {
  return (
    <div className="h-screen border-[#9E9E9E] border flex flex-col bg-[#EEF7FF] text-[#000000] m-auto w-fit rounded-xl p-5 ">
      <div className="flex flex-col gap-5 h-[64%] overflow-y-auto">
        <h1 className="text-xl font-medium text-[#4D869C]">
          Most Asked Questions !
        </h1>
        <div className="flex flex-col gap-4 px-2">
          <Question
            name="John Doe"
            question="What is the capital of France?"
            upvotes={10}
            downvotes={2}
          />{" "}
          <Question
            name="John Doe"
            question="What is the capital of France?"
            upvotes={10}
            downvotes={2}
          />{" "}
          <Question
            name="John Doe"
            question="What is the capital of France?"
            upvotes={10}
            downvotes={2}
          />{" "}
          <Question
            name="John Doe"
            question="What is the capital of France?"
            upvotes={10}
            downvotes={2}
          />
        </div>
      </div>
    </div>
  );
}

export default LeftNavigation;
