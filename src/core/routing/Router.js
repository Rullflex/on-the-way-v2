/**
 * Интерфейс маршрутизатора.
 */
export class Router {
  /**
   * Устанавливает обработчик для маршрута.
   * @param {string} path - Путь маршрута.
   * @param {Function} handler - Функция-обработчик.
   */
  on(path, handler) {
    throw new Error('Method "on" must be implemented');
  }

  /**
   * Инициирует маршрутизацию.
   */
  start() {
    throw new Error('Method "start" must be implemented');
  }
}
