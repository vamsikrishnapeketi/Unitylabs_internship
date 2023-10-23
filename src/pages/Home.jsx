import { useContext, useState } from "react";
import { Selitem } from "../context/Selitem";
import { Link } from "react-router-dom";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();

  const { setSelobj } = useContext(Selitem);

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

  const handleClick = async (itemId) => {
    try {
      const response = await fetch(
        `http://hn.algolia.com/api/v1/items/${itemId}`
      );
      const queryData = await response.json();
      setSelobj({
        title: queryData.title,
        points: queryData.points,
        children: queryData.children,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-screen ">
      <div className="flex justify-center">
        <div className="mt-8">
          <input
            className="border-black border-2 w-70 md:w-96"
            type="text"
            value={query}
            placeholder="Enter your query here"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <button
            type="submit"
            className="border-black border-2 mx-3 "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8 text-sm">
        <div className=" box-border p-4 border-4 border-black overflow-y-auto h-[400px] w-[300px] md:w-[470px] ">
          <ul className="list-disc">
            {data &&
              data.hits.map((item) => (
                <div
                  key={item.objectID}
                  className="text-black cursor-pointer bg-white"
                >
                  <li onClick={() => handleClick(item.objectID)}>
                    <Link to="/details">{item.title}</Link>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
