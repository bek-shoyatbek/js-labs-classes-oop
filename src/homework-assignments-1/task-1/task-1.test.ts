import { describe, test, expect } from "@jest/globals";
import { Circle, Rectangle, Shape } from "./task-1";

describe("Task 1 test: Shape abstract class", () => {
    test("Circle should be instance of Shape", () => {
        const circle = new Circle(50);
        expect(circle).toBeInstanceOf(Shape);
    })

    test("Rectangle should be instance of Shape", () => {
        const rectangle = new Rectangle(40, 40);
        expect(rectangle).toBeInstanceOf(Shape);
    })

    test("Circle and rectangle should have calculateArea method", () => {
        const circle = new Circle(30);
        const rectangle = new Rectangle(20, 10);
        expect(typeof circle.calculateArea).toBe("function");
        expect(typeof rectangle.calculateArea).toBe("function");
    })

    test("Circle.calculateArea(20) should return 1256.64", () => {
        const circle = new Circle(20);

        const expected = "1256.64";
        const got = circle.calculateArea().toFixed(2);

        expect(got).toBe(expected)
    })

    test("Rectangle.calculateArea(20 , 10) should return 200", () => {
        const rectangle = new Rectangle(20, 10);

        const expected = 200;
        const got = rectangle.calculateArea();

        expect(got).toBe(expected)
    })

})