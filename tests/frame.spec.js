const {test,expect} = require('@playwright/test');

test('Frame test', async ({page}) => {  
         //await page.goto('https://demoqa.com/frames');
            await page.goto('https://demoqa.com/nestedframes');

         
        // const childFrame=page.frameLocator('#frame2');
         const parentFrame = page.frameLocator('#frame1');

          await expect(parentFrame.locator('body'))
           .toContainText('Parent frame');

           const childFrame=parentFrame.frameLocator('iframe');
              await expect(childFrame.locator('p')).toHaveText('Child Iframe');
         
        

        //  await expect(frame1.locator('#sampleHeading')).toHaveText('This is a sample page');
        //  await expect(frame2.locator('#sampleHeading')).toHaveText('This is a sample page');
         

})