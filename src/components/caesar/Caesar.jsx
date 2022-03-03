import React, { useState } from "react";
const axios = require("axios").default;

export default function Caesar() {
  const [key, setKey] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [plainText, setPlainText] = useState("");
  const [ciphered, setCiphered] = useState("");
  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };
  const showInputFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      console.log(text);
      setPlainText(text);
    };
    reader.readAsText(e.target.files[0]);
  };
  const showOutputFile = async () => {
    const response = await axios.post("http://localhost:4242/encrypt", {
      name: plainText,
    });
    console.log(response.data);
    setShowNote(true);
  };
  const encrypt = () => {
    let combinedInitials = [];
    plainText.split("\n").forEach(function (line) {
      let name = line;
      let initials = name
        .split(" ")
        .map((word) => word[0])
        .join("");
      console.log(initials);
      combinedInitials.push(initials);
    });
    combinedInitials = combinedInitials.join("");
    setCiphered(combinedInitials);
    console.log("ciphered is", ciphered);
  };
  return (
    <div className="bg-gray-900 h-full md:h-screen font-pop">
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
          className="rounded px-2 bg-gray-700 border-2 border-gray-500  text-gray-100 focus:outline-none"
          onChange={handleKeyChange}
          onClick={() => setShowNote(true)}
        />
        <span className={`text-gray-300 text-xs font-light transition-all`}>
          Keys must be an integer ranging from 1 to 25{" "}
        </span>
      </div>
      <div className="flex flex-row justify-around ">
        <div>
          <div className="flex justify-center mt-20">
            <h1 className="text-xl font-semibold font-pop capitalize text-pink-500  ">
              Encryption
            </h1>
          </div>
          <div className="flex flex-col gap-7 mt-10 ml-10  ">
            <div className="flex flex-col gap-2">
              <label className="text-cyan-200 capitalize">plain text</label>
              <input
                type="file"
                className="text-red-500  block w-64 px-3 py-1.5 text-base font-normal  bg-gray-700  bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => showInputFile(e)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-cyan-200 capitalize">
                Encryption Of Statement:
              </label>
              <input
                type="text"
                className="text-red-500  block w-64 px-3 py-1.5 text-base font-normal  bg-gray-700  bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setPlainText(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <button
                onClick={encrypt}
                className="w-36 bg-blue-500 hover:bg-pink-600 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center justify-center text-center"
              >
                <span className=" text-center">Encrypt</span>
              </button>
              <button
                onClick={showOutputFile}
                className="w-36 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"
              >
                <span className=" text-center">open file</span>
              </button>
            </div>
          </div>
        </div>

        {/* begin decryption */}
        <div>
          <div className="flex justify-center  mt-20">
            <h1 className="text-xl font-semibold font-pop capitalize text-pink-500  ">
              decryption
            </h1>
          </div>
          <div className="flex flex-col gap-7 mt-10 ml-10">
            <div className="flex flex-col gap-2">
              <label className="text-cyan-200 capitalize">Ciphered Text</label>
              <input
                type="file"
                className="text-red-500  block w-64 px-3 py-1.5 text-base font-normal  bg-gray-700  bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => showInputFile(e)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-cyan-200 capitalize">
                decryption Of Statement:
              </label>
              <input
                type="text"
                className="text-red-500  block w-64 px-3 py-1.5 text-base font-normal  bg-gray-700  bg-clip-padding border border-solid border-gray-500 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setPlainText(e.target.value)}
              />
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <button className="w-36 bg-pink-500 hover:bg-pink-600 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center justify-center text-center">
                <span className=" text-center">Decrypt</span>
              </button>
              <button
                onClick={showOutputFile}
                className="w-36 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"
              >
                <span className=" text-center">open file</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <p className="w-11/12 h-32 bg-gray-700 border-2 border-gray-500 text-gray-200 focus:outline-none rounded-xl p-2">
          {ciphered}
        </p>
      </div>
    </div>
  );
}
