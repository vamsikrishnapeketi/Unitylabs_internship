import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Postdetail = () => {
  const [data, setData] = useState(undefined);
  const { id } = useParams();

  async function fetchData(id) {
    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/items/${id}`);
      const queryData = await response.json();
      setData(queryData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  function parseHtml(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent;
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-6xl font-black text-black/10">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-10 gap-6">
      <p className="text-4xl font-black">Title: {data.title}</p>
      <p className="font-bold text-2xl text-black/70">Points: {data.points}</p>
      <p className="font-bold text-2xl text-black/70">Comments:</p>
      <ul className="list-disc ml-10 flex flex-col gap-4">
        {data.children.map((item) => (
          <li key={item.title} className="text-base leading-7">
            {parseHtml(item.text)}
          </li>
        ))}
      </ul>
    </div>
  );
};
