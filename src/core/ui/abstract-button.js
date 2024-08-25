class AbstractButton {
  render() {
    throw new Error('Method "render()" must be implemented');
  }
}

export class WebButton extends AbstractButton {
  render() {
    // Реализация для Web
  }
}

export class TelegramButton extends AbstractButton {
  render() {
    // Реализация для Telegram
  }
}
