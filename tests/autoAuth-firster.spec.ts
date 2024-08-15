import { test, expect, TestInfo } from '@playwright/test';
import { PlaywrightDevPage } from './Utils/playwright-dev-page';
import { classMyCustProfile, classMyCustAddress } from './my_profile/plClass';
import { label, attachment } from "allure-js-commons";  //--- 08/08/2024, Test by Robot
import { link, issue } from "allure-js-commons";  //--- 08/08/2024, Test by Robot
//import { log } from 'console';


let validUser = 'qa.test02@gmail.com';
let validPassword = 'Test1234!';
let urlLogin = 'https://dev-web-frontend.firster.kpc-dev.com/profile';
let urlProfile = 'https://dev-web-frontend.firster.kpc-dev.com/profile';
let urlWelcomeBack = 'https://dev-web-frontend.firster.kpc-dev.com/login/welcome-back';
let urlFirster: string = 'https://dev-web-frontend.firster.kpc-dev.com/';

//--- 2024-08-15, By Robot for pushing project to git repository
test.describe('Using Authentication Status', () => {

  //--- Without configuration it will be parallel mode
  // test.describe.configure({mode: 'parallel'});
  // test.describe.configure({mode: 'serial'});
  //test.describe.configure({'mode': 'default'})  //--- It will be serial mode

  test.afterEach(async ({page}) => {
    console.log(`Finished ${test.info().title} with status ${test.info().status}`);
      
    if (test.info().status !== test.info().expectedStatus)
       console.log(`Did not run as expected, ended up at ${page.url()}`);
  });

  test('Page authentication', {tag: '@AutoAuth'}, async ({ page }) => {
    // page is authenticated
  });

  test('my-profile', async ({page}, TestInfo) => {

    let plOjMyCustProfDetail = new classMyCustProfile(
        'หญิง',
        'qa.test02@gmail.com',
        '-',
        'Test1234!',
        true,
        true,
        false,
        page,
    );
    
    const playwrightDev = new PlaywrightDevPage(page);
    //playwrightDev.goto('/profile');
    //await page.goto('/profile', {'timeout': 60000})
    //playwrightDev.goto();

    await plOjMyCustProfDetail.Goto('/profile');
    // await plOjMyCustProfDetail.InputText('login-page-username-input', validUser);
    // await plOjMyCustProfDetail.ClickButton('login-page-continue-button');
    // await page.waitForLoadState('load', {'timeout': 60000}); // Add timeout, By Robot 2024-07-09

    // await plOjMyCustProfDetail.InputText('welcome-back-page-password-input', validPassword);
    // await plOjMyCustProfDetail.ClickButton('welcome-back-page-login-button');
    //await page.getByRole('button', {name: 'เข้าสู่ระบบ'}).click();
    //await plOjMyCustProfDetail.ClickButton('button', {name: 'เข้าสู่ระบบ'}).click();
    await page.waitForLoadState('load', {'timeout': 60000});

    // //playwrightDev.goto('/my-address');
    await page.goto('/profile', {'timeout': 60000});
    //await plOjMyCustProfDetail.Goto('/profile');

    //-- 2024-08-08, Test by Robot
    let testCaseCapt = TestInfo.title + '.png';
    await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
    });
    TestInfo.attach('Robot_Test', {body: 'rBot_Body'});
  
    let DataCust = new classMyCustProfile(
      'Female',
      'xxqa.teset02@gmail-xx.com',
      '-xx',
      'Test1234!',
      true,
      true,
      false,
      page,
  );
  await console.log('TestCust Email: ' + DataCust.email);
  await console.log('TestCust TelNo: ' + DataCust.telno);
  //plOjMyCustProfDetail.ValidateCustomer(plOjMyCustProfDetail, DataCust);  
  // //expect(uEMail).toHaveValue(validUser);
  // //expect(userMail).toHaveValue(validUser);

  //await page.goto('/profile');
  //playwrightDev.goto('/profile');
  // Wait for the final URL to ensure that the cookies are actually set.
  //await page.waitForURL('/profile');

  await page.waitForLoadState('load', {timeout: 60000});
  DataCust.sex = await page.locator('[class="css-c7idpd-Select-selectItemLabelText"]').innerText();
  DataCust.email = await page.locator('[data-id="profile-page-contact-info-email-text"]').innerText();
  DataCust.telno = await page.locator('[data-id="profile-page-contact-info-phone-number-text"]').innerText();
  // DataCust.sex = await page.locator('[class="css-c7idpd-Select-selectItemLabelText"]').innerText();
  let lEmail = await page.locator('[data-id="profile-page-contact-info-email-text"]').innerText();
  let lTelno = await page.locator('[data-id="profile-page-contact-info-phone-number-text"]').innerText();
  await console.log('Page Email: ' + lEmail + ' , ' + DataCust.email);
  await console.log('Page TelNo: ' + lTelno + ' , ' + DataCust.telno);
  // await console.log('Sex: ' + DataCust.sex);
  // profile-page-contact-info-phone-number-text
  //DataCust.sex = '';
  plOjMyCustProfDetail.ValidateCustomer(DataCust);

  });

  test('my-address', async ({page}, TestInfo) => {
    const playwrightDev = new PlaywrightDevPage(page);
    //playwrightDev.goto('/profile');
    //await page.goto('/profile', {'timeout': 60000})
    //playwrightDev.goto();

    let MyCustAddr = new classMyCustAddress(
      'QA AutomateTest',
      '298/165 หมู่บ้านดิโอโซน (ซอย 15) ซอยเพชรเกษม 53 ถนนเพชรเกษม, หลักสอง, บางแค, กรุงเทพมหานคร 10160',
      '(+66)82 355 7680',
      true,
      page
    );
    // let plOjMyCustAddr = new classMyCustAddress(page, MyCustAddr);
    await console.log('MyCustAddr HName: ' + MyCustAddr.custaddrHName);
    await console.log('MyCustAddr Detail: ' + MyCustAddr.custaddrDetail);
    await console.log('MyCustAddr Telno: ' + MyCustAddr.custaddrTelno);
    //await console.log('ExtCustAddr Telno: ' + plOjMyCustAddr.custaddrTelno);

    //await plOjMyCustProfDetail.Goto('/my-address');
    await page.goto('/my-address', {'timeout': 60000});
    await page.waitForLoadState('load', {'timeout': 60000});

    // //playwrightDev.goto('/my-address');
    await page.goto('/my-address', {'timeout': 60000});
    //await plOjMyCustProfDetail.Goto('/profile');

    //-- 2024-08-08, Test by Robot
    let testCaseCapt = TestInfo.title + '.png';
    await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
    });
    TestInfo.attach('Robot_Test', {body: 'rBot_Body'});

    let PageCustaddrHName: string = await page.locator('[data-id="my-address-page-address-list-item-0-name-text"]').innerText();
    let PageCustaddrDetail = await page.locator('[data-id="my-address-page-address-list-item-0-address-text"]').innerText();
    let PageCustaddrTelno = await page.locator('[data-id="my-address-page-address-list-item-0-phone-number-text"]').innerText();
    //plOjMyCustAddr.custaddrIsDefault = await page.locator('[data-id="my-address-page-address-list-item-0-default-address-badge-text"]').isChecked();
    let MyPageCustAddr = new classMyCustAddress(PageCustaddrHName, PageCustaddrDetail, PageCustaddrTelno, true, page);
    await console.log('Page MyCustAddr HName: ' + PageCustaddrHName + ' , ' + MyPageCustAddr.custaddrHName, + ' , ' + MyCustAddr.custaddrHName);
    await console.log('Page MyCustAddr Detail: ' + PageCustaddrDetail + ' , ' + MyPageCustAddr.custaddrDetail, + ' , ' + MyCustAddr.custaddrDetail);
    await console.log('Page MyCustAddr Telno: ' + PageCustaddrTelno + ' , ' + MyPageCustAddr.custaddrTelno, + ' , ' + MyCustAddr.custaddrTelno);
    MyCustAddr.ValidateCustAddr(MyPageCustAddr);

  });// my-address

  test('my-order', async ({page}, TestInfo) => {

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
    //playwrightDev.goto('/profile');
    //await page.goto('/profile', {'timeout': 60000})
    //playwrightDev.goto();

    //await plOjMyCustProfDetail.Goto('/my-address');
    await page.goto('/my-order', {'timeout': 60000});
    await page.waitForLoadState('load', {'timeout': 60000});

    // //playwrightDev.goto('/my-address');
    await page.goto('/my-order', {'timeout': 60000});
    //await plOjMyCustProfDetail.Goto('/profile');

    //-- 2024-08-08, Test by Robot
    let testCaseCapt = TestInfo.title + '.png';
    await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
    });
    TestInfo.attach('Robot_Test', {body: 'rBot_Body'});

  });

  test('my-wishlist', async ({page}, TestInfo) => {

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
    //playwrightDev.goto('/profile');
    //await page.goto('/profile', {'timeout': 60000})
    //playwrightDev.goto();

    //await plOjMyCustProfDetail.Goto('/my-address');
    await page.goto('/my-wishlist', {'timeout': 60000});
    await page.waitForLoadState('load', {'timeout': 60000});

    // //playwrightDev.goto('/my-address');
    await page.goto('/my-wishlist', {'timeout': 60000});
    //await plOjMyCustProfDetail.Goto('/profile');

    //-- 2024-08-08, Test by Robot
    let testCaseCapt = TestInfo.title + '.png';
    await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
    });
    TestInfo.attach('Robot_Test', {body: 'rBot_Body'});

  });

  test('my-card', async ({page}, TestInfo) => {

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
    //playwrightDev.goto('/profile');
    //await page.goto('/profile', {'timeout': 60000})
    //playwrightDev.goto();

    //await plOjMyCustProfDetail.Goto('/my-address');
    await page.goto('/my-card', {'timeout': 60000});
    await page.waitForLoadState('load', {'timeout': 60000});

    // //playwrightDev.goto('/my-address');
    await page.goto('/my-card', {'timeout': 60000});
    //await plOjMyCustProfDetail.Goto('/profile');

    //-- 2024-08-08, Test by Robot
    let testCaseCapt = TestInfo.title + '.png';
    await attachment(testCaseCapt, await page.screenshot(), {
      contentType: "image/png",
    });
    TestInfo.attach('Robot_Test', {body: 'rBot_Body'});

  });

})


