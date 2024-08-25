import { User } from '@/domain/models/User';

/**
 * Сервис для работы с пользователями.
 */
export class UserService {
  /**
   * Создаёт новый экземпляр UserService.
   * @param {Object} dependencies - Зависимости, необходимые для работы сервиса.
   * @param {RestAdapter} dependencies.adapter - Адаптер для взаимодействия с API.
   */
  constructor({ adapter }) {
    this.adapter = adapter;
  }

  /**
   * Получает информацию о пользователе и обрабатывает её.
   * @param {string} userId - Идентификатор пользователя.
   * @returns {Promise<User>} - Обработанный объект пользователя.
   */
  async getUserProfile(userId) {
    const userData = await this.adapter.fetchData(`users/${userId}`);
    return new User(userData); // Создаём объект модели User
  }

  /**
   * Проверяет, имеет ли пользователь определённую роль.
   * @param {User} user - Объект пользователя.
   * @param {string} role - Название роли.
   * @returns {boolean} - True, если пользователь имеет роль.
   */
  hasUserRole(user, role) {
    return user.roles.includes(role);
  }
}
