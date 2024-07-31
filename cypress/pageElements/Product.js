class Product {
  elements = {
    shirtButton: () => cy.get('[href="/us/products/t-shirt"]'),
    sizeButton: () => cy.getByTestId("option-button").contains("S"),
    colourButton: () => cy.getByTestId("option-button").contains("Black"),
    addButton: () => cy.getByTestId("add-product-button"),
    cartButton: () => cy.get('[href="/us/cart"]'),
  };
  addProduct() {
    this.elements.shirtButton().click();
    cy.url().should("include", "/products/t-shirt");
    this.elements.sizeButton().click();
    this.elements.colourButton().click();
    this.elements.addButton().click();
    this.elements.cartButton().click();
  }
}

export default new Product();
