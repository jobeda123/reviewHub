import { useState } from "react";
// icons
import { TriangleUpIcon } from "@radix-ui/react-icons";
// types
import { FeedbackItemProps } from "../../lib/types";

export default function FeedbackItem({
  feedbackItem: { id, upVoteCount, company, text, daysAgo, created },
}: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handlerUpvote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpvoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handlerUpvote}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{company?.split("")[0]}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}
