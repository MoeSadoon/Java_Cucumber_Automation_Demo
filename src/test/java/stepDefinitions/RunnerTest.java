package stepDefinitions;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/java/features",
		format = {"pretty", "html:target/html"}
		)
public class RunnerTest {		
}
