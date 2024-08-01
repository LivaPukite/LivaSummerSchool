import Login from "../../pageElements/Login";
import SignUp from "../../pageElements/SignUp";

//https://tdlschool.atlassian.net/browse/TSS22N-318
describe("Sign up with already used email", () => {
  beforeEach(() => {});

  it("Sign up with already used email", () => {
    cy.visit("/sign-up");
    cy.getByTestId("first-name-input").type("ugis");
    cy.getByTestId("last-name-input").type("kugis");
    Login.elements.emailInput().type("maksis.paksis@gmail.com");
    Login.elements.passwordInput().type("abc");
    SignUp.elements.joinButton().click();
    cy.getByTestId("register-error");
  });
});
