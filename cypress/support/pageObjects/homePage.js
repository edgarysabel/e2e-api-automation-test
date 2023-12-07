class HomePage {
  selectItem(name) {
    return cy.get(".card-title > .hrefch").contains(name);
  }
}

export default HomePage;
