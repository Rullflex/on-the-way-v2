import { Template } from '@/core/templates/Template';

/**
 * Адаптер для Vue.js.
 */
export class TemplateVue extends Template {
  constructor(component) {
    super();
    this.component = component;
  }

  render() {
    // Используйте Vue.js для рендеринга компонента
    return this.component;
  }
}
