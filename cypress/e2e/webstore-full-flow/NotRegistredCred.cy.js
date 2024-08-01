import Login from "../../pageElements/Login";

//https://tdlschool.atlassian.net/browse/TSS22N-316
describe("Log in with not registred credentials ", () => {
  beforeEach(() => {});

  it("Not registred credentials", () => {
    cy.visit("/");
    Login.elements.emailInput().type("mc.donald@gmail.com");
    Login.elements.passwordInput().type("abc");
    Login.elements.signInButton().click();
    cy.getByTestId("login-error-message");
  });
});
