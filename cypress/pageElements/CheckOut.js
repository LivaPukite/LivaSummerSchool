class CheckOut {
  elements = {
    firstNameInput: () => cy.getByTestId("shipping-first-name-input"),
    lastNameInput: () => cy.getByTestId("shipping-last-name-input"),
    adressInput: () => cy.getByTestId("shipping-address-input"),
    postalCodeInput: () => cy.getByTestId("shipping-postal-code-input"),
    cityInput: () => cy.getByTestId("shipping-city-input"),
    countrySelector: () => cy.getByTestId("shipping-country-select"),
    submitAdressButton: () => cy.getByTestId("submit-address-button"),
    fillFirstName: (firstName) => this.fillFirstName().type(firstName),
    fillLastName: (lastName) => this.fillLastName().type(lastName),
    fillAdress: (adress) => this.fillAdress().type(adress),
    fillPostalCode: (postalCode) => this.fillPostalCode().type(postalCode),
    fillCity: (city) => this.fillCity().type(city),
    deliveryOptionButton: () =>
      cy.getByTestId("delivery-option-radio").contains("FakeEx Standard"), // TODO: try to pass parameter 'option' instead of static text "FakeEx Standard"
    submitDelButton: () => cy.getByTestId("submit-delivery-option-button"),
    submitPayButton: () => cy.getByTestId("submit-payment-button"),
    submitOrderButton: () => cy.getByTestId("submit-order-button"),
  };
  fillFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
  }

  fillLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
  }

  fillAdress(adress) {
    this.elements.adressInput().clear().type(adress);
  }

  fillPostalCode(postalCode) {
    this.elements.postalCodeInput().clear().type(postalCode);
  }

  checkoutInfo(firstName, lastName, adress, postalCode, city) {
    this.elements.firstNameInput().clear().type(firstName);
    this.elements.lastNameInput().clear().type(lastName);
    this.elements.adressInput().clear().type(adress);
    this.elements.postalCodeInput().clear().type(postalCode);
    this.elements.cityInput().clear().type(city);
    cy.get('[name="shipping_address.country_code"]').select("lv");
    this.elements.submitAdressButton().click();
    this.elements.deliveryOptionButton().click();
    this.elements.submitDelButton().click();
    this.elements.submitPayButton().click();
    this.elements.submitOrderButton().click();
  }
}

export default new CheckOut();
