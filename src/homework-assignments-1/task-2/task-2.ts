export class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public validateLogin(inputPassword: string) {
        const isValidUser = this.verifyPassword(inputPassword, this.password);
        if (isValidUser) {
            return true;
        }
        return false;
    }

    private verifyPassword(inputPassword: string, actualPassword: string) {
        return inputPassword === actualPassword;
    }
}
