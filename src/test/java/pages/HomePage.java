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
}
