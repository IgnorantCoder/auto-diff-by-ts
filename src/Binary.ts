import * as Dual from './Dual';

export function add(x: number, y: number): number;
export function add(x: Dual.Variable, y: number): Dual.Variable;
export function add(x: number, y: Dual.Variable): Dual.Variable;
export function add(x: Dual.Variable, y: Dual.Variable): Dual.Variable;
export function add(
    x: number | Dual.Variable,
    y: number | Dual.Variable
): number | Dual.Variable {
    if (typeof x === 'number') {
        if (typeof y === 'number') {
            return x + y;
        }
        return new Dual.Variable(x + y.x(), y.dx());
    }
    if (typeof y === 'number') {
        return new Dual.Variable(x.x() + y, x.dx());
    }
    return new Dual.Variable(x.x() + y.x(), x.dx() + y.dx());
}

export function sub(x: number, y: number): number;
export function sub(x: Dual.Variable, y: number): Dual.Variable;
export function sub(x: number, y: Dual.Variable): Dual.Variable;
export function sub(x: Dual.Variable, y: Dual.Variable): Dual.Variable;
export function sub(
    x: number | Dual.Variable,
    y: number | Dual.Variable
): number | Dual.Variable {
    if (typeof x === 'number') {
        if (typeof y === 'number') {
            return x - y;
        }
        return new Dual.Variable(x - y.x(), -y.dx());
    }
    if (typeof y === 'number') {
        return new Dual.Variable(x.x() - y, x.dx());
    }
    return new Dual.Variable(x.x() - y.x(), y.dx() - y.dx());
}

export function mul(x: number, y: number): number;
export function mul(x: Dual.Variable, y: number): Dual.Variable;
export function mul(x: number, y: Dual.Variable): Dual.Variable;
export function mul(x: Dual.Variable, y: Dual.Variable): Dual.Variable;
export function mul(
    x: number | Dual.Variable,
    y: number | Dual.Variable
): number | Dual.Variable {
    if (typeof x === 'number') {
        if (typeof y === 'number') {
            return x * y;
        }
        return new Dual.Variable(x * y.x(), x * y.dx());
    }
    if (typeof y === 'number') {
        return new Dual.Variable(x.x() * y, x.dx() * y);
    }
    return new Dual.Variable(x.x() * y.x(), x.x() * y.dx() + y.x() * x.dx());
}

export function div(x: number, y: number): number;
export function div(x: Dual.Variable, y: number): Dual.Variable;
export function div(x: number, y: Dual.Variable): Dual.Variable;
export function div(x: Dual.Variable, y: Dual.Variable): Dual.Variable;
export function div(
    x: number | Dual.Variable,
    y: number | Dual.Variable
): number | Dual.Variable {
    if (typeof x === 'number') {
        if (typeof y === 'number') {
            return x / y;
        }
        return new Dual.Variable(x / y.x(), -x / (y.dx() * y.dx()));
    }
    if (typeof y === 'number') {
        return new Dual.Variable(x.x() / y, x.dx() / y);
    }
    return new Dual.Variable(x.x() / y.x(), y.x() * x.dx() - x.x() * y.dx());
}
