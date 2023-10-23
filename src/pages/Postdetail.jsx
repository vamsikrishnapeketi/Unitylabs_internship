import { useContext } from "react";
import { Selitem } from "../context/Selitem";

export const Postdetail = () => {
  const { selObj } = useContext(Selitem);

  function parseHtml(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent;
  }

  return (
    <div className="flex flex-col m-10">
      <p className="font-bold">Title: {selObj.title}</p>
      <p className="font-bold">Points: {selObj.points}</p>
      <p className="font-bold">Comments:</p>
      <ul className="list-disc">
        {selObj.children.map((item) => (
          <li key={item.title}>{parseHtml(item.text)}</li>
        ))}
      </ul>
    </div>
  );
};
