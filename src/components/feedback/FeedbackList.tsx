import { useEffect } from "react";
// components
import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
// types
import { TFeedbackItem } from "../../lib/types";
// stores
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <ol className="feedback__list">
      {isLoading && <Spinner />}

      {filteredFeedbackItems.length > 0 &&
        filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        ))}
    </ol>
  );
}
