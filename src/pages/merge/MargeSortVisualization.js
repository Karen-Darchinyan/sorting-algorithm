import React, { useEffect, useRef, useState } from 'react';
import "./MergeSort.css"

const MergeSortVisualization = () => {

  const canvasRef = useRef(null);
  const [title, setTitle] = useState('Array is being sorted...');
  const [sorting, setSorting] = useState(false);
  const [arr, setArr] = useState([]);
  const [itmd] = useState(Array(40).fill(0));
  const [visited] = useState(Array(40).fill(0));
  const len_of_arr = 20;

  const initializeArray = () => {
    const newArray = Array.from({ length: len_of_arr }, () => Math.round(Math.random() * 250));
    setArr(newArray);
  };

  useEffect(() => {
    initializeArray();
  }, []);

  const mergeArray = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    let start1 = start, start2 = mid + 1;
    let end1 = mid, end2 = end;
    let index = start;

    while (start1 <= end1 && start2 <= end2) {
      if (arr[start1] <= arr[start2]) {
        itmd[index++] = arr[start1++];
      } else {
        itmd[index++] = arr[start2++];
      }
    }

    while (start1 <= end1) {
      itmd[index++] = arr[start1++];
    }

    while (start2 <= end2) {
      itmd[index++] = arr[start2++];
    }

    for (let i = start; i <= end; i++) {
      arr[i] = itmd[i];
    }
  };

  const drawBars = (start, end) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = 30;
    const spacing = 5;

    for (let i = 0; i < len_of_arr; i++) {
      const x = (barWidth + spacing) * i;
      ctx.fillStyle = visited[i] ? 'lightcoral' : 'black';
      ctx.fillRect(x, 300 - arr[i], barWidth, arr[i]);
    }

    for (let i = start; i <= end; i++) {
      const x = (barWidth + spacing) * i;
      ctx.fillStyle = '#149ad9';
      ctx.fillRect(x, 300 - arr[i], barWidth , arr[i]);
      visited[i] = 1;
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
      drawBars(start, end);
      await timeout(800); // Waiting time between bars
    }
  };


  const performer = async () => {
    setSorting(true);
    await mergeSort(0, len_of_arr - 1);
    drawBars(0, len_of_arr - 1);
    setTitle('Array is completely sorted');
    setSorting(false);
  };

  const startMergeSort = () => {
    performer();
  };

  const generateNewArray = () => {
    initializeArray();
    setTitle('Array is being sorted...');
    const canvas = canvasRef.current;
    drawBars(0, len_of_arr - 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 700;
    canvas.height = 340;
    drawBars(0, len_of_arr - 1);
  }, [arr]);

  return (
    <div className="visualization-sort-container">
      <h3 className="algorithm-heading-sub-text" style={{ marginBottom: "28px" }}>
        Merge տեսակավորման վիզուալիզացիա
      </h3>
      <canvas ref={canvasRef} id="Canvas"></canvas>
      <div className="controls">
        <button
          className="visualization-button"
          onClick={startMergeSort}
          disabled={sorting}
        >
          {sorting ? "Տեսակավորում..." : "Սկսել Merge տեսակավորումը"}
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

export default MergeSortVisualization;
