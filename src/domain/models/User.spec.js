import { User } from './User';

describe('User model', () => {
  it('should correctly calculate the age of the user', () => {
    const user = new User({
      id: '1',
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      birthday: '1990-05-15',
    });

    expect(user.getAge()).toBe(new Date().getFullYear() - 1990);
  });

  it('should reduce age by one year if the birthday hasn’t occurred this year yet', () => {
    const currentYear = new Date().getFullYear();
    const user = new User({
      id: '2',
      name: 'Jane',
      surname: 'Doe',
      email: 'jane.doe@example.com',
      phone: '+1234567890',
      birthday: `${currentYear}-12-31`, // Дата в будущем, поэтому возраст будет меньше на 1 год
    });

    expect(user.getAge()).toBe(0);
  });

  it('should return null if the birthday is not set', () => {
    const user = new User({
      id: '3',
      name: 'Jane',
      surname: 'Doe',
      email: 'jane.doe@example.com',
      phone: '+1234567890',
      birthday: null,
    });

    expect(user.getAge()).toBeNull();
  });
});
