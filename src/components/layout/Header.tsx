// stores
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// components
import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  // store
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header className="header">
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
