import React from "react";
interface QuestionProps {
  name: string;
  question: string;
  upvotes: number;
  downvotes: number;
}

function Question({ name, question, upvotes, downvotes }: QuestionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-medium font-bold">{name}</h3>
      <h4 className="text-sm font-medium pl-2">{question}</h4>
      <div className="flex justify-between text-xs font-light">
        <h6>{upvotes}upvotes</h6>
        <h6>{downvotes}downvotes</h6>
      </div>
    </div>
  );
}

export default Question;
