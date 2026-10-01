# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/leads.feature.spec.js >> SuiteCRM Leads >> Create a new lead - TC001
- Location: .features-gen/features/leads.feature.spec.js:10:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Username' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e25]:
    - list [ref=e27]:
      - listitem [ref=e28]
  - generic [ref=e31]: © Supercharged by SuiteCRM © Powered By SugarCRM
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
  13 |     
  14 |         await this.page.goto('/#/Login');
  15 |     
  16 | }
  17 | async enterCredentials(username, password) {
> 18 |     await this.username.fill(username);
     |                         ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  19 |     await this.password.fill(password);
  20 |     await this.loginButton.click();
  21 | 
  22 | }
  23 | 
  24 | }
  25 | 
  26 | 
  27 | 
  28 | 
```