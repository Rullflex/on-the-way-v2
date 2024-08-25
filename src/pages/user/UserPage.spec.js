import UserPage from './UserPage';

describe('UserPage', () => {
  it('should render the User Page content', () => {
    document.body.innerHTML = UserPage();

    expect(document.querySelector('h1').textContent).toBe('User Page');
    expect(document.querySelector('p').textContent).toBe(
      'Welcome to the User Page!',
    );
  });
});
