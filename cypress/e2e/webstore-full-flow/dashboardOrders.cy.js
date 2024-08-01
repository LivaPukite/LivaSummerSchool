//https://tdlschool.atlassian.net/browse/TSS22N-324
describe("Dashboard orders functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Dashboard orders functionality", () => {
    cy.visit("/dashboard");
    cy.get("orders-link", { timeout: 10000 }).should("be.visible").click();
    cy.get("h1").should("have.text", "Orders");
  });
});
