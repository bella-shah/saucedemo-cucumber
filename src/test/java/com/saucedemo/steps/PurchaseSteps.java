package com.saucedemo.steps;

import com.saucedemo.pages.CheckoutPage;
import com.saucedemo.pages.LoginPage;
import com.saucedemo.pages.ProductPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class PurchaseSteps {
    @Given("^I am on saucedemo page$")
    public void iAmOnSaucedemoPage() {
    }

    @When("^I login with credential username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void iLoginWithCredentialUsernameAndPassword(String username, String password) {
        new LoginPage().enterUserName(username);
        new LoginPage().enterPassword(password);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickonloginbutton();
    }

    @And("^I filter the products by Price \"([^\"]*)\"$")
    public void iFilterTheProductsByPrice(String msg) {
        new ProductPage().sortproductbyHighToLow(msg);
    }

    @And("^I select cheapest & costliest products and add to basket$")
    public void iSelectCheapestCostliestProductsAndAddToBasket() {
        new ProductPage().selectTheProductAndAddToCart();
    }

    @And("^I open shopping cart$")
    public void iOpenShoppingCart() {
        new ProductPage().openTheShoppingCart();
    }

    @And("^I go to checkout$")
    public void iGoToCheckout() {
        new CheckoutPage().goToCheckOutAndOpen();
    }


    @And("^I click on continue button$")
    public void iClickOnContinueButton() {
        new CheckoutPage().clickoncontinueButton();
    }

    @And("^I click on finish button$")
    public void iClickOnFinishButton() {
        new CheckoutPage().clickonFinishButton();
    }

    @Then("^I should be able to see message \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeMessage(String errorMsg) {
        Assert.assertEquals("Error message not display", errorMsg, new CheckoutPage().getErrorMessage());
    }


    @And("^I enter details firstname \"([^\"]*)\", lastName \"([^\"]*)\" and zipPostalCode \"([^\"]*)\"$")
    public void iEnterDetailsFirstnameLastNameAndZipPostalCode(String firstName, String lastName, String zipPostalCode) {
        new CheckoutPage().enterFirsatName(firstName);
        new CheckoutPage().enterLastName(lastName);
        new CheckoutPage().enterZipPostalCode(zipPostalCode);
    }
}

