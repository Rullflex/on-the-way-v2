import { Template } from '@/core/templates/Template';

/**
 * Адаптер для нативных приложений.
 */
export class TemplateNative extends Template {
  constructor(view) {
    super();
    this.view = view;
  }

  render() {
    // Используйте нативные средства для рендеринга представления
    return this.view;
  }
}
