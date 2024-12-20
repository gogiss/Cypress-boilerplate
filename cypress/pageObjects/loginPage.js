import HomePage from "./homePage";

export default class LoginPage extends HomePage{
    constructor() {
        super();
    }

    inputEmail() {
        return cy.get('#email');
    }

    inputPassword() {
        return cy.get('#password');
    }

    buttonLogin() {
        return cy.get('#loginButton');
    }

    typeInUsername(username) {
        this.inputEmail().clear().type(username);
    }

    typeInPassword(password) {
        this.inputPassword().clear().type(password);
    }

    submitLoginForm() {
        this.buttonLogin().click();
    }

    login(username, options = {}) {
        let password = options.password ?? Cypress.env('PASSWORD');

        this.typeInUsername(username);
        this.typeInPassword(password);
        this.submitLoginForm();
    }
}