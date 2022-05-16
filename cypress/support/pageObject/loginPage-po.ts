const testdata = require("../../fixtures/testdata.json");
export class LoginPageObject {

    Element_Username: string = '#username';
    Element_Password: string = '#password';
    Element_Login_Button: string = '#login > button > i';
    Element_Logout_Button: string = 'a[href="/logout"]';
    Element_Flash_Message: string = '#flash';

    public enter_credentials(username: string, password: string) {
        cy.get(this.Element_Username).type(username);
        cy.get(this.Element_Password).type(password);
    }

    public click_Login_Button() {
        cy.get(this.Element_Login_Button).click();
    }
    public click_Logout_Button() {
        cy.get(this.Element_Logout_Button).should('be.visible').click();
    }
    public validate_Flash_message(message: string) {
        cy.get(this.Element_Flash_Message).should(
            "contain.text",
            message
        );
    }

}