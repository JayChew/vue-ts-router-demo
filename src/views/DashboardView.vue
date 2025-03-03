<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DashboardView",

  setup() {
    const router = useRouter();
    let skipRouteLeaveConfirm = false; // Flag to control beforeRouteLeave

    return { router, skipRouteLeaveConfirm };
  },

  methods: {
    logout() {
      if (window.confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("auth");
        this.skipRouteLeaveConfirm = true; // Prevent beforeRouteLeave from triggering
        this.router.push("/");
        alert("Logged out! Redirecting to Home.");
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log("🚀 Entering Dashboard:", { to, from });
    next();
  },

  beforeRouteUpdate(to, from) {
    console.log("🔄 Updating Dashboard:", { to, from });
  },

  beforeRouteLeave(to, from, next) {
    console.log("⚠️ beforeRouteLeave:", { to, from });

    if (this.skipRouteLeaveConfirm) {
      next(); // Allow navigation without confirmation if logging out
      return;
    }

    if (window.confirm("Do you really want to leave this page?")) {
      next(); // Allow navigation
    } else {
      next(false); // Block navigation
    }
  },
});
</script>

<style scoped>
/* The styles below will only apply to this component and will not affect other components */
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #36996d;
}
</style>
