import React, { useRef, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const valueRef = useRef(null);

  const increment = () => {
    if (value==0) {
      setCount(count + 1);
    } else {
      setCount(count + +value);
    }
    valueRef.current.value = null;
    setValue(0)

  };

  const decrement = () => {
    if (value==0) {
      setCount(count - 1);
    } else {
      setCount(count - +value);
    }
    valueRef.current.value = null;
    setValue(0)
  };

  return (
    <main className="h-[100vh] bg-penguin-black">
      <Header name={"Counter"} />
      <div className="  flex-center flex-col ">
        <section
          style={{
            boxShadow: "white 0px 8px 20px 2px",
          }}
          className="bg-glacier-teal border-2 mt-10 border-snow-white rounded-md p-3"
        >
          <h1 className="text-[10rem] text-center">{count}</h1>
          <div className="flex-center gap-5 p-5">
            <button
              className="btn"
              onClick={() => {
                decrement()
              }}
            >
              -
            </button>
            <input
              type="number"
              className="px-2 py-1 ring-1 focus:shadow-md focus:shadow-ice-blue ring-penguin-black rounded-md text-center"
              placeholder="Enter value : "
              onChange={(e) => {
                setValue(e.target.value);
              }}
              ref={valueRef}
            />
            <button
              className="btn"
              onClick={() => {
                increment()
              }}
            >
              +
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Counter;
