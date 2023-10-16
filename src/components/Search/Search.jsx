import { useEffect, useState } from "react";
import axios from "axios";
import { Results } from "./Results";

export function Search() {
  const [searchParam, setSearchParam] = useState("");
  const [results, setResults] = useState([]);
  const [skip, setSkip] = useState(0);

  const limit = 12;
  const searchHandler = () => {
    // this URL will only work in production!
    // for production, you would need the full URL; you would also need CORS
    axios
      .get(`${process.env.REACT_APP_URL_BE}/api/guitars/searchByBrand?searchParam=${searchParam}&limit=12&skip=24`)
      .then((response) => {
        setResults(response.data);
      });
  };

  useEffect(() => {
    if (skip === 0) {
      return;
    }
    searchHandler();
  }, [skip]);

  const paginateLeftHandler = () => {
    if (skip !== 0) {
      setSkip(skip - limit);
    }
  };

  const paginateRightHandler = () => {
    setSkip(skip + limit);
  };

  return (
    <>
      <input
        onChange={(event) => setSearchParam(event.target.value)}
        type="text"
        id="search"
        name="search"
        defaultValue={searchParam}
      />
      <button onClick={searchHandler}>Search</button>

      <Results data={results} />

      <>
        {skip === 0 ? null : <button onClick={paginateLeftHandler}>⬅️</button>}
        {results.length < limit ? null : (
          <button onClick={paginateRightHandler}>➡️</button>
        )}
      </>
    </>
  );
}
