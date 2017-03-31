import { CmygardenPage } from './app.po';

describe('cmygarden App', () => {
  let page: CmygardenPage;

  beforeEach(() => {
    page = new CmygardenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
