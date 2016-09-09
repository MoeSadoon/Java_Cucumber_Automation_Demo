package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class ContactPage extends AbstractPage {

	public ContactPage(WebDriver driver){
		super(driver);
	}
	
	public void selectHeading(String value){
		Select select = new Select(driver.findElement(By.id("id_contact")));
		select.selectByVisibleText(value);
	}
	
	public void inputEmail(String email){
		driver.findElement(By.id("email")).sendKeys(email);
	}
	
	public void inputMessage(String message){
		driver.findElement(By.id("message")).sendKeys(message);
	}
	
	public void submitMessage(){
		driver.findElement(By.id("submitMessage")).click();
	}
	
	public void CheckMessageConfirmation(){
		Assert.assertTrue(driver.findElement(By.className("alert-success"))
				.getText().equals("Your message has been successfully sent to your team."));
	}
	
	
}
