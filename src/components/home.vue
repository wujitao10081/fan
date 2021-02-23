<template>
  <div class="home">
    <headerTab></headerTab>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTab from '../components/headerTab'
export default {
  name: "home",
  components:{
    headerTab
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>
