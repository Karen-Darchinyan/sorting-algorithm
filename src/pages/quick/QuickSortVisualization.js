import React, { useState } from "react";
import "./QuickSort.css";

const QuickSortVisualization = () => {
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

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      setArray([...arr]);

      // Sort the left half
      await quickSort(arr, low, pi - 1);

      // Sort the right half
      await quickSort(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high]; // Pivot element is chosen as the last element
    let i = low - 1; // Index of the smaller element

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    }

    // Swap arr[i+1] and arr[high] (pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 300));

    return i + 1; // Return partition index
  };

  const startQuickSort = async () => {
    setSorting(true);
    let arr = [...array];
    await quickSort(arr, 0, arr.length - 1);
    setSorting(false);
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{marginBottom: "28px"}}>
        Quick տեսակավորման վիզուալիզացիա
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
          onClick={startQuickSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Quick տեսակավորումը"}
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

export default QuickSortVisualization;
