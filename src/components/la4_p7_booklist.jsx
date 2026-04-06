import BookCard from "./la4_p7_bookcard";

function BookList({ books }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      justifyContent: "center"
    }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;