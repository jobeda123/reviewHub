import React, { useState } from "react";
// icons
import { Pencil1Icon } from "@radix-ui/react-icons";
// constants
import { MAX_CHARACTERS } from "../../lib/constants";
// types
import { TFeedbackFormProps } from "../../lib/types";
// labels
import { buttonLabels, feedBackLabels } from "../../resources/labels";
import { placeholders } from "../../resources/placeholders";

export default function FeedbackForm({ onAddToList }: TFeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // basic validation
    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 2000);
      return;
    }

    onAddToList(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder={placeholders.enterFeedback}
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        {feedBackLabels.enterFeedback}
        <Pencil1Icon />
      </label>

      <div>
        <p className="u-italic">
          {text.length}/{MAX_CHARACTERS}
        </p>
        <button>{buttonLabels.submit}</button>
      </div>
    </form>
  );
}
