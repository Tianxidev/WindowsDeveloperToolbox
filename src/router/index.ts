import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("@/layout/index.vue"),
        children: [
            {
                path: "/feature_list",
                name: "feature_list",
                component: () => import("@/views/feature_list/FeatureListView.vue"),
            },
            {
                path: "/tools/local/:toolName",
                name: "tools-local",
                component: () => import("@/views/tools/LocalToolsView.vue"),
            },
            {
                path: "/tools/network/:toolName",
                name: "tools-network",
                component: () => import("@/views/tools/NetworkToolsView.vue"),
            },
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/HomeView.vue"),
            },
            {
                path: "/settings",
                name: "settings",
                component: () => import("@/views/settings/SettingsView.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
