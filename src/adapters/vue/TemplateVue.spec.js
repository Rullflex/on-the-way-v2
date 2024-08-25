import { TemplateVue } from './TemplateVue';

describe('TemplateVue', () => {
  it('should render Vue component', () => {
    const component = '<div>Hello from Vue</div>';
    const template = new TemplateVue(component);

    expect(template.render()).toBe(component);
  });
});
