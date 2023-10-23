import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      const queryData = await response.json();
      setData(queryData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 pt-20">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-4 w-full">
          <input
            type="text"
            value={query}
            placeholder="Enter your query here"
            onChange={(e) => setQuery(e.target.value)}
            className="p-4 py-2 border text-base rounded-lg outline-none w-full max-w-lg"
          />
          <button
            className="bg-blue-500 hover:bg-blue-400 p-2 px-4 rounded-lg text-base text-white"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex-1 mt-20">
        {!loading ? (
          data ? (
            <div className="w-full flex flex-col gap-2 text-lg font-medium">
              {data.hits
                .filter((item) => item.title && item.title !== "")
                .map((item) => (
                  <div
                    key={item.objectID}
                    className="text-black cursor-pointer hover:underline"
                  >
                    <Link to={`/details/${item.objectID}`}>{item.title}</Link>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex-col justify-center">
              <p className="text-6xl font-black text-black/10">No Results</p>
            </div>
          )
        ) : (
          <div className="flex-col justify-center">
            <p className="text-6xl font-black text-black/10">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};
