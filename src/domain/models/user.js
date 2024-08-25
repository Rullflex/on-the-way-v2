/**
 * Модель пользователя.
 */
export class User {
  /**
   * Создаёт новый объект пользователя.
   * @param {Object} data - Данные пользователя.
   * @param {string} data.id - Уникальный идентификатор пользователя.
   * @param {string} data.name - Имя пользователя.
   * @param {string[]} data.roles - Роли пользователя.
   */
  constructor({ id, name, roles = [] }) {
    this.id = id;
    this.name = name;
    this.roles = roles;
  }

  /**
   * Проверяет, является ли пользователь администратором.
   * @returns {boolean} - True, если пользователь администратор.
   */
  isAdmin() {
    return this.roles.includes('admin');
  }
}
