class form {
    constructor(page)
    {
        this.page=page;
        this.firstName=this.page.locator('#firstName');
        this.lastName=this.page.locator('#lastName');
        this.email=this.page.locator('#userEmail');
        this.checkBox=this.page.getByRole('Checkbox',{name:'Male'});

    }
    async goto()
    {
        await this.page.goto('https://demoqa.com/automation-practice-form');

    }
}
module.exports =form;