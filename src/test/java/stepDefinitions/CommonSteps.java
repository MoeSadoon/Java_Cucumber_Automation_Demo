package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class CommonSteps extends BrowserStart {
	
//	WebDriver driver;

	@Before
	public void setUp(){
		getDriver();
	}
	
	@After
	public void tearDown(){
		driver.close();
		driver = null;
	}
	
	@Given("^I am on the homepage$")
	public void i_am_on_the_homepage() throws Throwable {
	    driver.navigate().to("http://automationpractice.com/index.php");
	}

}
