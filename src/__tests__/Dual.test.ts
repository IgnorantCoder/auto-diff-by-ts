import * as UOp from '../Unary';
import * as BOp from '../Binary';
import * as Dual from '../Dual';

describe('integration test', () => {
    it('unary operator', () => {
        const x = Dual.variable(0.5);
        const y = UOp.negate(
            UOp.sqrt(UOp.log(UOp.exp(UOp.tan(UOp.sin(UOp.cos(x))))))
        );
        expect(y.x()).toEqual(-0.9839259443171812);
        expect(y.dx()).toEqual(0.3015928005470888);
    });
    it('linear function', () => {
        const x = Dual.variable(4);
        const y = BOp.sub(BOp.mul(3, x), 2);
        expect(y.x()).toEqual(10);
        expect(y.dx()).toEqual(3);
    });
    it('quadrqtic function', () => {
        const x = Dual.variable(-2);
        const y = BOp.sub(BOp.add(BOp.mul(3, BOp.mul(x, x)), BOp.mul(5, x)), 2);
        expect(y.x()).toEqual(0);
        expect(y.dx()).toEqual(-7);
    });
});
