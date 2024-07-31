import Cart from "../../pageElements/Cart";
import CheckOut from "../../pageElements/CheckOut";
import Logout from "../../pageElements/Logout";
import Product from "../../pageElements/Product";

//https://tdlschool.atlassian.net/browse/TSS22N-262
describe("end-to-end user flow", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");
  const FIRSTNAME = Cypress.env("firstName");
  const LASTNAME = Cypress.env("lastName");
  const ADRESS = Cypress.env("adress");
  const POSTALCODE = Cypress.env("postalCode");
  const CITY = Cypress.env("city");

  //https://tdlschool.atlassian.net/browse/TSS22N-313
  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-161
  it("cleanup items in cart", () => {
    cy.visit("/cart");
    Cart.emptyCart();
    cy.get("h1").should("have.text", "Cart");
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-143
  it("selects product from store", () => {
    cy.visit("/store"); // arrange
    Product.addProduct(); // act
    cy.get("h1").should("have.text", "Cart"); // assert
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-186
  it("goes to cart & checkout", () => {
    cy.visit("/cart");
    Cart.cartCheckOut();
    cy.url().should("include", "checkout");
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-218
  it("fills checkout details", () => {
    cy.visit("/checkout?step=address");
    CheckOut.checkoutInfo(FIRSTNAME, LASTNAME, ADRESS, POSTALCODE, CITY);
    cy.get("h1").should(
      "have.text",
      "Thank you!Your order was placed successfully.",
    );
  });

  //https://tdlschool.atlassian.net/browse/TSS22N-307
  it("logs out", () => {
    cy.visit("/dashboard");
    Logout.logout();
    cy.url().should("include", "/us/sign-in");
  });
});
