import { FormstestPage } from './app.po';

describe('formstest App', function() {
  let page: FormstestPage;

  beforeEach(() => {
    page = new FormstestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
