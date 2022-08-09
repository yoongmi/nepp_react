import axios from "axios";

export const getMovies = async (params) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "8umYFGydscoqsD7uhClz",
      "X-Naver-Client-Secret": "sRBEzFsrqP",
    },
    params,
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await axios.get("/v1/search/book.json", {
    headers: {
      "X-Naver-Client-Id": "8umYFGydscoqsD7uhClz",
      "X-Naver-Client-Secret": "sRBEzFsrqP",
    },
    params,
  });

  return result.data;
};
