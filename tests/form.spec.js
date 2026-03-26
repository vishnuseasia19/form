const {test,expect} = require('@playwright/test');
const Form = require('../pages/form');
test.only('form filling ', async({page})=>
{
    const form=new Form(page);
    await form.goto();
    await page.pause();
})