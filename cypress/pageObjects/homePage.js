import BasePage from "./basePage";

export default class HomePage extends BasePage{
    constructor() {
        super();
        this.navigateToLoginPage();
    }

    buttonAccount() {
        return cy.get('#navbarAccount');
    }

    buttonNavbarLogin() {
        return cy.get('#navbarLoginButton');
    }

    clickAccountButton() {
        this.buttonAccount().click();
    }

    clickNavbarLoginButton() {
        this.buttonNavbarLogin().click();
    }

    navigateToLoginPage() {
        this.clickAccountButton();
        this.clickNavbarLoginButton();
    }
}