import { UserService } from '@/features/user/services/user-service';

/**
 * Контроллер для работы с пользователями.
 */
export class UserController {
  /**
   * Создаёт новый экземпляр UserController.
   * @param {Object} dependencies - Зависимости, необходимые для работы контроллера.
   * @param {RestAdapter} dependencies.adapter - Адаптер для взаимодействия с API.
   */
  constructor({ adapter }) {
    this.userService = new UserService({ adapter });
  }

  /**
   * Получает профиль пользователя и проверяет его роли.
   * @param {string} userId - Идентификатор пользователя.
   * @returns {Promise<Object>} - Данные профиля пользователя и информация о ролях.
   */
  async getUserInfo(userId) {
    const user = await this.userService.getUserProfile(userId);
    return {
      profile: user,
      isAdmin: user.isAdmin(),
    };
  }
}
