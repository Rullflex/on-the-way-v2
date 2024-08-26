import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should render with title and content', () => {
    const page = new HomePage({
      title: 'Home',
      content: 'Welcome to the homepage!',
    });
    expect(page.render()).toContain('<h1>Home</h1>');
    expect(page.render()).toContain('<p>Welcome to the homepage!</p>');
  });
});
