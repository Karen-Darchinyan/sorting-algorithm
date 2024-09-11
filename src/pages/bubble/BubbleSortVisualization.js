import React, { useState } from "react";
import "./BubbleSort.css";

const BubbleSortVisualization = () => {
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

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    let len = arr.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }
    }
    setSorting(false);
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{marginBottom: "28px"}}>
        Bubble տեսակավորման վիզուալիզացիա
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
          onClick={bubbleSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Bubble տեսակավորումը"}
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

export default BubbleSortVisualization;
