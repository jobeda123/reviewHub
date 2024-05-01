// stores
import { buttonLabels } from "../../resources/labels";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
// components
import { HashtagItem } from "./HashtagItem";

export default function HashtagList() {
  // stores
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);
  const clearFilter = useFeedbackItemsStore((state) => state.clearFilter);

  return (
    <ul className="hashtags">
      {companyList.length > 0 && (
        <button className="hashtags__btn-clear" onClick={() => clearFilter()}>
          {buttonLabels.clearFilter}
        </button>
      )}

      {companyList.map((company: string) => (
        <HashtagItem
          company={company}
          key={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
