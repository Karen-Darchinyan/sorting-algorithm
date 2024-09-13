import React, { useState } from "react";
import "./ShellSort.css";

const ShellSortVisualization = () => {
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

  const shellSort = async () => {
    setSorting(true);
    let arr = [...array];
    let len = arr.length;

    // Initial gap is half the length of the array, then divide by 2 each iteration
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let temp = arr[i];
        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];

          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
        arr[j] = temp;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }
    setSorting(false);
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{marginBottom: "28px"}}>
        Shell տեսակավորման վիզուալիզացիա
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
          onClick={shellSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Shell տեսակավորումը"}
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

export default ShellSortVisualization;
