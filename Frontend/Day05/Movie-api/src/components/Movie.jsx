import { useEffect, useState } from "react";
import { Wrap } from "./Wrap";

export function Movie() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4001/movie").then(async (res) => {
      const json = await res.json();

      setData(json.movieList);
    });
  }, []);

  return (
    <Wrap>
      {data.map((dt) => (
        <div>
          <img src={dt.image} width={"200px"} />
          <h3>title: {dt.title}</h3>
          <div>
            {dt.genre.map((d, index) => (
              <span key={index}>genre: {d} </span>
            ))}
          </div>

          <span>director: {dt.director}</span>

          <div>
            {dt.cast.map((d, index) => (
              <span key={index}>cast: {d} </span>
            ))}
          </div>
        </div>
      ))}
    </Wrap>
  );
}
