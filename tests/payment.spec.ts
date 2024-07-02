import { test, expect } from "@playwright/test";

test("should render payment page", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const introName = await page.locator('div[data-test="dashboard-name"]');
  const payButton = await page.locator('button[data-test="pay-total-btn"]');

  const context = await introName.textContent();
  const btnContext = await payButton.textContent();

  expect(context).toBe("Hi, Taylor");
  expect(btnContext).toBe("Pay total");
});

test("should move to payment form page", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const payButton = await page.locator('button[data-test="pay-total-btn"]');
  await payButton.click();
  const payInformation = await page.locator(
    'div[data-test="payment-information"]'
  );
  const context = await payInformation.textContent();
  expect(context).toBe("Payment Information");
});

test("should render card information", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const payButton = await page.locator('button[data-test="pay-total-btn"]');
  await payButton.click();
  const payInformation = await page.locator(
    'div[data-test="payment-information"]'
  );
  const context = await payInformation.textContent();
  expect(context).toBe("Payment Information");
  expect(await page.locator('input[name="cardNumber"]')).toBeVisible();
  expect(await page.locator('input[name="expiration"]')).toBeVisible();
  expect(await page.locator('input[name="cvv"]')).toBeVisible();
  expect(await page.locator('input[name="cardholderName"]')).toBeVisible();
  expect(await page.locator('input[name="zipCode"]')).toBeVisible();
});

test("should pay transaction with card", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const payButton = await page.locator('button[data-test="pay-total-btn"]');
  await payButton.click();
  const payInformation = await page.locator(
    'div[data-test="payment-information"]'
  );
  const context = await payInformation.textContent();
  expect(context).toBe("Payment Information");
  await page.locator('input[name="cardNumber"]').fill("1123456789012323");
  await page.locator('input[name="expiration"]').fill("0328");
  await page.locator('input[name="cvv"]').fill("234");
  await page.locator('input[name="cardholderName"]').fill("Anatolii");
  await page.locator('input[name="zipCode"]').fill("90005");
  const continueButton = await page.locator('button[data-test="continue-btn"]');
  await continueButton.click();
  const paymentOverview = await page.locator(
    'div[data-test="payment-overview"]'
  );
  expect(paymentOverview).toBeVisible();
});

test("should show error when form is not filled", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const payButton = await page.locator('button[data-test="pay-total-btn"]');
  await payButton.click();
  const payInformation = await page.locator(
    'div[data-test="payment-information"]'
  );
  const context = await payInformation.textContent();
  expect(context).toBe("Payment Information");
  const continueButton = await page.locator('button[data-test="continue-btn"]');
  await continueButton.click();
  await expect(await page.locator('p[data-test="error-label"]')).toHaveCount(5);
});
