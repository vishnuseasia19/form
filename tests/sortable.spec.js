// const { test, expect } = require('@playwright/test');

// test('Sortable test', async ({ page }) => {
//   await page.goto('https://demoqa.com/sortable');
// const source = page.locator('text=One');
// const target = page.locator('text=Three');

// const sourceBox = await source.boundingBox();
// const targetBox = await target.boundingBox();

// await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
// await page.mouse.down();

// await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);

// await page.mouse.up();
// });

const { test, expect } = require('@playwright/test');

test('Sortable test', async ({ page }) => {
  await page.goto('https://demoqa.com/sortable');



// const source = list.locator('div', { hasText: 'One' });
//   const target = list.locator('div',{hasText: "Three"});
const source = page.locator('.list-group-item', { hasText: 'One' });
const target = page.locator('.list-group-item', { hasText: 'Three' });

await source.dragTo(target);


  await page.pause();
});