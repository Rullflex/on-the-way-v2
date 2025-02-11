# По Пути

## Описание

Этот проект представляет собой веб-приложение, разработанное с использованием гибкой, платформо-независимой архитектуры, которая поддерживает различные платформы, такие как веб-браузеры, Telegram Web Apps, VK Mini Apps и нативные приложения. Основная цель проекта — создание приложения, которое можно легко адаптировать под любые платформы, обеспечивая единое управление логикой, интерфейсами и данными.

## Структура проекта

Проект организован по принципам MVVM, где ViewModel представлен адаптерами и фабриками. Это позволяет разделять логику приложения и его представление, упрощая поддержку и тестирование.

### Основные папки

- **core/**

  - **adapters/**: Адаптеры для различных платформ (например, Vue.js, нативные приложения).
  - **factories/**: Фабрики для создания шаблонов и страниц в зависимости от платформы.
  - **pages/**: Абстрактные классы для страниц.
  - **routing/**: Логика маршрутизации и адаптеры маршрутов.
  - **services/**: Сервисы для работы с бизнес-логикой.

- **adapters/**

  - **vue/**: Реализации и шаблоны для Vue.js.
  - **native/**: Реализации и шаблоны для нативных приложений.

- **src/**: Основной исходный код приложения.
  - **main.js**: Точка входа в приложение.
  - **components/**: Компоненты приложения.

## Установка

Для установки зависимостей используйте [Yarn](https://yarnpkg.com/):

```bash
yarn install
```

## Запуск

Для запуска проекта используйте: [Yarn](https://yarnpkg.com/):

```bash
yarn dev
```

## Тестирование

Тесты размещаются рядом с файлами, которые они проверяют. Для запуска тестов используйте команду:

```bash
yarn test
```

## Поддержка платформ

Проект поддерживает несколько платформ, и для каждой из них можно создать свои адаптеры и шаблоны:

- Веб (Vue.js)
- Нативные приложения
- Telegram Web Apps
- VK Mini Apps
