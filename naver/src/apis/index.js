import axios from "axios";

export const getMovies = async () => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "8umYFGydscoqsD7uhClz",
      "X-Naver-Client-Secret": "sRBEzFsrqP",
    },
    params: { query: "명탐정코난 극장판" },
  });

  return result.data;
};
