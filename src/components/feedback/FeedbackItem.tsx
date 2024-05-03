import { useState } from "react";
// icons
import { TriangleUpIcon } from "@radix-ui/react-icons";
// types
import { FeedbackItemProps } from "../../lib/types";
// labels
import { feedBackLabels } from "../../resources/labels";

export default function FeedbackItem({
  feedbackItem: { company, upvoteCount, text, daysAgo, badgeLetter },
}: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [currentUpVote, setCurrentUpVoteCount] = useState(upvoteCount);

  const handlerUpVote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setCurrentUpVoteCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback__item ${open ? "feedback__item--expand" : ""}`}
    >
      <button className="feedback__item__btn" onClick={handlerUpVote}>
        <TriangleUpIcon className="feedback__item__btn--icon" />
        <span className="feedback__item__btn--label">{currentUpVote}</span>
      </button>

      <div className="feedback__item__badge">
        <p className="feedback__item__badge--label">{badgeLetter}</p>
      </div>

      <div className="feedback__item__content">
        <p className="feedback__item__content--company">{company}</p>
        <p className="feedback__item__content--desc">{text}</p>

        <p className="feedback__item__date feedback__date--show">
          {daysAgo === 0 ? feedBackLabels.new : `${daysAgo}d`}
        </p>
      </div>

      <p className="feedback__item__date feedback__date--hide">
        {daysAgo === 0 ? feedBackLabels.new : `${daysAgo}d`}
      </p>
    </li>
  );
}
