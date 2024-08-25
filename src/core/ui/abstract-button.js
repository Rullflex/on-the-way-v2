/**
 * Абстрактный класс для UI-кнопок.
 * @abstract
 */
export class AbstractButton {
  /**
   * Метод для рендера кнопки.
   * @abstract
   * @returns {void}
   */
  render() {
    throw new Error('Method "render()" must be implemented');
  }
}
