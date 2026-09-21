export class LoginPage{



    constructor(page) {
        this.page = page;
        this.username=page.getByRole('textbox', { name: 'Username' });
        this.password=page.getByRole('textbox', { name: 'Password' });
        this.loginButton=page.getByRole('button', { name: 'Log In' })
        this.errorMessage=page.getByText('Login credentials incorrect')
}
async goto() {
        await this.page.goto('/');
    
}
async enterCredentials(username, password) {
    await this.username.fill(String(username));
    await this.password.fill(String(password));
    await this.loginButton.click();

}

}



