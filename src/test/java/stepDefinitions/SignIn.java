package stepDefinitions;

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

	@When("^If I click on Sign In$")
	public void if_I_click_on() throws Throwable {
		Navbar navbar = new Navbar(driver);
	    signInPage = navbar.clickOnSignIn();
	}

	@When("^I fill in my details and submit$")
	public void i_fill_in_my_details_and_submit() throws Throwable {
	    signInPage.enterEmail("moe@test.com");
	    signInPage.enterPassword("testtest");
	    accountPage = signInPage.submitLogin();
	}

	@Then("^I should be directed to my account summary page$")
	public void i_should_be_directed_to_my_account_summary_page() throws Throwable {
	    accountPage.isLoggedIn();
	}
		
	//This step definition is specifically for test cases where being logged in is a pre-requisite.
	@And("^I am logged in$")
	public void log_in(){
		signInPage = new SignInPage(driver);
		signInPage.LogIn("moe@test.com", "testtest");
	}


}
