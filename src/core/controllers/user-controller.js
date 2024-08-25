/**
 * @typedef {Object} User
 * @property {string} id - Уникальный идентификатор пользователя.
 * @property {string} name - Имя пользователя.
 * @property {string} email - Email пользователя.
 */

/**
 * Контроллер для работы с пользователями.
 */
export class UserController {
  /**
   * @param {RestAdapter} adapter - Адаптер для взаимодействия с API.
   */
  constructor(adapter) {
    /** @private */
    this.adapter = adapter;
  }

  /**
   * Получает информацию о пользователе по его ID.
   * @param {string} userId - Идентификатор пользователя.
   * @returns {Promise<User>} - Объект пользователя.
   */
  async getUserInfo(userId) {
    return await this.adapter.fetchData(`users/${userId}`);
  }
}
