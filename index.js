const {Builder, By, Key, util, WebElement} = require("selenium-webdriver");
async function example() {
let driver= await new Builder().forBrowser("firefox").build();
await driver.get("https://www.facebook.com");
//Name Declaration
//const names = ["SovTech","1234567890","SovTech123","SovTech[!@#^&(*%_)%]"," "];
//const emails = ["sovtech@company.co.za","@gmail.com","user@gmailcom","user@gmail.c","user.com"," "];
//const contactNumber = ["0108650161","161 161","161%","161abc"," "];

//const count=names.length;
//Loop
//for (let index = 0; index < count; index++) {

 //   let driver= await new Builder().forBrowser("firefox").build();
 //   await driver.get("https://www.facebook.com");
  //  await driver.findElement(By.id("email")).sendKeys(names[index]);
   
    //driver.findElement(By.id("email")).clear(names[index]);

//}
await driver.findElement(By.id("loginbutton")).click();

//Add a name
//Line ke fetsa goe adda nou
// Close browser

//await driver.quit();
}
example();