class Cart {
  elements = {
    signInButton: () => cy.getByTestId("sign-in-button"),
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
    fillEmail: (email) => this.emailInput().type(email),
  };
  emptyCart() {
    cy.get("body").then((body) => {
      if (body.find("product-title").length > 0) {
        cy.getByTestId("product-title").each(() => {
          cy.get("button.gap-x-1").click();
        });
      }
    });
  }
  cartCheckOut() {
    cy.getByTestId("checkout-button").click();
  }
}
export default new Cart();
