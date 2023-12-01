
function myButton({setColor, myBtnColor}) {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-sm uppercase"
      style={{ backgroundColor: myBtnColor }}
      onClick={() => setColor(myBtnColor)}
    >
      {myBtnColor}
    </button>
  );
}

export default myButton