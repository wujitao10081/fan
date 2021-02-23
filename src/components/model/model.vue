<template>
  <div class="model">
    model
    <input type="text" v-model="name" />
    <p>{{ childName }}</p>
    <el-divider></el-divider>
    <!-- （父传子） 自定义属性inputName并绑定data中的值到子组件标签上 子组件通过props接收 接收名为自定义属性 -->
    <!-- （子传父） 子组件的emit 推动父组件的v-on事件 -->
    <child :inputName="name" v-on:childByValue="childByValue"></child>
  </div>
</template>

<script>
import child from "../model/child";
export default {
  name: "model",
  components: {
    child,
  },
  data() {
    return {
      name: "",
      childName: "",
    };
  },
  mounted() {
  },
  methods: {
    childByValue: function (childValue) {
      // childValue就是子组件传过来的值
      this.childName = childValue;
    },
  },
  watch: {},
  computed: {},
  //   beforeRouteEnter(to, from, next) {
  //     alert("router");
  //     next();
  //   },
};
</script>

<style scoped>
</style>
