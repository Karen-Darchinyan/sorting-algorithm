import React, { useState } from "react";
import "./BubbleSort.css";

const BubbleSortVisualization = () => {
  const [array, setArray] = useState([17,9, 15, 7, 18, 5, 11, 4, 12, 3, 16, 8, 13, 1, 2, 19, 6, 10, 14, 20, ]);
  const [sorting, setSorting] = useState(false);
  const [arrayLength, setArrayLength] = useState(20);

  const generateNewArray = () => {
    if (!sorting) {
      const newArray = Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * arrayLength) + 1
      );
      setArray(newArray);
    }
  };

  const increaseArrayLength = () => {
    if (arrayLength < 30 && !sorting) {
      setArrayLength(prevLength => prevLength + 1);
      generateNewArray();
    }
  };

  const decreaseArrayLength = () => {
    if (arrayLength > 5 && !sorting) {
      setArrayLength(prevLength => prevLength - 1);
      generateNewArray();
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
      <h3 className="algorithm-heading-sub-text" style={{ marginBottom: "28px" }}>
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
      <div className="array-length-controls">
        <button
          className="visualization-button"
          onClick={decreaseArrayLength}
          disabled={sorting || arrayLength <= 5}
          style={{margin: "0", padding: "8px 13px"}}
        >
          {"-"}
        </button>
        <span>Տողերի քանակը: {arrayLength}</span>
        <button
          className="visualization-button"
          onClick={increaseArrayLength}
          disabled={sorting || arrayLength >= 30}
          style={{margin: "0", padding: "8px 13px"}}
        >
          {"+"}
        </button>
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
