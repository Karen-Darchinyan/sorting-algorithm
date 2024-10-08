import React, { useEffect, useState } from "react";
import "./MergeSort.css";

const MergeSortVisualization = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [arrayLength, setArrayLength] = useState(25);
  const [sortingTime, setSortingTime] = useState(500);
  const [isSorted, setIsSorted] = useState(false);
  const [itmd] = useState(Array(40).fill(0));
  const [visited, setVisited] = useState(Array(40).fill(0));

  const generateNewArray = (length = arrayLength) => {
    if (!sorting) {
      const newArray = Array.from({ length }, () =>
        Math.round(Math.random() * 39 + 1)
      );
      setArray(newArray);
      setVisited(Array(arrayLength).fill(0));
      setIsSorted(false);
    }
  };

  const sortArrayInReverseOrder = () => {
    if (!sorting) {
      const reversedSortedArray = [...array].sort((a, b) => b - a);
      setArray(reversedSortedArray);
    }
  };

  useEffect(() => {
    generateNewArray();
  }, [arrayLength]);

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

  const increaseArrayLength = () => {
    if (arrayLength < 40 && !sorting) {
      const newArrayLength = arrayLength + 1;
      setArrayLength(newArrayLength);
      generateNewArray(newArrayLength);
    }
  };

  const decreaseArrayLength = () => {
    if (arrayLength > 5 && !sorting) {
      const newArrayLength = arrayLength - 1
      setArrayLength(newArrayLength);
      generateNewArray(newArrayLength);
    }
  };

  useEffect(() => {
    setIsSorted(isArraySorted(array));
  }, [array]);

  const isArraySorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const mergeArray = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    let start1 = start, start2 = mid + 1;
    let end1 = mid, end2 = end;
    let index = start;

    while (start1 <= end1 && start2 <= end2) {
      if (array[start1] <= array[start2]) {
        itmd[index++] = array[start1++];
      } else {
        itmd[index++] = array[start2++];
      }
    }

    while (start1 <= end1) {
      itmd[index++] = array[start1++];
    }

    while (start2 <= end2) {
      itmd[index++] = array[start2++];
    }

    for (let i = start; i <= end; i++) {
      array[i] = itmd[i];
    }
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const mergeSort = async (start, end) => {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      await mergeSort(start, mid);
      await mergeSort(mid + 1, end);
      mergeArray(start, end);

      // Highlight the sorted portion
      setVisited((prevVisited) => {
        const updatedVisited = [...prevVisited];
        for (let i = start; i <= end; i++) {
          updatedVisited[i] = 1;
        }
        return updatedVisited;
      });

      await timeout(sortingTime); // Adjust sorting time dynamically
    }
  };

  const performer = async () => {
    setSorting(true);
    await mergeSort(0, arrayLength - 1);
    setIsSorted(true);
    setSorting(false);
  };

  const startMergeSort = () => {
    performer();
  };

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{ marginBottom: "28px" }}>
        Merge տեսակավորման վիզուալիզացիա
      </h3>

      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value * 15}px`,
              width: `${700 / arrayLength}px`,
              backgroundColor: visited[index] ? "lightcoral" : "#149ad9",
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
          style={{ margin: "0", padding: "8px 13px", cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"-"}
        </button>
        <span>Էլեմենտների քանակը: {arrayLength}</span>
        <button
          className="visualization-button"
          onClick={increaseArrayLength}
          disabled={sorting || arrayLength >= 40}
          style={{ margin: "0", padding: "8px 13px", cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"+"}
        </button>
      </div>

      <div className="feature-controls">
        <button
          className="visualization-button"
          onClick={decreaseSortingTime}
          disabled={sorting || sortingTime <= 100}
          style={{ margin: "0", padding: "8px 13px", cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"-"}
        </button>
        <span>Տեսակավորման արագություն: {sortingTime / 1000} վրկ</span>
        <button
          className="visualization-button"
          onClick={increaseSortingTime}
          disabled={sorting || sortingTime >= 2000}
          style={{ margin: "0", padding: "8px 13px", cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"+"}
        </button>
      </div>
      <div className="controls">
        <button
          className="visualization-button"
          onClick={startMergeSort}
          disabled={sorting || isSorted}
          style={{ cursor: sorting ? "no-drop" : "pointer" }}
        >
          {sorting ? "Տեսակավորում..." : isSorted ? "Զանգվածը արդեն տեսակավորված է" : "Սկսել Merge տեսակավորումը"}
        </button>
        <button
          className="visualization-button"
          onClick={() => generateNewArray(arrayLength)}
          disabled={sorting}
          style={{ cursor: sorting ? "no-drop" : "pointer" }}
        >
          Ստեղծել նոր զանգված
        </button>
        <button
          className="visualization-button"
          onClick={sortArrayInReverseOrder}
          disabled={sorting}
          style={{ cursor: sorting ? "no-drop" : "pointer" }}
        >
          Հակադարձել զանգվածը
        </button>
      </div>
    </div>
  );
};

export default MergeSortVisualization;
