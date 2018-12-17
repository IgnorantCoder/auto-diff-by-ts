export const variable = (x: number): Variable => {
    return new Variable(x);
};

export class Variable {
    constructor(private _x: number, private _dx: number = 1) {}

    public x(): number {
        return this._x;
    }

    public dx(): number {
        return this._dx;
    }
}
