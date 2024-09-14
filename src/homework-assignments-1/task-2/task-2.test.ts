import { describe, expect, jest, test } from "@jest/globals";
import { User } from "./task-2";

describe("Test User service", () => {
    test("User should be instance of User", () => {
        const newUser = new User("bek-shoyatbek", "hatoPwd3202");
        expect(newUser).toBeInstanceOf(User);
    })

    test("User class should have validateLogin method", () => {
        const newUser = new User("doston", "393934");
        expect(typeof newUser.validateLogin).toBe('function');
    })

    test("Can't access private username and password", () => {
        const newUser = new User("diyorbek", "030434");
        jest.replaceProperty(newUser as any, 'username', "undefined");
        jest.replaceProperty(newUser as any, 'password', "undefined");
    })

    test("validateLogin: Invalid user should return false", () => {
        const user = new User("bek-shoyatbek", "qiyinPwd005");
        const invalidUser = user.validateLogin("boshqaPwd");
        expect(invalidUser).toBe(false);
    })

    test("validateLogin: valid user should return true", () => {
        const user = new User("bek-shoyatbek", "qiyinPwd005");
        const validUser = user.validateLogin("qiyinPwd005");
        expect(validUser).toBe(true);
    })

    test("verifyUser method should not be accessible", () => {
        const newUser = new User("doston", "393934");
        expect((newUser as any).verifyUser).toBe(undefined);
    })
})