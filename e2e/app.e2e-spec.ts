import { FretboardQuizPage } from './app.po';

describe('fretboard-quiz App', () => {
  let page: FretboardQuizPage;

  beforeEach(() => {
    page = new FretboardQuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
