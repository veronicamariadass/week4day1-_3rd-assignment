import { chromium,test } from "@playwright/test";

test (`login salesforceapp`,async({page})=>{
    const browserInstance = await chromium.launch({headless: false,channel: "chromium"});
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
        //login
        await page.locator('#username').fill("demoSalesManager");
        await page.locator('#password').fill("crmsfa");
        await page.locator('.decorativeSubmit').click();
        //click crmsfa
        await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
        //click leads tab
        await page.locator(`//a[contains(text(),'Leads')]`).click();
        //click create lead tab
        await page.locator(`//a[contains(text(),'Create Lead')]`).click();
        //Enter company name
        await page.locator(`#createLeadForm_companyName`).fill("Cognizant");
        //Enter first name
        await page.locator(`#createLeadForm_firstName`).fill("Veronica");
        //Enter last name
        await page.locator(`#createLeadForm_lastName`).fill("M");
        //Enter create lead button
        await page.locator(`//input[@value="Create Lead"]`).click();
        //click edit button
        await page.locator(`//a[contains(text(),'Edit')]`).click();
        //update company name
        await page.locator(`#updateLeadForm_companyName`).fill("Wellsfargo");
        //click update
        await page.locator(`//input[@value='Update']`).click();




    
    

       
   
})
