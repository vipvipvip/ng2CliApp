import { Ng2CliAppPage } from './app.po';

describe('ng2-cli-app App', function() {
  let page: Ng2CliAppPage;

  beforeEach(() => {
    page = new Ng2CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
