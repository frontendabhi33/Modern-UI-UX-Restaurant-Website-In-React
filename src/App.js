import { useState } from "react";
import "./App.css";

function App() {
  const [category, setCategory] = useState("all");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewCategory, setPreviewCategory] = useState("");

  const filterImages = (category) => {
    setCategory(category);
  };

  const openPreview = (image, category) => {
    setPreviewImage(image);
    setPreviewCategory(category);
    setPreviewOpen(true);
  };

  const imageItems = [
    { category: "bag", src: "/Images/bag-1.jpg" },
    { category: "camera", src: "/Images/camera-1.jpg" },
    { category: "headphone", src: "/Images/headphone-1.jpg" },
    { category: "camera", src: "/Images/camera-2.jpg" },
    { category: "headphone", src: "/Images/headphone-2.jpg" },
    { category: "shoe", src: "/Images/shoe-1.jpg" },
    { category: "watch", src: "/Images/watch-1.jpg" },
    { category: "shoe", src: "/Images/shoe-2.jpg" },
  ];

  return (
    <>
      <div className="wrapper">
        <nav>
          <div className="items">
            <span
              className={category === "all" ? "active" : ""}
              onClick={() => filterImages("all")}
            >
              All
            </span>
            <span
              className={category === "bag" ? "active" : ""}
              onClick={() => filterImages("bag")}
            >
              Bag
            </span>
            <span
              className={category === "shoe" ? "active" : ""}
              onClick={() => filterImages("shoe")}
            >
              Shoe
            </span>
            <span
              className={category === "watch" ? "active" : ""}
              onClick={() => filterImages("watch")}
            >
              Watch
            </span>
            <span
              className={category === "camera" ? "active" : ""}
              onClick={() => filterImages("camera")}
            >
              Camera
            </span>
            <span
              className={category === "headphone" ? "active" : ""}
              onClick={() => filterImages("headphone")}
            >
              Headphone
            </span>
          </div>
        </nav>
        <div className="gallery">
          {imageItems.map((item, index) => (
            <div
              className={`image ${
                category === "all" || category === item.category
                  ? "show"
                  : "hide"
              }`}
              key={index}
              onClick={() => openPreview(item.src, item.category)}
            >
              <span>
                <img src={item.src} alt="" />
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Full screen preview box */}
      {previewOpen && (
        <div className="preview-box">
          <div className="details">
            <span className="title">
              Image Category: <p>{previewCategory}</p>
            </span>
            <span
              className="icon fas fa-times"
              onClick={() => setPreviewOpen(false)}
            ></span>
          </div>
          <div className="image-box">
            <img src={previewImage} alt="" />
          </div>
        </div>
      )}
      {previewOpen && <div className="shadow"></div>}
    </>
  );
}

export default App;
