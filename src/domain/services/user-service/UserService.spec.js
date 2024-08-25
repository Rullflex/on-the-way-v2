import { UserService } from './UserService';
import { RestAdapter } from '@/core/adapters/rest-adapter';
import { User } from '@/domain/models/User';

// Мокаем RestAdapter
jest.mock('@/core/adapters/rest-adapter');

describe('UserService', () => {
  let userService;
  const mockAdapter = new RestAdapter();

  beforeEach(() => {
    userService = new UserService({ adapter: mockAdapter });
    mockAdapter.fetchData.mockResolvedValue({
      id: '123',
      name: 'John Doe',
      roles: ['user'],
    });
  });

  it('should fetch user profile and return a User instance', async () => {
    const user = await userService.getUserProfile('123');
    expect(user).toBeInstanceOf(User);
    expect(user.id).toBe('123');
    expect(user.name).toBe('John Doe');
  });

  it('should return true if user has the given role', async () => {
    const user = await userService.getUserProfile('123');
    expect(userService.hasUserRole(user, 'user')).toBe(true);
  });

  it('should return false if user does not have the given role', async () => {
    const user = await userService.getUserProfile('123');
    expect(userService.hasUserRole(user, 'admin')).toBe(false);
  });
});
