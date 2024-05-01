// images
import logo from "../resources/images/logo.svg";

export default function Logo() {
  return (
    <a href="/" className="logo_img">
      <img src={logo} alt="logo" />
    </a>
  );
}
