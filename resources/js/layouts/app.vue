<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import login from "../pages/auth/login.vue";
import register from "../pages/auth/register.vue";
import DashboardLay from "./dashboardLay.vue";
export default {
  name: "app",
  components: {
    DashboardLay,
    login,
    register
  }
};
</script>
