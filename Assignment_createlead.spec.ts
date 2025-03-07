import { test } from "@playwright/test";
test (`login salesforceapp`,async({page})=>{
    await page.goto("https://login.salesforce.com/")
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("vidyar@testleaf.com")
    await page.locator("#password").fill("Sales@123")
    await page.locator("#Login").click()
    //toggle menu 
    await page.waitForTimeout(3000);

    //Clicking on toggle menu
    await page.locator(`//*[@title="App Launcher"]`).click();
    
    //Clicking on View All button
    await page.locator(`//button[contains(text(),'View All')]`).click();
    
    //Click on Sales tab
    await page.locator(`//p[text()='Sales']`).click();
    await page.waitForTimeout(5000);
    //Click on leads tab
    await page.locator(`//a[@href="/lightning/o/Lead/home"]`).click();
    await page.waitForTimeout(5000);
    //click on new tab
    await page.locator(`//a[@title="New"]`).click();
    //click on salutation
    await page.locator(`//button[@name="salutation"]`).click();
    //ente last name
    await page.locator(`//input[@name="lastName"]`).fill("Veronica");
    //enter company name
    await page.locator(`//input[@name="Company"]`).fill("Cognizant");
    //click save button
    await page.locator(`//button[@name="SaveEdit"]`).click();
    //verify leads name created
    if(await(page.locator(`//*[text()="Mrs. veronica veronica"]`).isVisible()))
        await console.log('Created sales lead was created');


    






})











