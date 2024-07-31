//https://tdlschool.atlassian.net/browse/TSS22N-314
describe("Redirect to Sign up", () => {
  beforeEach(() => {});

  it("cleanup items in cart", () => {
    cy.visit("/");
    cy.getByTestId("register-button").click();
    cy.get("h1").should("have.text", "Become a Store of Excellence Member");
  });
});
