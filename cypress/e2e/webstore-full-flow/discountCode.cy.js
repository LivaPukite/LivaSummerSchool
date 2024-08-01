import Cart from "../../pageElements/Cart";
import Product from "../../pageElements/Product";
import Logout from "../../pageElements/Logout";

//https://tdlschool.atlassian.net/browse/TSS22N-318
describe("Apply discount code", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  it("empties discount field", () => {
    cy.visit("/cart");
    Cart.emptyCode();
    Cart.elements.codeButtton().should("be.visible");
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-161
  it("cleanup items in cart", () => {
    cy.visit("/cart");
    Cart.emptyCart();
    cy.get("h1").should("contain", "Cart");
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-143
  it("selects product from store", () => {
    cy.visit("/store");
    Product.addProduct();
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-322
  it("Apply discount code", () => {
    cy.visit("/cart");
    Cart.applyCode();
    cy.getByTestId("cart-discount");
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-307
  it("logs out", () => {
    cy.visit("/dashboard");
    Logout.logout();
    cy.url().should("include", "/us/sign-in");
  });
});
