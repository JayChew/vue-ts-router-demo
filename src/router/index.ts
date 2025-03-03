import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "../views/DashboardView.vue";
import LoginView from "../views/LoginView.vue";

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

// Runs before navigating to a new route.
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
