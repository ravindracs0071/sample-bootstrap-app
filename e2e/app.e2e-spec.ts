import { SampleBootstrapAppPage } from './app.po';

describe('sample-bootstrap-app App', () => {
  let page: SampleBootstrapAppPage;

  beforeEach(() => {
    page = new SampleBootstrapAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
