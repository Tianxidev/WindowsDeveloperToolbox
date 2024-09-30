import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("@/layout/index.vue"),
        children: [
            {
                path: "/home",
                nam: "home",
                component: () => import("@/views/home/HomeView.vue"),
            },
            {
                path: "/naming_convention",
                name: "naming_convention",
                component: () => import("@/views/naming_convention/NamingConventionView.vue"),
            },
            {
                path: "/translate",
                name: "translate",
                component: () => import("@/views/translate/TranslateView.vue"),
            },
            {
                path: "/json_formatting",
                name: "json_formatting",
                component: () => import("@/views/json_formatting/JsonFormattingView.vue"),
            },
            {
                path: "/network",
                name: "network",
                component: () => import("@/views/network/NetworkView.vue"),
            },
            {
                path: "/color_picker",
                name: "color_picker",
                component: () => import("@/views/color_picker/ColorPickerView.vue"),
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
