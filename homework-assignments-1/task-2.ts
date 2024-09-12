class User {
    private username: string;
    private password: string;

    // ! This method is for just testing my validateLogin method
    public signUp(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public validateLogin(inputPassword: string) {
        const isValidUser = this.verifyPassword(inputPassword, this.password);
        if (isValidUser) {
            console.info("Valid User");
            return true;
        }
        console.info("Invalid User!");
        return false;
    }

    private verifyPassword(inputPassword: string, actualPassword: string) {
        return inputPassword === actualPassword;
    }
}