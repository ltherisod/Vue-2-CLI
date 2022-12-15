<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
};
</script>
<style></style>
