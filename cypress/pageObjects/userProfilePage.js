import LoginPage from "./loginPage";

export default class UserProfilePage extends LoginPage{
    constructor() {
        super();
    }

    buttonNavbarAccount() {
        return cy.get('#navbarAccount');
    }

    buttonAccountDropdownUserProfile() {
        return cy.get('[aria-label="Go to user profile"]').last();
    }

    clickNavbarAccountButton() {
        this.buttonNavbarAccount.click();
    }

    clickGoToUserProfileButton() {
        this.buttonAccountDropdownUserProfile().click();
    }

    navigateToUserProfilePage() {
        this.clickAccountButton();
        this.clickGoToUserProfileButton();
    }

    assertUserProfileIsOpened(email) {
        cy.url().should('equal', `${Cypress.env('BASE_URL')}profile`);
        cy.get('h1').should('have.text', 'User Profile');
        this.inputEmail().should('have.attr', 'value', email);
    }
}