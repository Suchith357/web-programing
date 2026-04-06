import { useState } from "react";
import Header from "./la4_p7_header";
import Search from "./la4_p7_search";
import BookList from "./la4_p7_booklist";
import { searchBooks } from "../utils/bookApi";

function La4P7() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default La4P7;