package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage extends AbstractPage {

	public HomePage(WebDriver driver){
		super(driver);
	}
	
	public SignInPage clickOnSignIn(){
		driver.findElement(By.className("login")).click();
		return new SignInPage(driver);
	}
	
	public ContactPage clickOnContact(){
		driver.findElement(By.id("contact-link")).click();
		return new ContactPage(driver);
	}
}
