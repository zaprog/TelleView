import { BrowserGCSPage } from './app.po';

describe('browser-gcs App', () => {
  let page: BrowserGCSPage;

  beforeEach(() => {
    page = new BrowserGCSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
