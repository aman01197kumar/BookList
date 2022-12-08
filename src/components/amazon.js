import React, { useState } from "react";
import data from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  const [resultsToShow, setResultsToShow] = useState(data);
  return (
    <>
      <input
        placeholder="Search Your Book Here"
        className="input-field"
        onChange={(e) => {
          if (e.target.value === "") {
            setResultsToShow(data);
          }
          let arr = data;
          arr = data.filter((item) =>
            item.title.toLowerCase().includes(e.target.value)
          );

          setResultsToShow(arr);
          console.log(resultsToShow);
        }}
      />
      <section>
        {resultsToShow.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
};

export default Amazon;
