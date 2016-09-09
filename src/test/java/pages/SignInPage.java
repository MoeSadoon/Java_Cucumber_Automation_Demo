package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SignInPage extends AbstractPage {
	
	public SignInPage (WebDriver driver){
		super(driver);
	}
	
	public void enterEmail(String value){
		driver.findElement(By.id("email")).sendKeys(value);
	}
	
	public void enterPassword(String password){
		driver.findElement(By.id("passwd")).sendKeys(password);
	}
	
	public AccountPage submitLogin(){
		driver.findElement(By.id("SubmitLogin")).click();
		return new AccountPage(driver);
	}
	
	//Method below is condensed for the purposes of other tests where user needs to be logged in
	public AccountPage LogIn(String email, String password){
		driver.findElement(By.className("login")).click();
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.id("passwd")).sendKeys(password);
		driver.findElement(By.id("SubmitLogin")).click();
		return new AccountPage(driver);
	}
	

}
