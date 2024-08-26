import { Router } from '../Router';
import { createRouter, createWebHistory } from 'vue-router';

/**
 * Реализация маршрутизатора для Vue.js с использованием vue-router.
 */
export class VueRouterAdapter extends Router {
  constructor(routes) {
    super();
    this.router = createRouter({
      history: createWebHistory(),
      routes,
    });
  }

  on(path, handler) {
    this.router.addRoute({
      path,
      component: handler,
    });
  }

  start() {
    this.router.isReady().then(() => {
      console.log('Vue Router is ready');
    });
  }
}
