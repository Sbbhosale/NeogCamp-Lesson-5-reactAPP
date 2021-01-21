import React from "react";
import "./styles.css";
import { useState } from "react";

const travelDB = {
  Summer: [
    { name: "Manali: Snow-Covered Mountains.", rating: "4.5/5" },
    { name: "Ladakh: Beige Hillscape", rating: "3.5/5" },
    { name: "Nainital: Lush Hills", rating: "4/5" }
  ],

  Winter: [
    {
      name: "Himachal Pradesh: Shimla – Manali – Dharmshala.",
      rating: "4.5/5"
    },
    {
      name: "North East India: Gangtok – Darjeeling.",
      rating: "4/5"
    },
    {
      name: "Munnar  – Tea Lover’s Paradise.",
      rating: "4/5"
    }
  ],
  Monsoon: [
    {
      name: "Lonavala",
      rating: "4.5/5"
    },
    {
      name: "Kodaikanal",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Monsoon");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🧳🗺️ INDIA TRAVELLER </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        <strong>
          I had sorted up the places which I love to visit as per seasons in
          INDIA. Do visit I bet you won't regret.
        </strong>{" "}
      </p>

      <div>
        {Object.keys(travelDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              backgroundColor: "black"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedGenre].map((travel) => (
            <li
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                color: "blue",
                backgroundColor: "black"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {travel.name} </div>
              <div style={{ fontSize: "smaller" }}> {travel.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
