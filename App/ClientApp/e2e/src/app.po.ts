import { browser, by, element, promise } from 'protractor';

export class AppPage {
  public navigateTo(): promise.Promise<any> {
    return browser.get('/');
  }

  public getMainHeading(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
