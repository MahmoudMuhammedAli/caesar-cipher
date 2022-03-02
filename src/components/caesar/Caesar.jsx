import React, { useState } from "react";

export default function Caesar() {
  const [key, setKey] = useState("");
  const [showNote, setShowNote] = useState(false);
  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };
  const showInputFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div className="bg-gray-900 h-screen font-pop">
      <div className="flex justify-center items-center p-5">
        <h1 className="text-4xl font-bold font-pop capitalize text-cyan-400 ">
          caesar cipher
        </h1>
      </div>
      <div className="flex flex-row gap-7 justify-center mt-10 items-center group">
        <span className="text-gray-100 text-lg font-bold capitalize">
          enter Key:{" "}
        </span>
        <input
          type="text"
          className="rounded bg-gray-700 border-2 border-gray-500  text-gray-100 focus:outline-none"
          onChange={handleKeyChange}
          onClick={() => setShowNote(true)}
        />
        <span className={`text-gray-300 text-xs font-light transition-all`}>
          Keys must be an integer ranging from 1 to 25{" "}
        </span>
      </div>
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-xl font-semibold font-pop capitalize text-pink-500 ">
          Encryption
        </h1>
      </div>
      <div className="flex flex-col gap-7 mt-10 ml-10">
        <div className="">
          <label >
            plain text
          </label>
          <input
            type="file"
            className="text-gray-300"
            onChange={(e) => showInputFile(e)}
          />
        </div>
        <div>
          <input
            type="file"
            className="text-gray-300 "
            onChange={(e) => showInputFile(e)}
          />
        </div>
      </div>
    </div>
  );
}
