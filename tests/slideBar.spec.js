const {test,expect} = require('@playwright/test');

test('SlideBar test', async ({ page }) => {
  await page.goto('https://demoqa.com/slider');

  const slider = page.locator('#slider');

  await slider.evaluate(el => {
    el.value = 50;
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });

  await expect(slider).toHaveValue('50');
});