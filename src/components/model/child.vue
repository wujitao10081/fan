<template>
  <div class="child">
    <div>model的子组件:{{ inputName }}</div>
    <!-- （子传父）  -->
    <el-button @click="childClick"> 子传父 </el-button>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["inputName"], //（父传子） props接收 在钩子函数中或方法里可以通过this.inputName读取，在模板中{{inputName}}直接使用
  data() {
    return {
        childValue:'子组件的值'
    };
  },
  methods: {
    childClick() {
      //(子传父) 点击事件触发$emit 传入两个参数 childByValue是在父组件on监听的方法（见父组件中子组件标签） 第二个参数this.childValue是需要传的值
      this.$emit("childByValue", this.childValue);
    },
  },
};
</script>

<style scoped>
</style>
