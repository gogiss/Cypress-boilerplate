import UserProfilePage from "../pageObjects/userProfilePage";

const emails = require("../fixtures/credentials.json");

describe('Juice shop logins', () => {
    it('Login with bender account. SQL injection', () => {
        const userProfilePage = new UserProfilePage();
        
        userProfilePage.login(emails.sql_injection + "'--");
        userProfilePage.navigateToUserProfilePage();
        userProfilePage.assertUserProfileIsOpened(emails.sql_injection);
    })
});