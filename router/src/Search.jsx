import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams(); // 👈 use search params

  const name = searchParams.get("name");
  const age = searchParams.get("age");

  return (
    <div>
      <h1>🔍 Search Page</h1>
      <p>Name: <b>{name}</b></p>
      <p>Age: <b>{age}</b></p>
    </div>
  );
}

export default Search;
