/**
 * Модель пользователя.
 */
export class User {
  /**
   * Создаёт новый объект пользователя.
   * @param {Object} data - Данные пользователя.
   * @param {string} data.id - Уникальный идентификатор пользователя.
   * @param {string} data.name - Имя пользователя.
   * @param {string} data.surname - Фамилия пользователя.
   * @param {string} data.email - Электронная почта пользователя.
   * @param {string} data.phone - Номер телефона пользователя.
   * @param {string} data.birthday - Дата рождения пользователя.
   */
  constructor({ id, name, surname, email, phone, birthday }) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
  }

  /**
   * Рассчитывает возраст пользователя на основе даты рождения.
   * @returns {number | null} Возраст пользователя в годах или null, если дата рождения не указана.
   */
  getAge() {
    if (!this.birthday) return null;

    const birthDate = new Date(this.birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Если месяц дня рождения больше текущего месяца
    // Или если месяц совпадает, но день рождения еще не наступил в текущем году
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    // Проверка на некорректные отрицательные значения
    return age >= 0 ? age : 0;
  }
}
