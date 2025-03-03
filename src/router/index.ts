import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

/*
  `createWebHistory()` uses the browser's history API to handle navigation.
  - It gives clean URLs (e.g., `/dashboard` instead of `/#/dashboard`).
  - The browser remembers history, allowing forward/back navigation.
  - Requires proper server configuration to handle page reloads.
  - If the server is not set up correctly, refreshing the page may cause a 404 error.
  - Alternative: `createWebHashHistory()` (uses `/#/dashboard` instead).

  Use this if you want a modern, SEO-friendly URL structure.
*/
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    {
      path: "/dashboard",
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    { path: "/login", component: LoginView },
  ],
});

/*
  `router.beforeEach()` is a **global navigation guard** that runs before every route change.
  - It checks if the route has `meta.requiresAuth` (i.e., it needs authentication).
  - If the user is **not logged in**, it redirects them to the `/login` page.
  - If the user **is logged in**, it allows them to continue.

  This ensures that only authenticated users can access protected routes.
*/
router.beforeEach((to, _, next) => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Not authorized! Redirecting to Login.");
    next("/login");
  } else {
    next();
  }
});

export default router;
