import { Com.Deloitte.2www.SamplePage } from './app.po';

describe('com.deloitte.2www.sample App', () => {
  let page: Com.Deloitte.2www.SamplePage;

  beforeEach(() => {
    page = new Com.Deloitte.2www.SamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
