/**
 * @typedef {Object} FetchOptions
 * @property {string} [method='GET'] - HTTP-метод запроса.
 * @property {Object} [headers={}] - Заголовки запроса.
 * @property {Object} [body] - Тело запроса, если требуется.
 */

/**
 * Адаптер для взаимодействия с REST API.
 */
export class RestAdapter {
  /**
   * @param {string} baseURL - Базовый URL для API.
   */
  constructor(baseURL) {
    /** @private */
    this.baseURL = baseURL;
  }

  /**
   * Выполняет запрос к API.
   * @param {string} endpoint - Конечная точка API.
   * @param {FetchOptions} [options={}] - Опции для настройки запроса.
   * @returns {Promise<Object>} - Ответ от API.
   * @throws {Error} Если запрос завершился с ошибкой.
   */
  async fetchData(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}/${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
  }
}
