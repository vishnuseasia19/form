const {test,expect} = require('@playwright/test');
const Form = require('../pages/form');
test.only('form filling ', async({page})=>
{
    const form=new Form(page);
    await form.goto();
    await form.firstName.fill('vishnu');
    await form.lastName.fill('yadav');
    await form.email.fill('vishnu424@gmail.com');
 await page.getByRole('radio', { name: 'Male', exact: true }).check();
 await form.mobile.fill('2352524561');
 await form.calender.click();

const day = '27';
const month='April';
const year='2028';

await form.Month.selectOption({ label: month });
await form.Year.selectOption({label:year});
await page.locator(`.react-datepicker__day--0${day}`).first().click();
await form.subject.fill('Ph');
await page.getByText('Physics',{exact:true}).click();
await page.getByRole('checkbox', { name: 'Sports' }).check();
await page.getByRole('checkbox', { name: 'Reading' }).check();
await page.getByRole('checkbox', { name: 'Music' }).check();
//await page.locator('#uploadPicture').click();
await form.adress.fill('1129 adv bitta');
// state
await page.locator('#state').click();
await page.getByRole('option', { name: 'NCR' }).click();

// City
await page.locator('#city').click();
await page.getByRole('option', { name: 'Delhi' }).click();

await form.submit.click();

await expect(page.getByText('Thanks for submitting the form')).toBeVisible();

await expect(
  page.locator('//td[text()="Student Name"]/following-sibling::td')
).toHaveText('vishnu yadav');
   
await expect(page.locator('//td[text()="Student Name"]/following-sibling::td'))
  .toHaveText('vishnu yadav');

await expect(page.locator('//td[text()="Student Email"]/following-sibling::td'))
  .toHaveText('vishnu424@gmail.com');

await expect(page.locator('//td[text()="Gender"]/following-sibling::td'))
  .toHaveText('Male');

await expect(page.locator('//td[text()="Mobile"]/following-sibling::td'))
  .toHaveText('2352524561');

await expect(page.locator('//td[text()="State and City"]/following-sibling::td'))
  .toHaveText('NCR Delhi');
await page.pause();
})