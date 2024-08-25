import { TemplateFactory } from './TemplateFactory';
import { TemplateVue } from '@/adapters/vue/TemplateVue';
import { TemplateNative } from '@/adapters/native/TemplateNative';

describe('TemplateFactory', () => {
  it('should create Vue template', () => {
    const component = '<div>Hello from Vue</div>';
    const template = TemplateFactory.createTemplate('vue', component);

    expect(template).toBeInstanceOf(TemplateVue);
    expect(template.render()).toBe(component);
  });

  it('should create Native template', () => {
    const view = '<div>Hello from Native</div>';
    const template = TemplateFactory.createTemplate('native', view);

    expect(template).toBeInstanceOf(TemplateNative);
    expect(template.render()).toBe(view);
  });
});
