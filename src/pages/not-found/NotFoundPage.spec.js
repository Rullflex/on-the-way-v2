import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should render the 404 Not Found page content', () => {
    document.body.innerHTML = NotFoundPage();

    expect(document.querySelector('h1').textContent).toBe('404 Not Found');
    expect(document.querySelector('p').textContent).toBe(
      'The page you are looking for does not exist.',
    );
  });
});
