import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './Utils/playwright-dev-page';
import { classMyCustProfile } from './my_profile/plClass';

let validUser = 'qa.test02@gmail.com';
let validPassword = 'Test1234!';
let urlLogin = 'https://dev-web-frontend.firster.kpc-dev.com/profile';
let urlProfile = 'https://dev-web-frontend.firster.kpc-dev.com/profile';
let urlWelcomeBack = 'https://dev-web-frontend.firster.kpc-dev.com/login/welcome-back';
let urlFirster: string = 'https://dev-web-frontend.firster.kpc-dev.com/';

test.beforeEach('Login', async({page}, testInfo)=> {
    //const plOjMyCust02ProfDetail: classMyCustProfile;
    //await page.goto(urlLogin);

    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 30000);

    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto('/profile');

    console.log(validUser);      
    console.log(validPassword);

    // await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    // await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    // await page.waitForLoadState('load');

    // await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    // await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    // await page.waitForLoadState('load');
});

test('my-profile', async ({page}) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'Female',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    playwrightDev.goto('/profile');
    //playwrightDev.goto();

    await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    await page.waitForLoadState('load');

    await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    //playwrightDev.goto('/my-address');
    await page.goto('/profile');
    //playwrightDev.goto('/profile');
    // Wait for the final URL to ensure that the cookies are actually set.
    //await page.waitForURL('/my-address');

});

test('my-address', async ({page}) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'Female',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    playwrightDev.goto('/my-address');
    //playwrightDev.goto();

    await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    await page.waitForLoadState('load');

    await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    //playwrightDev.goto('/my-address');
    await page.goto('/my-address');
    //playwrightDev.goto('/profile');
    // Wait for the final URL to ensure that the cookies are actually set.
    //await page.waitForURL('/my-address');

});

test('my-order', async ({page}) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'Female',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    playwrightDev.goto('/my-order');
    //playwrightDev.goto();

    await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    await page.waitForLoadState('load', {'timeout': 60000});

    await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    //playwrightDev.goto('/my-address');
    await page.goto('/my-order');
    //playwrightDev.goto('/profile');
    // Wait for the final URL to ensure that the cookies are actually set.
    //await page.waitForURL('/my-address');

});

test('my-wishlist', async ({page}) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'Female',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    playwrightDev.goto('/my-wishlist');
    //playwrightDev.goto();

    await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    await page.waitForLoadState('load');

    await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    //playwrightDev.goto('/my-address');
    await page.goto('/my-wishlist');
    //playwrightDev.goto('/profile');
    // Wait for the final URL to ensure that the cookies are actually set.
    //await page.waitForURL('/my-address');

});

test('my-card', async ({page}) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'Female',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    playwrightDev.goto('/my-card');
    //playwrightDev.goto();

    await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    await page.waitForLoadState('load');

    await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    //playwrightDev.goto('/my-address');
    await page.goto('/my-card');
    //playwrightDev.goto('/profile');
    // Wait for the final URL to ensure that the cookies are actually set.
    //await page.waitForURL('/my-address');

});