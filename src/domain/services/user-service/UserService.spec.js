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
});
