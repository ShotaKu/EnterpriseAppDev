package app;

import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import java.lang.Thread.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Unit test for simple App.
 */
public class AppTest {
    App app;
    @Before
    public void setup() {
        app = new App();
    }

    // @Test
    // public void testAssess1() {
    //     App app = new App();
    //     boolean expectedResult = app.assess(50);
    //     assertTrue(expectedResult);
    // }

    // @Test
    // public void testAssess2() {
    //     App app = new App();
    //     boolean expectedResult = app.assess(0);
    //     assertFalse(expectedResult);
    // }

    // @Test
    // public void testAssess3() {
    //     App app = new App();
    //     boolean expectedResult = app.assess(80);
    //     assertTrue(expectedResult);
    // }

    @Test
    public void testGradeF() {
        testGrade(0, 25,"F");
        
    }

    @Test
    public void testGradeC() {
        testGrade(25, 50,"C");
    }

    @Test
    public void testGradeB() {
        testGrade(50, 75,"B");
    }

    @Test
    public void testGradeA() {
        testGrade(75, 101,"A");
    }

    @Test
    public void testGradeErrorMinus() {
        testGrade(-1, 0,"ERROR");
    }

    @Test
    public void testGradeErrorOutOfRange() {
        testGrade(101, 102,"ERROR");
    }
    

    private void testGrade(int fromInclusive, int toExclusive, String expectedResult){
        int i = fromInclusive;
        while(i<toExclusive){
            String grade = app.grade(i);
            assertEquals(expectedResult,grade);
            i++;
        }
        System.out.println("Finish check: " + new Throwable().getStackTrace()[1].getMethodName());
    }

    @Test
    public void testGoogleSearch() throws InterruptedException {
        // Optional, if not specified, WebDriver will search your path for chromedriver.
        System.setProperty("webdriver.chrome.driver", "c:/dev/chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.get("http://www.google.com/xhtml");
        Thread.sleep(5000); // Let the user actually see something!
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("ChromeDriver");
        searchBox.submit();
        Thread.sleep(5000); // Let the user actually see something!
        driver.quit();
    }
}
