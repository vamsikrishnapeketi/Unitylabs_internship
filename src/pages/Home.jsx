import { useState } from "react";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();

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
      <div className="flex justify-center mt-8">
        <div className="box-border h-[400px] w-[470px] p-4 border-4 border-black text-ellipsis overflow-scroll">
          {data && JSON.stringify(data)}
        </div>
      </div>
    </div>
  );
};
