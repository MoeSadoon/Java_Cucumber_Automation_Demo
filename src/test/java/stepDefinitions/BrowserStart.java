package stepDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserStart {
	
	protected static WebDriver driver;
	
	protected WebDriver getDriver(){
		if (driver == null){
			System.setProperty("webdriver.firefox.marionette","G:\\Users\\Geddo\\Desktop\\Webdrivers\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		return driver;
	}

}
