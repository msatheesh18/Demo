package TestCases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CheckOutPageTest {

	public WebDriver wd = null;

	// * - contains, ^ starts, $ ends

	@Given("^open browser as (.*)$")
	public void openBrowser(String browser) {
		// System.out.println("----->Browser Opened
		// Successfully<-------"+browser);

		wd = new FirefoxDriver();
		wd.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		wd.manage().window().maximize();

	}

	@When("^enter URL as (.*)$")
	public void enterurl(String url) {
		// System.out.println("----->URL Entered<-------"+url);
		wd.get(url);

	}

	@Then("^verify url loaded properly$")
	public void verifyURL() {
		//System.out.println("----->URL Verified<-------");
		
		String data=wd.getTitle();
		System.out.println(data);
	}

	@When("^enter user name as (.*)$")
	public void enterusername(String username) {
		//System.out.println("----->User Name Entered<-------"+username);
		wd.findElement(By.name("username")).sendKeys(username);
		

	}

	@And("^enter password as (.*)$")
	public void enterpassword(String password) {
		// System.out.println("----->Password Entered<-------"+password);
		wd.findElement(By.name("password")).sendKeys(password);
	}

	@But("^Dont click Remember Password$")
	public void clickRemember() {
		// System.out.println("----->Dont Click remember Password<-------");
	}

	@When("^Click login Button$")
	public void clickloginButton() {
		// System.out.println("----->Click Login Button<-------");
		
		wd.findElement(By.name("password")).sendKeys(Keys.ENTER);
	}
}
