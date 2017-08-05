import { MyNewNg4AppPage } from './app.po';

describe('my-new-ng4-app App', () => {
  let page: MyNewNg4AppPage;

  beforeEach(() => {
    page = new MyNewNg4AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
