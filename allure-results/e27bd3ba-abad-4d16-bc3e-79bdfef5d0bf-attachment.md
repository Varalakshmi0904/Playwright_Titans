# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/login.feature.spec.js >> Login Page - Functional Validation >> Login with invalid credentials >> Example #2
- Location: .features-gen/features/login.feature.spec.js:20:9

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

# Test source

```ts
  1  | export class LoginPage{
  2  | 
  3  | 
  4  | 
  5  |     constructor(page) {
  6  |         this.page = page;
  7  |         this.username=page.getByRole('textbox', { name: 'Username' });
  8  |         this.password=page.getByRole('textbox', { name: 'Password' });
  9  |         this.loginButton=page.getByRole('button', { name: 'Log In' })
  10 |         this.errorMessage=page.getByText('Login credentials incorrect')
  11 | }
  12 | async goto() {
  13 |         await this.page.goto('/#/Login');
  14 |     
  15 | }
  16 | async enterCredentials(username, password) {
> 17 |     await this.username.fill(username);
     |                         ^ Error: locator.fill: Test ended.
  18 |     await this.password.fill(password);
  19 |     await this.loginButton.click();
  20 | 
  21 | }
  22 | 
  23 | }
  24 | 
  25 | 
  26 | 
  27 | 
```