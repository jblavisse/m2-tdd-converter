describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("change celsius to fahrenheit", () => {
    cy.get("#celsius").type(10);
    cy.get("#fahrenheit").should("have.value", "50");

    cy.get("#celsius").clear().type(40);
    cy.get("#fahrenheit").should("have.value", "104");
  });

  it("change fahrenheit to celsius", () => {
    cy.get("#fahrenheit").type(-40);
    cy.get("#celsius").should("have.value", "-40");

    cy.get("#fahrenheit").clear().type(41);
    cy.get("#celsius").should("have.value", "5");
  });
});
