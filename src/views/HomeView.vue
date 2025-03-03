<template>
  <div>
    <h1>Home Page</h1>
    <button @click="sendEvent">Send Event</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const eventBus = inject("eventBus") as any;
const sendEvent = () => {
  eventBus.emit("customEvent", "Hello from Home");
};
</script>
