import { Calculator, PolynomialCalculator } from '../calculator';

export default function useCalculator(refA, refB, refC, refPolyA, refPolyB, refPolyC) {
  const calc = new Calculator();
  const calcPoly = new PolynomialCalculator();

  console.log(refA);

  return (operand) => {
    if (refA && refB && refC) {
      const A = refA.current.value;
      const B = refB.current.value;
      refC.current.value = calc[operand](calc.getEntity(A), calc.getEntity(B));
      refC.toString();
    }
    if (refPolyA && refPolyB && refPolyC) {
      const A = refPolyA.current.value;
      const B = refPolyB.current.value;
      refPolyC.current.value = calcPoly[operand](calcPoly.getPolynomial(A), calcPoly.getPolynomial(B));
    }
  };
}
