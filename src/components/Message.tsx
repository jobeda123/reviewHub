// icons
import { CrossCircledIcon } from "@radix-ui/react-icons";
// types
import { TMessage } from "../lib/types";

export default function Message({ message, type, onClose }: TMessage) {
  return (
    <div className={`message_container message_container--${type}`}>
      <div className="message_wrapper">
        <p className="message_text">{message}</p>

        <CrossCircledIcon className="message__btn-close" onClick={() => onClose()} />
      </div>
    </div>
  );
}
