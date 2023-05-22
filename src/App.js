import React, { useReducer } from "react";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { applyNumber, addMemory, clearMemory, changeOperation, clearDisplay } from "./actions";

function App() {
  const [state, dispacth] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={() => dispacth(addMemory())} value={"M+"} />
              <CalcButton onClick={() => dispacth(applyNumber(state.memory))} value={"MR"} />
              <CalcButton onClick={() => dispacth(clearMemory())} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispacth(applyNumber(1))} value={1} />
              <CalcButton onClick={() => dispacth(applyNumber(2))} value={2} />
              <CalcButton onClick={() => dispacth(applyNumber(3))} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispacth(applyNumber(4))} value={4} />
              <CalcButton onClick={() => dispacth(applyNumber(5))} value={5} />
              <CalcButton onClick={() => dispacth(applyNumber(6))} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispacth(applyNumber(7))} value={7} />
              <CalcButton onClick={() => dispacth(applyNumber(8))} value={8} />
              <CalcButton onClick={() => dispacth(applyNumber(9))} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={() => dispacth(changeOperation("+"))} value={"+"} />
              <CalcButton onClick={() => dispacth(changeOperation("*"))} value={"*"} />
              <CalcButton onClick={() => dispacth(changeOperation("-"))} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => dispacth(clearDisplay())} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
