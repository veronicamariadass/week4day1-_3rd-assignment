package Week4Day1;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class salesforce {
	public static void main (String[] args) {
		WebDriverManager.chromedriver().setup();
		ChromeDriver driver=new ChromeDriver();
		driver.get("https://login.salesforce.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5000));
	//username
		driver.findElement(By.id("username")).sendKeys("ramkumar.ramaiah@testleaf.com");
	//password
		driver.findElement(By.id("password")).sendKeys("Password#123");
		driver.findElement(By.id("Login")).click();
	//login the button
		driver.findElement(By.xpath("//span[text()='Learn More']")).click();

		//Switch to next window using Windowhandles
		Set<String> SecondWindowHandles = driver.getWindowHandles();
		List<String>listHandle=new ArrayList<String>(SecondWindowHandles);
		driver.switchTo().window(listHandle.get(1));
		
		//click on the confirm button to the redirecting page
		driver.findElement(By.xpath("//button[text()='Confirm']")).click();
		
		//Get the title
		String title = driver.getTitle();
		System.out.println(title);
		
		//Get back to the parent window
		driver.switchTo().window(listHandle.get(0));
	
		//close the browser
		driver.close();
}

	}
	
		

