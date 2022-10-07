const {Builder, By, Key, util, WebElement} = require("selenium-webdriver");
async function example() {
//let driver= await new Builder().forBrowser("firefox").build();
//await driver.get("https://www.sovtech.co.uk/contact-us");

//Declaration
const names = ["SovTech","1234567890","SovTech123","SovTech[!@#^&(*%_)%]"," "];
const emails = ["sovtech@company.co.za","@gmail.com","user@gmailcom","user@gmail.c","user.com"," "];
const contactNumber = ["0108650161","161 161","161%","161abc"," "];
const help= ["I'd like to work for SovTech", "I'd like to work for SovTech by 2022", "I'd like to work @ SovTech"];


const count=emails.length;
//Loop
for (let index = 0; index < count; index++) {


    let driver= await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.facebook.com/reg/?rs=27&__tn__=*F");

    //Add a name
    await driver.findElement(By.xpath("//*[@id='email']")).sendKeys(names[index]);

    //Add email address
    await driver.findElement(By.xpath("//*[@id='pass']")).sendKeys(emails[index]);
   
    
    //clear name
    //await driver.findElement(By.xpath("//*[@id='email']")).clear(names[index]);
 
}
//Submit/click the submut button
//await driver.findElement(By.xpath("//*[@id='u_0_5_xn']")).click();



// Close browser

//await driver.quit();

//Sleep

//Loop
/*for (let index = 0; index < count; index++) {


  let driver= await new Builder().forBrowser("firefox").build();
  await driver.get("https://www.sovtech.co.za/contact-us/");

  //Add a name
  await driver.findElement(By.xpath("//*[@id='your_name-c2e387f9-4bd8-496f-ab2a-81fbbc31712a']")).sendKeys(names[index]);

  //Add email address
  await driver.findElement(By.xpath("//*[@id='email-c2e387f9-4bd8-496f-ab2a-81fbbc31712a']")).sendKeys(emails[index]);
 
  
  //clear name
  //await driver.findElement(By.xpath("//*[@id='email']")).clear(names[index]);

}*/


}
example();