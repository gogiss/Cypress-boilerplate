import * as allure from "allure-js-commons";
import UserProfilePage from "../pageObjects/userProfilePage";

const emails = require("../fixtures/credentials.json");

describe('Juice shop logins', () => {
    it('Login with bender account. SQL injection', () => {
        allure.severity("critical");
        const userProfilePage = new UserProfilePage();
        
        userProfilePage.login(emails.sql_injection + "'--");
        userProfilePage.navigateToUserProfilePage();
        userProfilePage.assertUserProfileIsOpened(emails.sql_injection);
    });

    
    it('Login with bender account. SQL injection. Failing test to check if screenshot is displayed correctly', () => {
        allure.severity("critical");
        const userProfilePage = new UserProfilePage();
        
        userProfilePage.login(emails.sql_injection + "'--");
        cy.get('#fail here').click();
        userProfilePage.navigateToUserProfilePage();
        userProfilePage.assertUserProfileIsOpened(emails.sql_injection);
    })
});