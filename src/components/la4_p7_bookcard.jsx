function BookCard({ book }) {
  const info = book.volumeInfo;

  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      width: "200px"
    }}>
      <img
        src={info.imageLinks?.thumbnail}
        alt="book"
        style={{ width: "100%" }}
      />
      <h4>{info.title}</h4>
      <p>{info.authors?.[0]}</p>
      <p>{info.publisher}</p>
      <p>{info.publishedDate}</p>
    </div>
  );
}

export default BookCard;