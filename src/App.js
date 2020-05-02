import React, { useState } from "react";
import "./styles.css";
import Table from "./Table";

const App = () => {
  function frequencyCounter(str) {
    if (str.length === 0) return;
    let obj = {};
    let desired = str.replace(/[^\w\s]/gi, "").toLowerCase();
    let arr = desired.split(" ");
    for (let i = 0; i < arr.length; i++) {
      !obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
    }

    return obj;
  }

  function sortObject(str) {
    let obj = frequencyCounter(str);
    let sortArr = [];
    for (let key in obj) {
      sortArr.push([key, obj[key]]);
    }
    let x = sortArr
      .sort(function(a, b) {
        return a[1] - b[1];
      })
      .reverse();
    x = x.filter(function(str) {
      return /\S/.test(str[0]);
    });
    return x;
  }
  const [word, setWord] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = e => {
    setWord(e.target.value);
  };
  const handleSubmit = e => {
    let x = sortObject(word);

    setArray(x);

    e.preventDefault();
  };

  return (
    <>
      <div className="   flex justify-center items-center  h-auto min-h-screen	  bg-gray-800">
        <div className="w-1/2  rounded-lg overflow-hidden bg-white shadow-lg ">
          <div className="text-2xl font-bold text-center p-4 border text-center bg-gray-200">
            Word Frequency Counter
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center  items-center  ">
              <textarea
                id="csv"
                cols="50"
                rows="10"
                placeholder="Please Paste your text here...."
                className="border-2 border-gray-500 p-4 placeholder-gray-500 m-4 resize-none rounded-lg"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center my-4">
              <input
                type="submit"
                className=" text-xl px-16 py-2  bg-indigo-600 rounded-lg hover:bg-indigo-500 text-gray-100"
                value="Count the words"
              />
            </div>
          </form>
          <div className="flex justify-center my-4">
            {!array.length ? null : <Table array={array} />}
          </div>
        </div>
      </div>
      <footer className="flex text-lg justify-center bg-tra text-black p-4">
        <p>
          Made with ♥ by{" "}
          <a href="#" target="_blank" className="text-teal-800">
            Shubham Singh
          </a>{" "}
        </p>
      </footer>
    </>
  );
};

export default App;
