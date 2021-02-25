<template>
  <div class="fan">
     <headerCon></headerCon>
     <div class="box">
      <tab></tab>
      <router-view></router-view>
     </div>
  </div>
</template>

<script>
import tab from '@/components/fan/tab'
import headerCon from '@/components/fan/headerCon'

export default {
  name: "fan",
  components:{
        tab,
        headerCon
    
        
    },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  .box{
    display: flex;
    background: orangered;
  }
</style>
