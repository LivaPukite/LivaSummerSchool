import SignUp from "../../pageElements/SignUp";

//https://tdlschool.atlassian.net/browse/TSS22N-317
describe("Mendatory field is not filled", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  it("Mendatory field is not filled", () => {
    // invalid
    SignUp.signUpFunction();
    // valid
  });

  it("check footer icon link for", () => {
    cy.getByTestId("first-name-input").then(($input) => {
      expect($input[0].validationMessage).to.include(
        `Please fill in this field.`,
      );
    });
  });
});
