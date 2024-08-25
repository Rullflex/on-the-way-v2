import { TemplateVue } from '@/adapters/vue/TemplateVue';
import { TemplateNative } from '@/adapters/native/TemplateNative';

/**
 * Фабрика для создания шаблонов.
 */
export class TemplateFactory {
  static createTemplate(platform, component) {
    switch (platform) {
      case 'vue':
        return new TemplateVue(component);
      case 'native':
        return new TemplateNative(component);
      default:
        throw new Error('Неизвестная платформа');
    }
  }
}
