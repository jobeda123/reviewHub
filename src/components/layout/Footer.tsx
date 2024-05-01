// labels
import { footerLabels } from "../../resources/labels";
// functions
import { getCurrentYear } from "../../utils/functions";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__label">
        {footerLabels.copyRight} &copy; {getCurrentYear()}
      </p>
    </footer>
  );
}
