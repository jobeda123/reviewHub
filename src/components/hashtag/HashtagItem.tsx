// types
import { THashtagItemProps } from "../../lib/types";

export const HashtagItem = ({
  company,
  onSelectCompany,
}: THashtagItemProps) => {
  return (
    <li className="hashtags__item">
      <button className="hashtags__item--btn" onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
};
