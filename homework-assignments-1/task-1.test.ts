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

    
})