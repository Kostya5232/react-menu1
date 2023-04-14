import React from 'react';
import { Calculator, PolynomialCalculator } from '../calculator';
import './styleCalc.css';
class CalculatorComponents extends React.Component {
  constructor(props) {
    super(props);

    this.calculator = new Calculator();
  }

  operandHandlerCalc(operand) {
    const inputA = document.getElementById('inputA');
    const inputB = document.getElementById('inputB');
    let a = this.calculator.getEntity(inputA.value);
    let b = this.calculator.getEntity(inputB.value);
    const c = this.calculator[operand](a, b);
    document.getElementById('CalcResult').innerHTML = c ? c.toString() : 'Ошибка!!!';
  }

  operandHandlerPoly(operand) {
    const calc = new PolynomialCalculator();
    const inputP1 = document.getElementById('p1');
    const inputP2 = document.getElementById('p2');
    const a = calc.getPolynomial(inputP1.value);
    const b = calc.getPolynomial(inputP2.value);
    const c = calc[operand](a, b);
    document.getElementById('PolyResult').innerHTML = c ? c.toString() : 'Ошибка!!!';
  }

  operandHandlerResult() {
    const calc = new PolynomialCalculator();
    const a = calc.getPolynomial(document.getElementById('p1').value);
    const inputX = document.getElementById('inputX');
    const x = new Calculator().getEntity(inputX.value);
    const res = document.querySelector('#res');
    if (a) {
      res.innerHTML = a.getValue(x).toString();
    }
  }

  // prettier-ignore
  render() {
    return (
      <div id='calc'>
        <div id="CommCalculater">
          <div className="Calculator">
              <h1>Калькулятор</h1>
              <div id="Inputs">
                  <textarea id="inputA" className = 'inputCalc' placeholder="Первое число"></textarea>
                  <textarea id="inputB" className = 'inputCalc' placeholder="Второе число"></textarea>
              </div>
              <div id="container">
                  <button className="operand-calc" data-operand="add" onClick={() => this.operandHandlerCalc('add')}>add</button>
                  <button className="operand-calc" data-operand="sub" onClick={() => this.operandHandlerCalc('sub')}>sub</button>
                  <button className="operand-calc" data-operand="mult" onClick={() => this.operandHandlerCalc('mult')}>mult</button>
                  <button className="operand-calc" data-operand="div" onClick={() => this.operandHandlerCalc('div')}>div</button>
                  <button className="operand-calc" data-operand="prod" onClick={() => this.operandHandlerCalc('prod')}>prod</button>
                  <button className="operand-calc" data-operand="pow" onClick={() => this.operandHandlerCalc('pow')}>pow</button>
                  <button className="operand-calc" data-operand="one" onClick={() => this.operandHandlerCalc('one')}>one</button>
                  <button className="operand-calc" data-operand="zero" onClick={() => this.operandHandlerCalc('zero')}>zero</button>
              </div>
              <textarea id="CalcResult" placeholder="Ответ"></textarea>
          </div>
        </div>
        <div id="PolyCalculater">
        <div className="Polynomial">
            <h1>Полиномы</h1>
            <div id="Inputs">
                <textarea id="p1" className = 'inputCalc' placeholder="Первый полином"></textarea>
                <textarea id="p2" className = 'inputCalc' placeholder="Второй полином"></textarea>
                <textarea type="number" id="inputX" placeholder="Значение x"></textarea>
            </div>
            <div>
                <button className="operand-poly" data-operand="add" onClick={() => this.operandHandlerPoly('add')}>+</button>
                <button className="operand-poly" data-operand="sub" onClick={() => this.operandHandlerPoly('sub')}>-</button>
                <button className="operand-poly" data-operand="mult" onClick={() => this.operandHandlerPoly('mult')}>*</button>
                </div>
                <div id="res"></div>
                
                <textarea id="PolyResult" placeholder="Ответ"></textarea>
            <div>
                <button className="operand-result" data-operand="point" onClick={() => this.operandHandlerResult('point')}>Point</button>
            </div>
        </div>
        </div>
      </div>
    );
  }
  // ...
}

export default CalculatorComponents;
