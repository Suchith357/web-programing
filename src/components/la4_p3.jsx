import { useState } from "react";

function La4P3() {
  const images = [
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1020/300/200"
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>

      <h2>Sai Suchith 24BCE0092</h2>

      <h3>Image Gallery</h3>

      {/* Large Preview */}
      <img
        src={selectedImage}
        alt="Preview"
        style={{ width: "400px", height: "250px", marginBottom: "20px" }}
      />

      {/* Thumbnails */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            style={{
              width: "100px",
              height: "70px",
              cursor: "pointer",
              border: selectedImage === img ? "3px solid blue" : "1px solid gray"
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default La4P3;