const testdata = require("../../fixtures/testdata.json");
import { Given, Then, When, And } from 'cypress-cucumber-preprocessor/steps';
import { LoginPageObject } from '../../support/pageObject/loginPage-po';
import { CommonPageObject } from '../../support/pageObject/commonPage-po';

let loginpage = new LoginPageObject();
let commonpage = new CommonPageObject();

Given("User open the-internet website", () => {
    cy.visit('/');
});

When("User clicks on {string}", (menu: string) => {
    commonpage.click_Menu_Link(menu);
});

Then("User should see {string}", (page: string) => {
    commonpage.validate_Header_Text(page)

});

When("User enters valid username and password", () => {
    loginpage.enter_credentials(testdata.username, testdata.password);
});

And("User clicks on Login Button", () => {

    loginpage.click_Login_Button();
});

Then("User should see message {string}", (message: string) => {
    loginpage.validate_Flash_message(message);

});

When("User enters invalid username and password ex : {string} and {string}", (invalidusername: string, invalidpassword: string) => {
    loginpage.enter_credentials(invalidusername, invalidpassword);
});

Then("User should click on Logout button", () => {
    loginpage.click_Logout_Button();

});



