class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    static getSquare(width, length) {
        return width * length;
    }
    static getPerimeter(width, length) {
        return width *2 + length * 2;
    }
    static getRatio(width, length) {
        return (width * length) / (width * 2 + length * 2);
    }

}
var r = new Rectangle(3, 4);

console.log(Rectangle.getSquare(10, 20));
console.log(Rectangle.getPerimeter(10, 20));
console.log(Rectangle.getRatio(10, 20));

