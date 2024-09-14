import React, { useState } from "react";
import "./CocktailSort.css";

const CocktailSortVisualization = () => {
  const [array, setArray] = useState([9, 15, 7, 5, 11, 4, 12, 3, 8, 13, 1, 2, 6, 10, 14]);
  const [sorting, setSorting] = useState(false);

  const generateNewArray = () => {
    if (!sorting) {
      const newArray = Array.from({ length: 15 }, () =>
        Math.floor(Math.random() * 15) + 1
      );
      setArray(newArray);
    }
  };

  const cocktailSort = async () => {
    setSorting(true);
    let arr = [...array];
    let len = arr.length;
    let swapped = true;
    let start = 0;
    let end = len - 1;

    while (swapped) {
      swapped = false;

      // Traverse the array from left to right
      for (let i = start; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;

          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }

      if (!swapped) break;

      swapped = false;
      end--;

      // Traverse the array from right to left
      for (let i = end - 1; i >= start; i--) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;

          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }

      start++;
    }

    setSorting(false);
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{ marginBottom: "28px" }}>
        Cocktail տեսակավորման վիզուալիզացիա
      </h3>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value * 20}px`,
              backgroundColor: sorting ? "lightcoral" : "#149ad9",
              width: "30px",
              margin: "0 5px",
              display: "inline-block",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="controls">
        <button
          className="visualization-button"
          onClick={cocktailSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Cocktail տեսակավորումը"}
        </button>
        <button
          className="visualization-button"
          onClick={generateNewArray}
          disabled={sorting}
        >
          Ստեղծեք նոր զանգված
        </button>
      </div>
    </div>
  );
};

export default CocktailSortVisualization;
