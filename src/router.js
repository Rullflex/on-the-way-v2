// src/router.js

import { VueRouterAdapter } from '@/core/routing/adapters/VueRouterAdapter';
import { NativeRouterAdapter } from '@/core/routing/adapters/NativeRouterAdapter';
import { HomePage } from '@/pages/home';
import { UserPage } from '@/pages/user';
import { NotFoundPage } from '@/pages/not-found';

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
