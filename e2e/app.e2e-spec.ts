import { StrengthlabPage } from './app.po';

describe('strengthlab App', () => {
  let page: StrengthlabPage;

  beforeEach(() => {
    page = new StrengthlabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
