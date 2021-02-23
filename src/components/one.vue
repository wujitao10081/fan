<template>
  <div class="one">
    one
    <br />
    <el-button @click="back">back</el-button>
  </div>
</template>

<script>
export default {
  name: "one",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>
