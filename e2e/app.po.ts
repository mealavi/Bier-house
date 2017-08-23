import { browser, by, element } from 'protractor';

export class Com.Deloitte.2www.SamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
