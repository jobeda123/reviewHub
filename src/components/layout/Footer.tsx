// labels
import { footerLabels } from "../../resources/labels";

export default function Footer() {
  return (
    <footer className="footer">
      <small>
        <p>&copy; {footerLabels.copyRight}</p>
      </small>
    </footer>
  );
}
