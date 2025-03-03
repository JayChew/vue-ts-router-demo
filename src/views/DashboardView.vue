<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const logout = () => {
  localStorage.removeItem("auth");
  alert("Logged out! Redirecting to Home.");
  router.push("/");
};
</script>
