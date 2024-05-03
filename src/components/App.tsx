import { useEffect } from "react";
// components
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Message from "./Message";
// store
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );
  const closeMessagePopup = useFeedbackItemsStore((state) => state.closeMessagePopup)
  const message = useFeedbackItemsStore((state) => state.message);
  const messageType = useFeedbackItemsStore((state) => state.messageType);

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      {message && (
        <Message message={message} type={messageType} onClose={closeMessagePopup} />
      )}
      <Footer />
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
