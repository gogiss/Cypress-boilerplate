export default class BasePage {
    constructor() {
        cy.visit(Cypress.env('BASE_URL'));

        this.clickCloseWelcomeBannerButton();
        this.clickCloseCookieMessageButton();
    }

    buttonCloseWelcomeBanner() {
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    buttonCloseCookieMessage() {
        return cy.get('[aria-label="dismiss cookie message"]');
    }

    clickCloseWelcomeBannerButton() {
        this.buttonCloseWelcomeBanner().click();
    }

    clickCloseCookieMessageButton() {
        this.buttonCloseCookieMessage().click();
    }
}