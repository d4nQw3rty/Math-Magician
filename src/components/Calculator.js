import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <div className="gridContainer">
          <div className="parent">
            <div className="div1 height grayBackGround"><span className="total">0</span></div>
            <div className="div2 height lightGrayBackGround"><span className="gridIlignItem">AC</span></div>
            <div className="div3 height lightGrayBackGround"><span className="gridIlignItem">+ / -</span></div>
            <div className="div4 height lightGrayBackGround"><span className="gridIlignItem">%</span></div>
            <div className="div5 height salmonBackGround"><span className="gridIlignItem">&divide;</span></div>
            <div className="div6 height lightGrayBackGround">
              <span className="gridIlignItem">7</span>
              {' '}
            </div>
            <div className="div7 height lightGrayBackGround">
              <span className="gridIlignItem">8</span>
              {' '}
            </div>
            <div className="div8 height lightGrayBackGround">
              <span className="gridIlignItem">9</span>
              {' '}
            </div>
            <div className="div9 height salmonBackGround">
              <span className="gridIlignItem">x</span>
              {' '}
            </div>
            <div className="div10 height lightGrayBackGround">
              <span className="gridIlignItem">4</span>
              {' '}
            </div>
            <div className="div11 height lightGrayBackGround">
              <span className="gridIlignItem">5</span>
              {' '}
            </div>
            <div className="div12 height lightGrayBackGround">
              <span className="gridIlignItem">6</span>
              {' '}
            </div>
            <div className="div13 height salmonBackGround">
              <span className="gridIlignItem">-</span>
              {' '}
            </div>
            <div className="div14 height lightGrayBackGround">
              <span className="gridIlignItem">1</span>
              {' '}
            </div>
            <div className="div15 height lightGrayBackGround">
              <span className="gridIlignItem">2</span>
              {' '}
            </div>
            <div className="div16 height lightGrayBackGround">
              <span className="gridIlignItem">3</span>
              {' '}
            </div>
            <div className="div17 height salmonBackGround">
              <span className="gridIlignItem">+</span>
              {' '}
            </div>
            <div className="div18 height lightGrayBackGround">
              <span className="gridIlignItem">0</span>
              {' '}
            </div>
            <div className="div19 height lightGrayBackGround">
              <span className="gridIlignItem">.</span>
              {' '}
            </div>
            <div className="div20 height salmonBackGround">
              <span className="gridIlignItem">-</span>
              {' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
