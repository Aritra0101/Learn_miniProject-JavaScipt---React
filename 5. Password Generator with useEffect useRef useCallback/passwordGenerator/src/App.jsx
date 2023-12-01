
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charcaterAllowed, setCharcaterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const passRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,11);
    window.navigator.clipboard.writeText(password);
    setIsCopied(true);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charcaterAllowed) str += "!@#$%^&*()_=-+*/";

    let pass = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length) + 1;
      pass += str[index];
      // pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charcaterAllowed, setPassword]);

  useEffect( () => {
    setIsCopied(false);
    passwordGenerator();
  }, [length, numberAllowed, charcaterAllowed, passwordGenerator]);

  return (
    <>
      <div className="h-screen w-screen py-7 bg-black">
        <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 text-orange-500 bg-gray-800">
          <h1 className="text-3xl text-white text-center my-3">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              // className="outline-none w-full py-1 px-3"
              className={`outline-none w-full py-1 px-3 ${
                isCopied ? "text-purple-700" : "text-blue-700"
              }`}
              placeholder="Password"
              readOnly
              ref={passRef}
            />
            <button
              // className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700"
              className={`outline-none text-white px-3 py-0.5 shrink-0 ${
                isCopied ? "bg-purple-700" : "bg-blue-600 hover:bg-blue-700"
              }`}
              onClick={copyToClipboard}
            >
              {isCopied ? "COPIED!!" : "COPY"}
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex item-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
                name="passwordLengthInput"
                id="passwordLengthInput"
              />
              <label htmlFor="passwordLengthInput">Length : {length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
                name="numberInput"
                id="numberInput"
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charcaterAllowed}
                onChange={() => setCharcaterAllowed(!charcaterAllowed)}
                name="charcaterInput"
                id="charcaterInput"
              />
              <label htmlFor="charcaterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
