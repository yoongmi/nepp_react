import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "8umYFGydscoqsD7uhClz",
    "X-Naver-Client-Secret": "sRBEzFsrqP",
  },
});

export const getMovies = async (params) => {
  const result = await instance.get("/v1/search/movie.json", {
    params,
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await instance.get("/v1/search/book.json", {
    params,
  });

  return result.data;
};

export const getBookDetail = async (params) => {
  const result = await instance.get("/v1/search/book_adv.json", {
    params,
  });

  return result.data;
};
