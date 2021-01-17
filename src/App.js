import React, { useState } from "react";
import "./styles.css";
const Books = ["Adventure", "Horror", "Fantasy"];
const booklist = {
  Adventure: {
    book: [
      "Around the World in Eighty Days",
      "Raiders of the Lost Ark",
      "The Adventures of Sherlock Holmes"
    ],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0"]
  },
  Horror: {
    book: ["The Exorcist", "Dracula", "The Ring"],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0"]
  },
  Fantasy: {
    book: ["The Wizard of OZ", "Harry Potter", "The Lord of the Rings"],
    Rating: ["3.9/5.0", "4.9/5.0", "3.9/5.0"]
  }
};
export default function App() {
  const [bookname, setbookname] = useState("Adventure");

  function clickEventHandler(item) {
    setbookname(item);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Books Guide</h1>
        <hr></hr>
      </div>

      <main>
        <div className="section">
          <p>
            <b>Click to find out</b>
          </p>

          {Books.map((item) => {
            return (
              <button
                className="btn"
                style={{ fontSize: "1rem" }}
                key={item}
                onClick={() => clickEventHandler(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="bookdisplay">
          <h2>{bookname}</h2>

          <ol className="contain" type="1">
            {booklist[bookname].book.map(function (item, index) {
              return (
                <li key={item}>
                  <hr style={{ width: "80%" }}></hr>
                  {item} <br></br>rating:
                  <span> {booklist[bookname].Rating[index]} </span>
                </li>
              );
            })}
          </ol>
        </div>
      </main>
    </div>
  );
}
