import { User } from '../models';

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
}
