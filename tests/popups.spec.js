const {test,expect}=require('@playwright/test');

test('popup', async({page})=>{
    await page.goto('https://demoqa.com/alerts');
 await page.locator("//button[@id='alertButton']").click();
 await page.on('dialog',dialog=>dialog.accept());
 await page.pause();
})