import React, { useEffect, useState } from "react";
import "./QuickSort.css";

const QuickSortVisualization = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [arrayLength, setArrayLength] = useState(25);
  const [sortingTime, setSortingTime] = useState(500);
  const [isSorted, setIsSorted] = useState(false);

  const generateNewArray = () => {
    if (!sorting) {
      const newArray = Array.from({ length: arrayLength }, () =>
        Math.floor(Math.random() * arrayLength) + 1
      );
      setArray(newArray);
    }
  };

  const increaseSortingTime = () => {
    if (sortingTime < 2000 && !sorting) {
      setSortingTime((prevSortingTime) => prevSortingTime + 100);
    }
  };

  const decreaseSortingTime = () => {
    if (sortingTime >= 100 && !sorting) {
      setSortingTime((prevSortingTime) => prevSortingTime - 100);
    }
  };

  useEffect(() => {
    generateNewArray();
  }, [arrayLength]);

  useEffect(() => {
    setIsSorted(isArraySorted(array));
  }, [array]);

  const increaseArrayLength = () => {
    if (arrayLength < 40 && !sorting) {
      setArrayLength((prevLength) => prevLength + 1);
      generateNewArray();
    }
  };

  const decreaseArrayLength = () => {
    if (arrayLength > 5 && !sorting) {
      setArrayLength((prevLength) => prevLength - 1);
      generateNewArray();
    }
  };

  const isArraySorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      setArray([...arr]);

      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, sortingTime));
      }
    }

    // Swap arr[i+1] and arr[high] (pivot)
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, sortingTime));

    return i + 1; // Return partition index
  };

  const startQuickSort = async () => {
    setSorting(true); // Disable buttons while sorting
    let arr = [...array];
    await quickSort(arr, 0, arr.length - 1);
    setSorting(false); // Enable buttons after sorting is complete
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{ marginBottom: "28px" }}>
        Quick տեսակավորման վիզուալիզացիա
      </h3>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value * 15}px`,
              backgroundColor: sorting ? "lightcoral" : "#149ad9",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="feature-controls">
        <button
          className="visualization-button"
          onClick={decreaseArrayLength}
          disabled={sorting || arrayLength <= 5}
          style={{ margin: "0", padding: "8px 13px" }}
        >
          {"-"}
        </button>
        <span>Էլեմենտների քանակը: {arrayLength}</span>
        <button
          className="visualization-button"
          onClick={increaseArrayLength}
          disabled={sorting || arrayLength >= 40}
          style={{ margin: "0", padding: "8px 13px" }}
        >
          {"+"}
        </button>
      </div>
      <div className="feature-controls">
        <button
          className="visualization-button"
          onClick={decreaseSortingTime}
          disabled={sorting || sortingTime <= 100}
          style={{ margin: "0", padding: "8px 13px" }}
        >
          {"-"}
        </button>
        <span>Տեսակավորման արագություն: {sortingTime / 1000} վրկ</span>
        <button
          className="visualization-button"
          onClick={increaseSortingTime}
          disabled={sorting || sortingTime >= 2000}
          style={{ margin: "0", padding: "8px 13px" }}
        >
          {"+"}
        </button>
      </div>
      <div className="controls">
        <button
          className="visualization-button"
          onClick={startQuickSort}
          disabled={sorting || isSorted} // Disable if sorting or already sorted
        >
          {sorting ? "Տեսակավորում..." : isSorted ? "Զանգվածը արդեն տեսակավորված է" : "Սկսել Quick տեսակավորումը"}
        </button>
        <button
          className="visualization-button"
          onClick={generateNewArray}
          disabled={sorting}
        >
          Ստեղծել նոր զանգված
        </button>
      </div>
    </div>
  );
};

export default QuickSortVisualization;
