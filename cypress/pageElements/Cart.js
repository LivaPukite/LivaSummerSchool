class Cart {
  elements = {
    signInButton: () => cy.getByTestId("sign-in-button"),
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
    fillEmail: (email) => this.emailInput().type(email),
    codeButtton: () => cy.getByTestId("add-discount-button"),
    discountIn: () => cy.getByTestId("discount-input"),
    discountApply: () => cy.getByTestId("discount-apply-button"),
  };

  //empties the cart
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

  applyCode() {
    this.elements.codeButtton().click();
    this.elements.discountIn().clear({ force: true }).type("SUMMERSCHOOL");
    this.elements.discountApply().click();
  }

  //Searching if there already is filled discount code and delete it
  emptyCode() {
    cy.get("body").then((body) => {
      if ((body.find("discount-code").length = 1)) {
        cy.getByTestId("remove-discount-button").click();
      }
    });
  }
}
export default new Cart();
