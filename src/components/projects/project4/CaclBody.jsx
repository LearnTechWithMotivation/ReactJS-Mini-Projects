import  { useState } from "react";

export default function CaclBody() {

  const [expression, setExpression] = useState("");

  return (
    <section className="bg-beak-orange rounded-2xl z-10 flex-center flex-col p-1">
      <input
        type="text"
        value={expression}
        className="bg-snow-white border-1 rounded-t-2xl px-10 py-3 text-right text-3xl"
      />
      <div className="grid grid-cols-4 w-full  font-snow rounded-b-2xl h-full text-penguin-black text-center">
        <div className="calc-btn" onClick={() => {
          setExpression(expression+"7")
        }}>
          7
          <img src="./p3.png" alt="p3" className="btm" />
        </div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+"8")
        }}>8</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'9')
        }}>
          9
          <img src="./p5.png" alt="p5" className="tr" />
        </div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'/')
        }}>/</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'4')
        }}>4</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'5')
        }}>
          5
          <img src="./p6.png" alt="p6" className="tr" />
        </div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'6')
        }}>6</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'*')
        }}>
          * <img src="./p2.png" alt="p2" className="cc" />
        </div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'1')
        }}>1</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'2')
        }}>2</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'3')
        }}>
          3
          <img src="./p4.png" alt="p4" className="btm" />
        </div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'-')
        }}>-</div>
        <div className="calc-btn rounded-bl-2xl" onClick={() => {
          setExpression("");
        }}>AC</div>
        <div className="calc-btn" onClick={() => {
          setExpression(expression+'0')
        }}>
          0
          <img src="./p1.png" alt="p1" className="bl" />
        </div>
        <div className="calc-btn"
        onClick={() => {
          try{

            console.log(eval(expression));
            setExpression(eval(expression));
          }catch(e){
            setExpression("");
          }
        }}>=</div>
        <div className="calc-btn rounded-br-2xl" onClick={() => {
          setExpression(expression+'+')
        }}>+</div>
      </div>
    </section>
  );
}
