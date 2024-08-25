// src/core/adapters/rest-adapter/RestAdapter.js

/**
 * @typedef {Object} RestAdapterOptions
 * @property {string} baseUrl
 */

/**
 * Адаптер для выполнения HTTP-запросов.
 */
export class RestAdapter {
  /**
   * @param {RestAdapterOptions} options
   */
  constructor(options) {
    this.baseUrl = options.baseUrl;
  }

  /**
   * Выполняет запрос по заданному пути.
   * @param {string} path
   * @returns {Promise<any>}
   */
  async fetchData(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json();
  }
}
