import { useState } from "react";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [selectedItem, setSelecteditem] = useState();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      const queryData = await response.json();
      setData(queryData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (itemId) => {
    setSelecteditem(itemId);
    console.log(selectedItem);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-8">
          <input
            className="border-black border-2 w-96"
            type="text"
            value={query}
            placeholder="Enter your query here"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button
            type="submit"
            className="border-black border-2 mx-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-left mt-8 text-sm">
        <ul>
          {data &&
            data.hits.map((item) => (
              <div key={item.objectID}>
                <li onClick={() => handleClick(item.objectID)}>
                  {item.title} ({item.url})
                </li>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};
