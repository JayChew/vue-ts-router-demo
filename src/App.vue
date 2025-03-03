<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventBus = inject("eventBus") as any;

onMounted(() => {
  if (eventBus) {
    eventBus.on("customEvent", (message: string) => {
      alert(`Event received: ${message}`);
    });
  }
});
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}
</style>
