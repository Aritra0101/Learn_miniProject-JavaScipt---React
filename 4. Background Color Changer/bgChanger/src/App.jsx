import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './component/myButton';

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

            <MyButton setColor={setColor} myBtnColor="red" />
            <MyButton setColor={setColor} myBtnColor="green" />
            <MyButton setColor={setColor} myBtnColor="blue" />
            <MyButton setColor={setColor} myBtnColor="aqua" />
            <MyButton setColor={setColor} myBtnColor="aquamarine" />
            <MyButton setColor={setColor} myBtnColor="blueviolet" />
            <MyButton setColor={setColor} myBtnColor="dodgerblue" />
            <MyButton setColor={setColor} myBtnColor="fuchsia" />
            <MyButton setColor={setColor} myBtnColor="hotpink" />
            <MyButton setColor={setColor} myBtnColor="lavender" />
            <MyButton setColor={setColor} myBtnColor="plum" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
