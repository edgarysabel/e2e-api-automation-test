/// <reference types="cypress" />

import HomePage from "../../support/pageObjects/homePage";
import CartPage from "../../support/pageObjects/cartPage";
import ProductPage from "../../support/pageObjects/productPage";
import NavBar from "../../support/pageObjects/navBar";

const homePage = new HomePage();
const productPage = new ProductPage();
const navBar = new NavBar();
const cartPage = new CartPage();

describe("Buy Items", function () {
  beforeEach(() => {
    cy.visit("https://demoblaze.com/");
  });

  it("TC-01: Buy Item", function () {
    homePage.selectItem("Samsung galaxy s6").click();

    //Assert product has been added
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });

    productPage.addToCart().click();
    navBar.homeBtn().click();
    homePage.selectItem("Nokia lumia 1520").click();

    //Assert product has been added
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });
    productPage.addToCart().click();
    navBar.cartBtn().click();

    //Assert added Items are Present
    cartPage.tableItemElement(1).should(($el) => {
      const text = $el.text();
      expect(text).to.satisfy(
        (text) => text === "Samsung galaxy s6" || text === "Nokia lumia 1520"
      );
    });
    cartPage.placeOrder().click();

    cartPage.nameTxtbox().type("Edgar");
    cartPage.countryTxtbox().click();
    cartPage.countryTxtbox().type("Dominican Republic");
    cartPage.cityTxtbox().type("San Cristobal");
    cartPage.cardTxtbox().type("1234567891234567");
    cartPage.monthTxtbox().type("12");
    cartPage.yearTxtbox().type("1997");
    cartPage.purchaseBtn().click();

    cartPage.titleH2().contains("Thank you for your purchase");
  });
});
