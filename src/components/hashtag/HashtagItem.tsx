// types
import { THashtagItemProps } from "../../lib/types";

export const HashtagItem = ({
  company,
  onSelectCompany,
}: THashtagItemProps) => {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
};
