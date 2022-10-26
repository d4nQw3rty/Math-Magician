import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }
    render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div className="gridContainer">
          <div className="parent">
            <div className="div1 height grayBackGround"><span className="total">0</span></div>
            <div className="div2 height"><button type="button" name="AC" className="gridIlignItem  lightGrayBackGround">AC</button></div>
            <div className="div3 height"><button type="button" name="+/-" className="gridIlignItem lightGrayBackGround">+ / -</button></div>
            <div className="div4 height"><button type="button" name="%" className="gridIlignItem lightGrayBackGround">%</button></div>
            <div className="div5 height"><button type="button" name="÷"className="gridIlignItem salmonBackGround">÷</button></div>
            <div className="div6 height">
              <button type="button" name="7"className="gridIlignItem lightGrayBackGround">7</button>
              {' '}
            </div>
            <div className="div7 height">
              <button type="button" name="8" className="gridIlignItem lightGrayBackGround">8</button>
              {' '}
            </div>
            <div className="div8 height">
              <button type="button" name="9" className="gridIlignItem lightGrayBackGround">9</button>
              {' '}
            </div>
            <div className="div9 height">
              <button type="button"  name="x"className="gridIlignItem salmonBackGround">x</button>
              {' '}
            </div>
            <div className="div10 height">
              <button type="button" name="4" className="gridIlignItem lightGrayBackGround">4</button>
              {' '}
            </div>
            <div className="div11 height">
              <button type="button" name="5" className="gridIlignItem lightGrayBackGround">5</button>
              {' '}
            </div>
            <div className="div12 height">
              <button type="button" name="6" className="gridIlignItem lightGrayBackGround">6</button>
              {' '}
            </div>
            <div className="div13 height">
              <button type="button" name="-" className="gridIlignItem salmonBackGround">-</button>
              {' '}
            </div>
            <div className="div14 height">
              <button type="button" name="1" className="gridIlignItem lightGrayBackGround">1</button>
              {' '}
            </div>
            <div className="div15 height">
              <button type="button" name="2" className="gridIlignItem lightGrayBackGround">2</button>
              {' '}
            </div>
            <div className="div16 height">
              <button type="button" name="3" className="gridIlignItem lightGrayBackGround">3</button>
              {' '}
            </div>
            <div className="div17 height">
              <button type="button" name="+" className="gridIlignItem salmonBackGround">+</button>
              {' '}
            </div>
            <div className="div18 height">
              <button type="button" name="0" className="gridIlignItem lightGrayBackGround">0</button>
              {' '}
            </div>
            <div className="div19 height">
              <button type="button" name="." className="gridIlignItem lightGrayBackGround">.</button>
              {' '}
            </div>
            <div className="div20 height">
              <button type="button" name="=" className="gridIlignItem salmonBackGround">=</button>
              {' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
