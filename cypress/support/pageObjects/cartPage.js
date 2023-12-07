class CartPage {
  tableItemElement(id) {
    return cy.get(`#tbodyid > :nth-child(${id}) > :nth-child(2)`);
  }
  placeOrder() {
    return cy.get('[data-target="#orderModal"]');
  }

  //Place Order modal
  nameTxtbox() {
    return cy.get("#name");
  }
  countryTxtbox() {
    return cy.get("#country");
  }
  cityTxtbox() {
    return cy.get("#city");
  }
  cardTxtbox() {
    return cy.get("#card");
  }
  monthTxtbox() {
    return cy.get("#month");
  }
  yearTxtbox() {
    return cy.get("#year");
  }
  purchaseBtn() {
    return cy.contains("Purchase");
  }
  titleH2() {
    return cy.get("h2");
  }
}

export default CartPage;
