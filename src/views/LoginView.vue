<template>
  <div>
    <h1>Login Page</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
  localStorage.setItem("auth", "true");
  alert("Login successful! Redirecting to Dashboard.");
  router.push("/dashboard");
};
</script>
