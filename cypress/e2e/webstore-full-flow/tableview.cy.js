//https://tdlschool.atlassian.net/browse/TSS22N-323
describe("Table view function", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("Table view function", () => {
    cy.visit("/store");
    cy.getByTestId("table-view-btn").click();
    cy.get("h2").should("have.text", "Products table view");
  });
});
