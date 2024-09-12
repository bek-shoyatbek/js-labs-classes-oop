abstract class Shape {
    public calculateArea() { }
}


class Circle extends Shape {
    constructor(private radius: number) {
        super()
        this.radius = radius;
    }
    public calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


class Rectangle extends Shape {
    constructor(private length: number, private width: number) {
        super()
        this.length = length;
        this.width = width;
    }
    public calculateArea() {
        return this.length * this.width;
    }
}

const circle = new Circle(50);
console.log("Area of Circle: ", circle.calculateArea());

const rectangle = new Rectangle(40, 40);
console.log("Area of Rectangle: ", rectangle.calculateArea());