import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState("thistle");

  return (
    <>
      <div
        className="h-screen w-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className="h-full w-full flex flex-wrap items-center justify-center">
          <div className="flex flex-wrap gap-3 shadow-lg bg-white rounded px-3 py-2">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "thistle" }}
              onClick={() => setColor("thistle")}
            >
              DEAFAULT
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              RED
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              GREEN
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              BLUE
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "aqua" }}
              onClick={() => setColor("aqua")}
            >
              AQUA
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "aquamarine" }}
              onClick={() => setColor("aquamarine")}
            >
              aquamarine
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "blueviolet" }}
              onClick={() => setColor("blueviolet")}
            >
              blueviolet
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "dodgerblue" }}
              onClick={() => setColor("dodgerblue")}
            >
              dodgerblue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "fuchsia" }}
              onClick={() => setColor("fuchsia")}
            >
              fuchsia
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "hotpink" }}
              onClick={() => setColor("hotpink")}
            >
              hotpink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setColor("lavender")}
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
