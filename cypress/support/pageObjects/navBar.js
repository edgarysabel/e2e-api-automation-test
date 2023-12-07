class NavBar {
  cartBtn() {
    return cy.get(".nav-link").contains("Cart");
  }
  homeBtn() {
    return cy.get(".nav-link").contains("Home");
  }
}

export default NavBar;
