const testdata = require("../../fixtures/testdata.json");

export class CommonPageObject {
    Element_h2: string = 'h2'
    public click_Menu_Link(menu: string) {
        cy.contains(menu).click();
    }
    public validate_Header_Text(page: string) {
        cy.get(this.Element_h2).should(
            "contain.text",
            page
        );
    }

}