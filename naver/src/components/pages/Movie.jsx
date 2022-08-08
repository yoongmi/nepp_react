import { useEffect, useState } from "react";
import { getMovies } from "../../apis";
import Form from "../templates/Movie/Form";
import List from "../templates/Movie/List";

const Movie = () => {
  //   useEffect(() => {
  //     //IIFE : 즉시실행함수
  //     (async () => {
  //       const result = getMovies();
  //       console.log(result);
  //     })();
  //   }, []);

  const [items, setItems] = useState([]);
  const [params, setParams] = useState({ query: "", country: "all" });
  const { query, country } = params;

  useEffect(() => {
    refreshList();
  }, [params]);

  const refreshList = async () => {
    const params = { query };
    if (country !== "all") {
      params.country = country;
    }
    const result = await getMovies(params);
    setItems(result.items);
    console.log(result.items);
  };

  const handleChange = ({ name, value }) => {
    const newParams = { ...params, [name]: value };
    setParams(newParams);
  };

  return (
    <>
      <h1>영화 검색</h1>
      <Form data={params} onChange={handleChange} />
      <List data={items} />
    </>
  );
};

export default Movie;
