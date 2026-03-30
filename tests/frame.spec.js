const {test,expect} = require('@playwright/test');

test('Frame test', async ({page}) => {  
         await page.goto('https://demoqa.com/frames');
         await page.frameLocator('#frame1');
         await expect(frame.locator('#sampleHeading')).toHaveText('This is a sample page');

})