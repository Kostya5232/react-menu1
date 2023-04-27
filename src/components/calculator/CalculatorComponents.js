import { useRef } from "react";
import useCalculator from "./useCalculator";
import usePolyCalculator from "./usePolyCalculator";

//import { Calculator, PolynomialCalculator } from "../calculator";
import "./styleCalc.css";
const CalculatorComponents = () => {
    const refA = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);
    const refPolyA = useRef(null);
    const refPolyB = useRef(null);
    const refPolyC = useRef(null);
    const refPolyD = useRef(null);
    const calc = useCalculator(refA, refB, refC);
    const calcPoly = usePolyCalculator(refPolyA, refPolyB, refPolyC, refPolyD);
    // prettier-ignore
    return (
      <div id='calc'>
        <div id="CommCalculater">
          <div className="Calculator">
              <h1>Калькулятор</h1>
              <div id="Inputs">
                  <textarea ref={refA} className = 'inputCalc' placeholder="Первое число"/>
                  <textarea ref={refB} className = 'inputCalc' placeholder="Второе число"/>
              </div>
              <div id="container">
                  <button className="operand-calc" data-operand="add" onClick={() =>calc('add')}>add</button>
                  <button className="operand-calc" data-operand="sub" onClick={() =>calc('sub')}>sub</button>
                  <button className="operand-calc" data-operand="mult" onClick={() =>calc('mult')}>mult</button>
                  <button className="operand-calc" data-operand="div" onClick={() =>calc('div')}>div</button>
                  <button className="operand-calc" data-operand="prod" onClick={() =>calc('prod')}>prod</button>
                  <button className="operand-calc" data-operand="pow" onClick={() =>calc('pow')}>pow</button>
                  <button className="operand-calc" data-operand="one" onClick={() =>calc('one')}>one</button>
                  <button className="operand-calc" data-operand="zero" onClick={() =>calc('zero')}>zero</button>
              </div>
              <textarea ref={refC} placeholder="Ответ"/>
          </div>
        </div>
        <div id="PolyCalculater">
        <div className="Polynomial">
            <h1>Полиномы</h1>
            <div id="Inputs">
                <textarea ref={refPolyA} className = 'inputCalc' placeholder="Первый полином"></textarea>
                <textarea ref={refPolyB} className = 'inputCalc' placeholder="Второй полином"></textarea>
                <textarea ref={refPolyC} type="number" id="inputX" placeholder="Значение x"></textarea>
            </div>
            <div>
                <button className="operand-poly" data-operand="add" onClick={() =>calcPoly('add')}>+</button>
                <button className="operand-poly" data-operand="sub" onClick={() =>calcPoly('sub')}>-</button>
                <button className="operand-poly" data-operand="mult" onClick={() =>calcPoly('mult')}>*</button> 
            </div>
            <textarea ref ={refPolyD}  placeholder="Ответ"></textarea>
            <div>
                <button className="operand-result" data-operand="point" onClick={() =>calcPoly('point')}>Point</button>
            </div>
        </div>
        </div>
      </div>
    );
};

export default CalculatorComponents;
