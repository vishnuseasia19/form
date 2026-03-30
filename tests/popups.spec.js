const {test,expect}=require('@playwright/test');
const { time } = require('node:console');
const popups= require('../pages/popups.page');





test('popup', async ({ page }) => {

  const popup = new popups(page);

  await popup.goto();

  await popup.handleSimpleAlert();

  await popup.handleDelayedAlert();

  await popup.handleConfirmAlert();
  await popup.verifyConfirmResult('You selected Ok');

  const name = 'vishnu';
  await popup.handlePromptAlert(name);
  await popup.verifyPromptResult(name);

});

// test('popup', async ({ page }) => {
//  const popUps=new Popup(page);

//   await popUps.goto();

//   await Promise.all([
//     page.waitForEvent('dialog').then(dialog => {
//       expect(dialog.message()).toContain('You clicked a button');
//       return dialog.accept();
//     }),
    
//   ]);

 
//   const startTime = Date.now();

//   await Promise.all([
//     page.waitForEvent('dialog').then(dialog => {
//       const endTime = Date.now();
//       const timeTaken = (endTime - startTime) / 1000;

//       console.log(`Time: ${timeTaken}`);

//       expect(timeTaken).toBeGreaterThanOrEqual(5);
//       //expect(timeTaken).toBeLessThan(7);

//       expect(dialog.message()).toContain('This alert appeared after 5 seconds');

//       return dialog.accept();
//     }),
//     page.click('#timerAlertButton')
//   ]);


//   await Promise.all([
//     page.waitForEvent('dialog').then(dialog => {
//       expect(dialog.message()).toContain('Do you confirm action?');
//       return dialog.accept();
//     }),
//     page.click('#confirmButton')
//   ]);
//   await expect(page.locator("#confirmResult")).toHaveText('You selected Ok');

//  const name='vishnu';
//   await Promise.all([
//     page.waitForEvent('dialog').then(dialog => {
   
//       expect(dialog.message()).toContain('Please enter your name');
//       return dialog.accept(name);




//    }),
//    page.click('#promtButton')

//   ]);
//   await expect(page.locator('#promptResult')).toHaveText(`You entered ${name}`);

// });