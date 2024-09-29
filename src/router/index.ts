import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: '/home',
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        component: import("@/views/home/HomeView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
