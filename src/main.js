import { createRouter } from './router';

/**
 * Главный файл приложения.
 */
function main() {
  const router = createRouter();
  router.start();

  // Дополнительная инициализация приложения, если необходимо
  console.log('Application is running');
}

main();
