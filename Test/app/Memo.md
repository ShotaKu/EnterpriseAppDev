## Lecture note
### Settings for testing
1. Set apache marven 
    - Install apache marven to computer (extract zip file)
    - set path for mvn and mvn.cmd as named ```mvn```
    - run ```mvn``` to see Error message to check path existing
        - **Optional** Install java jdk and set path as ```JAVA_HOME``` because marven requre it.

2. Setting project file
   - Run ```mvn -B archetype:generate -DarchetypeGroupId=org.apache.maven.archetypes -DgroupId=app -DartifactId=my-app``` for set up project file.
   - my-app folder was created in the folder which you set name on ```DartifactId=```
   - run ```mvn package``` and ```mvn compile``` on folder which pom.xml placed.

3. Setting pom.xml for import API
   - Add selenum to project by add dependency in pom.xml
    ```xml
    <dependencies>
        <!--Already exist on pom-->
        <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        <scope>test</scope>
        </dependency>
        <!--for JUnit-->
        <!--Add selenium-->
        <dependency>
            <groupId>org.seleniumhq.selenium</groupId>
            <artifactId>selenium-java</artifactId>
            <version>3.13.0</version>
        </dependency>  
        <!--Here-->
    </dependencies>
    ```

Setting finish. Let' using selenium for testing.

## How to use selenium?
1. Install chrome driver for testing web
   -  Download from [website](https://chromedriver.storage.googleapis.com/index.html?path=2.43/)
   -  Extract zip file on your computer
2. Write testing code on my-app/src/test/java/app/AppTest.java
   - Call setPropaty for set chrome driver for start testing.
    ```Java
    System.setProperty("webdriver.chrome.driver", "c:/dev/chromedriver.exe");
    //System.setProperty("webdriver.chrome.driver", "directory where you extract chrome driver");
    ``` 
    - Write testing code e.g.
    ```Java
    WebDriver driver = new ChromeDriver();
    driver.get("http://www.google.com/xhtml");
    Thread.sleep(5000); // Let the user actually see something!
    WebElement searchBox = driver.findElement(By.name("q"));
    searchBox.sendKeys("ChromeDriver");
    searchBox.submit();
    Thread.sleep(5000); // Let the user actually see something!
    driver.quit();
    ``` 
    - This code mean...
        1. Open google chrome
        2. Go to **http://www.google.com/xhtml**
        3. Find search box by name **q**
        4. Enter **ChromeDriver** in the search box
        5. submit and search.
        6. quit from google chrome

## Tips
   - Java annotation ```@Test``` for testing maethod
   - Java annotation ```@Before``` will be called evrytime before call ```@Test``` method.
   - Java annotation ```@After``` will be called everytime after call ```@Test``` method.
    