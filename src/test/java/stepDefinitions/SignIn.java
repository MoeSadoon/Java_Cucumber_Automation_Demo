package stepDefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AccountPage;
import pages.Navbar;
import pages.SignInPage;

public class SignIn extends BrowserStart {
	
	Navbar navbar;
	SignInPage signInPage;
	AccountPage accountPage;
	List<List<String>> data;

	@When("^If I click on Sign In$")
	public void if_I_click_on() throws Throwable {
		Navbar navbar = new Navbar(driver);
	    signInPage = navbar.clickOnSignIn();
	}

	@When("^I fill in my details and submit$")
	public void i_fill_in_my_details_and_submit(DataTable table) throws Throwable {
		data = table.raw(); 
	    signInPage.enterEmail(data.get(1).get(0));
	    signInPage.enterPassword(data.get(1).get(1));
	    accountPage = signInPage.submitLogin();
	}

	@Then("^I should be directed to my account summary page$")
	public void i_should_be_directed_to_my_account_summary_page() throws Throwable {
	    accountPage.isLoggedIn();
	}
	
	@Then("^I should get an error message$")
	public void i_should_get_an_error_message() throws Throwable {
	    signInPage.invalidLogIn();
	}

		
	//This step definition is specifically for test cases where being logged in is a pre-requisite.
	@And("^I am logged in$")
	public void log_in(){
		signInPage = new SignInPage(driver);
		signInPage.LogIn("moe@test.com", "testtest");
	}


}
