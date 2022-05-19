package com.saucedemo.pages;

import com.saucedemo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutPage extends Utility {
    private static final Logger log = LogManager.getLogger(CheckoutPage.class.getName());

    public CheckoutPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[@id='checkout']")
    WebElement selectCheckOut;

    @CacheLookup
    @FindBy(xpath = "//input[@id='first-name']")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='last-name']")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='postal-code']")
    WebElement zipPostalCode;

    @CacheLookup
    @FindBy(xpath = "//input[@id='continue']")
    WebElement continueButton;

    @CacheLookup
    @FindBy(xpath = "//button[@id='finish']")
    WebElement finishButton;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'THANK YOU FOR YOUR ORDER')]")
    WebElement verifyText;

    public void goToCheckOutAndOpen() {
        log.info("go to check out and open " + selectCheckOut.getText());
        clickOnElement(selectCheckOut);
    }

    public void enterFirsatName(String name) {
        log.info("enter first name" + firstNameField.getText());
        sendTextToElement(firstNameField, name);
    }

    public void enterLastName(String surname) {
        log.info("enter first name" + lastNameField.getText());
        sendTextToElement(lastNameField, surname);
    }

    public void enterZipPostalCode(String postalCode) {
        log.info("enter zipCode " + zipPostalCode.getText());
        sendTextToElement(zipPostalCode, postalCode);
    }

    public void clickoncontinueButton() {
        log.info("click on continue Button" + continueButton);
        clickOnElement(continueButton);
    }

    public void clickonFinishButton() {
        log.info(("Verify text for Thenkyou " + finishButton));
        clickOnElement(finishButton);
    }

    public String getErrorMessage() {
        return getTextFromElement(verifyText);
    }
}