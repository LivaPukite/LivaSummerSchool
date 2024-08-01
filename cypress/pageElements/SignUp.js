class SignUp {
  elements = {
    firstNameIn: () => cy.getByTestId("first-name-input"),
    lastNameIn: () => cy.getByTestId("last-name-input"),
    emailIn: () => cy.getByTestId("email-input"),
    passwordIn: () => cy.getByTestId("password-input"),
    joinButton: () => cy.getByTestId("register-button"),
  };
  signUpFunction() {
    this.elements.firstNameIn().clear();
    this.elements.lastNameIn().clear().type("Hulla");
    this.elements.emailIn().type("hoop.hulla@gmail.com");
    this.elements.passwordIn().type("1234");
    this.elements.joinButton().click();
  }
}

export default new SignUp();
