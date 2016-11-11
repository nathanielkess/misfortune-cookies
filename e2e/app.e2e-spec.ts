import { MisfortuneCookiesPage } from './app.po';

describe('misfortune-cookies App', function() {
  let page: MisfortuneCookiesPage;

  beforeEach(() => {
    page = new MisfortuneCookiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
