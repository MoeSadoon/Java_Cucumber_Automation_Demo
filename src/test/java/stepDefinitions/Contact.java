package stepDefinitions;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ContactPage;
import pages.Navbar;

public class Contact extends BrowserStart {
	
	Navbar navbar;
	ContactPage contact;
	List<List<String>> data;
	
	@When("^I click on Contact Us$")
	public void i_click_on_Contact_Us() throws Throwable {
	    Navbar navbar = new Navbar(driver);
	    contact =  navbar.clickOnContact();
	}

	@When("^I fill in form$")
	public void i_fill_in_form(DataTable table) throws Throwable {
		
//		List<List<String>> data = table.raw();

		data = table.raw();
		
		contact.selectHeading(data.get(1).get(1));
		contact.inputEmail(data.get(2).get(1));
		contact.inputMessage(data.get(3).get(1));
	}
	
	//Logged in user doesn't need to provide email
	@When("^I fill in form as logged in user$")
	public void i_fill_in_form_as_logged_in_user(DataTable table) throws Throwable {

		List<List<String>> data1 = table.raw();

		data = table.raw();
		
		contact.selectHeading(data1.get(1).get(1));	
		contact.inputMessage(data1.get(2).get(1));
	}


	@When("^I click Submit$")
	public void i_click_Submit() throws Throwable {
		contact.submitMessage();
	}

	@Then("^I should see a successful confirmation$")
	public void i_should_see_a_successful_confirmation() throws Throwable {
	    contact.CheckMessageConfirmation();
		System.out.println(driver.findElement(By.className("alert-success")).getText());
	}
	
	
}
