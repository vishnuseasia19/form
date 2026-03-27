class form {
    constructor(page)
    {
        this.page=page;
        this.firstName=this.page.locator('#firstName');
        this.lastName=this.page.locator('#lastName');
        this.email=this.page.locator('#userEmail');
        this.checkBox=this.page.getByRole('Checkbox',{name:'Male'});
        this.mobile= this.page.locator('#userNumber');
        this.calender=this.page.locator('#dateOfBirthInput');
        this.Month=this.page.locator('.react-datepicker__month-select');
        this.Year=this.page.locator('.react-datepicker__year-select');
        this.subject=this.page.locator('#subjectsInput');
        this.adress=this.page.locator('#currentAddress');
        this.submit=this.page.locator('#submit');
    }
    async goto()
    {
        await this.page.goto('https://demoqa.com/automation-practice-form');

    }
}
module.exports =form;