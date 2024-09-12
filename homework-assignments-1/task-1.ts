export abstract class Shape {
    public calculateArea() { }
}


export class Circle extends Shape {
    constructor(private radius: number) {
        super()
        this.radius = radius;
    }
    public calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


export class Rectangle extends Shape {
    constructor(private length: number, private width: number) {
        super()
        this.length = length;
        this.width = width;
    }
    public calculateArea() {
        return this.length * this.width;
    }
}