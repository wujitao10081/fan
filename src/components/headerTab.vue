<template>
  <div class="headerTab">
    头部
    <router-link to="/about">about</router-link>
    <router-link to="/user">user</router-link>
    <router-link to="/one">one(点击打开新的并且只加载one组件的路由)</router-link>
  </div>
</template>

<script>
export default {
  name: "headerTab",
  data() {
    return {};
  },
};
</script>

<style scoped>
.headerTab {
  height: 50px;
  background: #ccc;
}
</style>
