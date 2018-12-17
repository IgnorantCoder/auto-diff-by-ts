import * as Dual from './Dual';

export function negate(x: number): number;
export function negate(x: Dual.Variable): Dual.Variable;
export function negate(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return -x;
    }
    return new Dual.Variable(-x.x(), -x.dx());
}

export function sqrt(x: number): number;
export function sqrt(x: Dual.Variable): Dual.Variable;
export function sqrt(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.sqrt(x);
    }
    return new Dual.Variable(Math.sqrt(x.x()), x.dx() / (2 * Math.sqrt(x.x())));
}

export function sin(x: number): number;
export function sin(x: Dual.Variable): Dual.Variable;
export function sin(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.sin(x);
    }
    return new Dual.Variable(Math.sin(x.x()), x.dx() * Math.cos(x.x()));
}

export function cos(x: number): number;
export function cos(x: Dual.Variable): Dual.Variable;
export function cos(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.cos(x);
    }
    return new Dual.Variable(Math.cos(x.x()), x.dx() * -Math.sin(x.x()));
}

export function tan(x: number): number;
export function tan(x: Dual.Variable): Dual.Variable;
export function tan(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.tan(x);
    }
    return new Dual.Variable(
        Math.tan(x.x()),
        x.dx() / (Math.cos(x.x()) * Math.cos(x.x()))
    );
}

export function exp(x: number): number;
export function exp(x: Dual.Variable): Dual.Variable;
export function exp(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.exp(x);
    }
    return new Dual.Variable(Math.exp(x.x()), x.dx() * Math.exp(x.x()));
}

export function log(x: number): number;
export function log(x: Dual.Variable): Dual.Variable;
export function log(x: number | Dual.Variable): number | Dual.Variable {
    if (typeof x === 'number') {
        return Math.log(x);
    }
    return new Dual.Variable(Math.log(x.x()), x.dx() / x.x());
}
