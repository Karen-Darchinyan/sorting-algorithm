import React, { useState } from "react";
import "./InsertionSort.css";

const InsertionSortVisualization = () => {
  const [array, setArray] = useState([9, 15, 7, 5, 11, 4, 12, 3, 8, 13, 1, 2, 6, 10 , 14]);
  const [sorting, setSorting] = useState(false);

  const generateNewArray = () => {
    if (!sorting) {
      const newArray = Array.from({ length: 15 }, () =>
        Math.floor(Math.random() * 15) + 1
      );
      setArray(newArray);
    }
  };

  const insertionSort = async () => {
    setSorting(true);
    let arr = [...array];
    let len = arr.length;

    for (let i = 1; i < len; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    setSorting(false);
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{marginBottom: "28px"}}>
        Insertion տեսակավորման վիզուալիզացիա
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
          onClick={insertionSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Insertion տեսակավորումը"}
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

export default InsertionSortVisualization;
