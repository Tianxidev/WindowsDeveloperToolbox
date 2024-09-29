import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/home/HomeView.vue";
import NamingConventionView from "@/views/naming_convention/NamingConventionView.vue";
import TranslateView from "@/views/translate/TranslateView.vue";
import path from "path";

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        path: "/home",
        nam: "home",
        component: HomeView,
      },
      {
        path: "/naming_convention",
        name: "naming_convention",
        component: NamingConventionView,
      },
      {
        path: "/translate",
        name: "translate",
        component: TranslateView,
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
