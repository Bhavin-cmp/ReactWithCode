import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-4 py-3 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "blue" }}
            >
              Kajal
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 rounded-full text-white  py-1 shadow-xl "
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-5 rounded-full text-gray  py-1 shadow-xl "
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 rounded-full text-gray  py-1 shadow-xl "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-5 rounded-full text-gray  py-1 shadow-xl "
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

