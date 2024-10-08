import React, { useEffect, useState } from "react";
import "./CocktailSort.css";

const CocktailSortVisualization = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [arrayLength, setArrayLength] = useState(25);
  const [sortingTime, setSortingTime] = useState(500);
  const [isSorted, setIsSorted] = useState(false);

  const generateNewArray = (length = arrayLength) => {
    if (!sorting) {
      const newArray = Array.from({ length }, () =>
        Math.floor(Math.random() * 40) + 1
      );
      setArray(newArray);
    }
  };

  const sortArrayInReverseOrder = () => {
    if (!sorting) {
      const reversedSortedArray = [...array].sort((a, b) => b - a);
      setArray(reversedSortedArray);
    }
  };

  const increaseSortingTime = () => {
    if(sortingTime < 2000 && !sorting){
      setSortingTime(prevSortingTime => prevSortingTime + 100);
    }
  }

  const decreaseSortingTime = () => {
    if(sortingTime >= 100 && !sorting){
      setSortingTime(prevSortingTime => prevSortingTime - 100);
    }
  }

  useEffect(() => {
    generateNewArray();
  }, []);

  const increaseArrayLength = () => {
    if (arrayLength < 40 && !sorting) {
      const newArrayLength = arrayLength + 1
      setArrayLength(newArrayLength);
      generateNewArray(newArrayLength);
    }
  };

  const decreaseArrayLength = () => {
    if (arrayLength > 5 && !sorting) {
      const newArrayLength = arrayLength - 1;
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
          await new Promise((resolve) => setTimeout(resolve, sortingTime));
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
          await new Promise((resolve) => setTimeout(resolve, sortingTime));
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
              height: `${value * 15}px`,
              width: `${700 / arrayLength}px`,
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
          style={{ margin: "0", padding: "8px 13px",  cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"-"}
        </button>
        <span>Էլեմենտների քանակը: {arrayLength}</span>
        <button
          className="visualization-button"
          onClick={increaseArrayLength}
          disabled={sorting || arrayLength >= 40}
          style={{ margin: "0", padding: "8px 13px",  cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"+"}
        </button>
      </div>
      <div className="feature-controls">
        <button
          className="visualization-button"
          onClick={decreaseSortingTime}
          disabled={sorting || sortingTime <= 100}
          style={{ margin: "0", padding: "8px 13px",  cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"-"}
        </button>
        <span>Տեսակավորման արագություն: {sortingTime / 1000} վրկ</span>
        <button
          className="visualization-button"
          onClick={increaseSortingTime}
          disabled={sorting || sortingTime >= 2000}
          style={{ margin: "0", padding: "8px 13px",  cursor: sorting ? "no-drop" : "pointer" }}
        >
          {"+"}
        </button>
      </div>
      <div className="controls">
        <button
          className="visualization-button"
          onClick={cocktailSort}
          disabled={sorting || isSorted}
          style={{ cursor: sorting ? "no-drop" : "pointer" }}
        >
          {sorting ? "Տեսակավորում..." : isSorted ? "Զանգվածը արդեն տեսակավորված է" : "Սկսել Cocktail տեսակավորումը"}
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

export default CocktailSortVisualization;
