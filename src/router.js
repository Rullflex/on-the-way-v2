import { VueRouterAdapter } from '@/shared/routing/adapters/VueRouterAdapter';
import { NativeRouterAdapter } from '@/shared/routing/adapters/NativeRouterAdapter';
import { HomePage, NotFoundPage } from '@/shared/pages';
import { UserPage } from '@/features/user/views';

/**
 * Фабрика маршрутизаторов.
 * @returns {Router} - Инициализированный маршрутизатор.
 */
function createRouter() {
  const vueRoutes = [
    { path: '/', component: HomePage },
    { path: '/user', component: UserPage },
    { path: '/:pathMatch(.*)*', component: NotFoundPage },
  ];

  const isNative = false; // Определите это динамически в реальном приложении
  return isNative ? new NativeRouterAdapter() : new VueRouterAdapter(vueRoutes);
}

export { createRouter };
