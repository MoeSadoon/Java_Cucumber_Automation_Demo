package pages;

import org.openqa.selenium.WebDriver;

import org.junit.Assert;

public class AccountPage extends AbstractPage {
	
	public AccountPage(WebDriver driver){
		super(driver);
	}
	
	public void isLoggedIn(){
		Assert.assertTrue(driver.getTitle().equals("My account - My Store"));
	}
}
