import { PolynomialCalculator, Calculator } from "../calculator";

export default function usePolyCalculator(refPolyA, refPolyB, refPolyC, refPolyD) {
    const calc = new Calculator();
    const calcPoly = new PolynomialCalculator();

    return (operand) => {
        if (operand === "point") {
            const A = refPolyA.current.value;
            const C = refPolyC.current.value;
            refPolyD.current.value = calcPoly.getPolynomial(A).getValue(calc.getEntity(C)).toString();
        } else if (refPolyA && refPolyB && refPolyC) {
            const A = refPolyA.current.value;
            const B = refPolyB.current.value;
            refPolyA.current.value = calcPoly[operand](calcPoly.getPolynomial(A), calcPoly.getPolynomial(B));
        }
    };
}
