class popups {
  constructor(page) {
    this.page = page;

    // Locators
    this.alertBtn = '#alertButton';
    this.timerAlertBtn = '#timerAlertButton';
    this.confirmBtn = '#confirmButton';
    this.promptBtn = '#promtButton';

    this.confirmResult = '#confirmResult';
    this.promptResult = '#promptResult';
  }

  async goto() {
    await this.page.goto('https://demoqa.com/alerts');
  }

  async handleSimpleAlert() {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        if (!dialog.message().includes('You clicked a button')) {
          throw new Error('Wrong alert message');
        }
        return dialog.accept();
      }),
      this.page.click(this.alertBtn)
    ]);
  }

  async handleDelayedAlert() {
    const startTime = Date.now();

    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;

        console.log(`Time: ${timeTaken}`);

        if (timeTaken < 5) {
          throw new Error('Alert appeared too early');
        }

        if (!dialog.message().includes('This alert appeared after 5 seconds')) {
          throw new Error('Wrong delayed alert message');
        }

        return dialog.accept();
      }),
      this.page.click(this.timerAlertBtn)
    ]);
  }

  async handleConfirmAlert() {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        if (!dialog.message().includes('Do you confirm action?')) {
          throw new Error('Wrong confirm message');
        }
        return dialog.accept();
      }),
      this.page.click(this.confirmBtn)
    ]);
  }

  async verifyConfirmResult(expectedText) {
    await this.page.locator(this.confirmResult).waitFor();
    const text = await this.page.locator(this.confirmResult).textContent();
    if (!text.includes(expectedText)) {
      throw new Error('Confirm result mismatch');
    }
  }

  async handlePromptAlert(name) {
    await Promise.all([
      this.page.waitForEvent('dialog').then(dialog => {
        if (!dialog.message().includes('Please enter your name')) {
          throw new Error('Wrong prompt message');
        }
        return dialog.accept(name);
      }),
      this.page.click(this.promptBtn)
    ]);
  }

  async verifyPromptResult(name) {
    await this.page.locator(this.promptResult).waitFor();
    const text = await this.page.locator(this.promptResult).textContent();
    if (!text.includes(name)) {
      throw new Error('Prompt result mismatch');
    }
  }
}

module.exports = popups;