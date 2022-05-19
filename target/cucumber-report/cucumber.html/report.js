$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Search functionality",
  "description": "As a user I want to purchase cheapest and costliest product from the saucedemo after sorting the products by Hight to Low filter.",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 3065684100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User navigates saucedemo page and complete the item purchas",
  "description": "",
  "id": "search-functionality;user-navigates-saucedemo-page-and-complete-the-item-purchas",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on saucedemo page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login with credential username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I filter the products by Price \"high to low\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select cheapest \u0026 costliest products and add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I open shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I go to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter details firstname \"Bella\", lastName \"Shah\" and zipPostalCode \"HA0 4BY\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on finish button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see message \"THANK YOU FOR YOUR ORDER\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PurchaseSteps.iAmOnSaucedemoPage()"
});
formatter.result({
  "duration": 80545400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 34
    },
    {
      "val": "secret_sauce",
      "offset": 63
    }
  ],
  "location": "PurchaseSteps.iLoginWithCredentialUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 212025400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 114401400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "high to low",
      "offset": 32
    }
  ],
  "location": "PurchaseSteps.iFilterTheProductsByPrice(String)"
});
formatter.result({
  "duration": 138239600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iSelectCheapestCostliestProductsAndAddToBasket()"
});
formatter.result({
  "duration": 113706600,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iOpenShoppingCart()"
});
formatter.result({
  "duration": 82445800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iGoToCheckout()"
});
formatter.result({
  "duration": 71731300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bella",
      "offset": 27
    },
    {
      "val": "Shah",
      "offset": 45
    },
    {
      "val": "HA0 4BY",
      "offset": 70
    }
  ],
  "location": "PurchaseSteps.iEnterDetailsFirstnameLastNameAndZipPostalCode(String,String,String)"
});
formatter.result({
  "duration": 230537200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 57349200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.iClickOnFinishButton()"
});
formatter.result({
  "duration": 47636100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 33
    }
  ],
  "location": "PurchaseSteps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 26681600,
  "status": "passed"
});
formatter.after({
  "duration": 770484500,
  "status": "passed"
});
});