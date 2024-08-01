//https://tdlschool.atlassian.net/browse/TSS22N-321
describe("Social media icons redirect", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Social media icons redirect", () => {
    cy.visit("/");
    cy.getByTestId("register-button").click();
    cy.get("h1").should("have.text", "Become a Store of Excellence Member");
  });
});
