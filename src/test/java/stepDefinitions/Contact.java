package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ContactPage;
import pages.HomePage;

public class Contact extends BrowserStart {
	
	WebDriver driver = getDriver();
	HomePage home;
	ContactPage contact;
	
	@When("^I click on Contact Us$")
	public void i_click_on_Contact_Us() throws Throwable {
	    HomePage home = new HomePage(driver);
	    contact =  home.clickOnContact();
	}

	@When("^I fill in form$")
	public void i_fill_in_form() throws Throwable {
		contact.selectHeading("Customer service");
		contact.inputEmail("moe@test.com");
		contact.inputMessage("Hello, is anyone there?");
	}

	@When("^I click Submit$")
	public void i_click_Submit() throws Throwable {
		contact.submitMessage();
	}

	@Then("^I should see a successful confirmation$")
	public void i_should_see_a_successful_confirmation() throws Throwable {
	    //contact.CheckMessageConfirmation();
		System.out.println(driver.findElement(By.className("alert-success")).getText());
	}
	
	
}
