import React, { useState } from "react";
// icons
import { Pencil1Icon } from "@radix-ui/react-icons";
// constants
import { MAX_CHARACTERS } from "../../lib/constants";
// types
import { TFeedbackFormProps } from "../../lib/types";
// stores
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// labels
import { buttonLabels, feedBackLabels } from "../../resources/labels";
// placeholders
import { placeholders } from "../../resources/placeholders";
// messages
import { messages } from "../../resources/messages";

export default function FeedbackForm({ onAddToList }: TFeedbackFormProps) {
  // stores
  const updateMessage = useFeedbackItemsStore((state) => state.updateMessage);

  // states
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  // handlers
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text === "") {
      updateMessage(messages.emptyReview, true);
      return;
    } else if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      updateMessage(messages.companyNameMissing, true);
      return;
    }

    onAddToList(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form__status--valid" : ""} ${
        showInvalidIndicator ? "form__status--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        className="form__textarea"
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder={placeholders.enterFeedback}
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea" className="form__label">
        {feedBackLabels.enterFeedback}
        <Pencil1Icon />
      </label>

      <div className="form__footer">
        <p className="form__desc">
          {text.length}/{MAX_CHARACTERS}
        </p>
        <button className="form__btn">{buttonLabels.submit}</button>
      </div>
    </form>
  );
}
