// titles
import { titles } from "../resources/labels";

export default function PageHeading() {
  return <h1 className="page--heading" dangerouslySetInnerHTML={{ __html: titles.heading }} />;
}
