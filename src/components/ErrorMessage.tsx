// types
import { TErrorMessage } from "../lib/types";

export default function ErrorMessage({ message }: TErrorMessage) {
  return <div>{message}</div>;
}
