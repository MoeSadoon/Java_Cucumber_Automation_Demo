package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AccountPage;
import pages.HomePage;
import pages.SignInPage;

public class SignIn extends BrowserStart {
	
	WebDriver driver = getDriver();
	HomePage homePage;
	SignInPage signInPage;
	AccountPage accountPage;
	
	@Given("^I am on the homepage$")
	public void i_am_on_the_homepage() throws Throwable {
	    driver.navigate().to("http://automationpractice.com/index.php");
	}

	@When("^If I click on \"(.*?)\"$")
	public void if_I_click_on(String value) throws Throwable {
		HomePage homePage = new HomePage(driver);
	    signInPage = homePage.clickOnSignIn();
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

}
