import React, { useState } from 'react';
import calculate from '../logic/calculate';
import styles from './Home.module.css';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const { name } = event.target;
    const newState = calculate(state, name);
    setState(newState);
  };
  return (
    <div className={styles.calculator}>
      <h1>Let&apos;s do some math!</h1>
      <div className={styles.container}>
        <div className="gridContainer">
          <div className="parent">
            <div className="div1 height grayBackGround">
              <span className="total">
                {state.total}
                {state.operation}
                {state.next}
              </span>
            </div>
            <div className="div2 height">
              <button
                onClick={handleClick}
                type="button"
                name="AC"
                className="gridIlignItem  lightGrayBackGround"
              >
                AC
              </button>
            </div>
            <div className="div3 height">
              <button
                onClick={handleClick}
                type="button"
                name="+/-"
                className="gridIlignItem lightGrayBackGround"
              >
                +/-
              </button>
            </div>
            <div className="div4 height">
              <button
                onClick={handleClick}
                type="button"
                name="%"
                className="gridIlignItem lightGrayBackGround"
              >
                %
              </button>
            </div>
            <div className="div5 height">
              <button
                onClick={handleClick}
                type="button"
                name="÷"
                className="gridIlignItem salmonBackGround"
              >
                ÷
              </button>
            </div>
            <div className="div6 height">
              <button
                onClick={handleClick}
                type="button"
                name="7"
                className="gridIlignItem lightGrayBackGround"
              >
                7
              </button>
              {' '}
            </div>
            <div className="div7 height">
              <button
                onClick={handleClick}
                type="button"
                name="8"
                className="gridIlignItem lightGrayBackGround"
              >
                8
              </button>
              {' '}
            </div>
            <div className="div8 height">
              <button
                onClick={handleClick}
                type="button"
                name="9"
                className="gridIlignItem lightGrayBackGround"
              >
                9
              </button>
              {' '}
            </div>
            <div className="div9 height">
              <button
                onClick={handleClick}
                type="button"
                name="x"
                className="gridIlignItem salmonBackGround"
              >
                x
              </button>
              {' '}
            </div>
            <div className="div10 height">
              <button
                onClick={handleClick}
                type="button"
                name="4"
                className="gridIlignItem lightGrayBackGround"
              >
                4
              </button>
              {' '}
            </div>
            <div className="div11 height">
              <button
                onClick={handleClick}
                type="button"
                name="5"
                className="gridIlignItem lightGrayBackGround"
              >
                5
              </button>
              {' '}
            </div>
            <div className="div12 height">
              <button
                onClick={handleClick}
                type="button"
                name="6"
                className="gridIlignItem lightGrayBackGround"
              >
                6
              </button>
              {' '}
            </div>
            <div className="div13 height">
              <button
                onClick={handleClick}
                type="button"
                name="-"
                className="gridIlignItem salmonBackGround"
              >
                -
              </button>
              {' '}
            </div>
            <div className="div14 height">
              <button
                onClick={handleClick}
                type="button"
                name="1"
                className="gridIlignItem lightGrayBackGround"
              >
                1
              </button>
              {' '}
            </div>
            <div className="div15 height">
              <button
                onClick={handleClick}
                type="button"
                name="2"
                className="gridIlignItem lightGrayBackGround"
              >
                2
              </button>
              {' '}
            </div>
            <div className="div16 height">
              <button
                onClick={handleClick}
                type="button"
                name="3"
                className="gridIlignItem lightGrayBackGround"
              >
                3
              </button>
              {' '}
            </div>
            <div className="div17 height">
              <button
                onClick={handleClick}
                type="button"
                name="+"
                className="gridIlignItem salmonBackGround"
              >
                +
              </button>
              {' '}
            </div>
            <div className="div18 height">
              <button
                onClick={handleClick}
                type="button"
                name="0"
                className="gridIlignItem lightGrayBackGround"
              >
                0
              </button>
              {' '}
            </div>
            <div className="div19 height">
              <button
                onClick={handleClick}
                type="button"
                name="."
                className="gridIlignItem lightGrayBackGround"
              >
                .
              </button>
              {' '}
            </div>
            <div className="div20 height">
              <button
                onClick={handleClick}
                type="button"
                name="="
                className="gridIlignItem salmonBackGround"
              >
                =
              </button>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
