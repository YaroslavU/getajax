class Circle {
    #r;
    constructor(cx, cy, r) {
        this.cx = cx;
        this.cy = cy;
        this.#r = r;
    }
    static create(cx, cy, r) {
        var c = new Circle(cx, cy, r);
        return c;
    }
    static square(r) {
        var s = Math.PI * Math.pow(r, 2);
        return s;
    }
    static length(r) {
        var l = Math.PI * 2 * r;
        return l;
    }
}

var a = new Circle(5, 5, 8);
var c = Circle.create(5, 5, 8);
console.log(Circle.square(10));
console.log(Circle.length(10));