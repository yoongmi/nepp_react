import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../../apis";

const BookDetail = () => {
  const { isbn } = useParams();
  const [book, setBook] = useState({});
  console.log(isbn);

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    const result = await getBookDetail({ d_isbn: isbn });
    setBook(result.items[0]);
  };

  return (
    <>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <img src={book.image} alt="" style={{ width: "50%" }} />
      <p>{book.description}</p>
    </>
  );
};
export default BookDetail;
