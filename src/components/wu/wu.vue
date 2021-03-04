<template>
  <div class="wu">
    <!-- 基础模板 data -->
    <p>{{ name }}</p>
    <el-divider></el-divider>

    <!--  方法（事件） methods-->
    <el-button @click="btn(10000)">btn</el-button>
    <el-divider></el-divider>

    <!--  计算属性 computed 可在模板里不加this直接使用-->
    {{ gitNum }}
    <el-divider></el-divider>

    <!-- 监听器 watch -->
    <el-button @click="watch">watch</el-button>
    <el-divider></el-divider>

    <!-- v-for -->
    <!-- 想生成什么（例如生成li标签） 就在什么标签上添加v-for 必须有:key -->
    <ul>
      <li v-for="(item, index) in listArr" :key="index">
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "wu",
  data() {
    return {
      name: "wu", //基础模板
      code: true, // watch
      listArr: ["html", "css", "javaScript", "vue", "element"],
     
    };
  },
  mounted() {
    var _this = this;
    // console.log(this.name); // 通过this 直接读取data中的数据
    // console.log(this.gitNum); // 不加（）直接读出计算属性的结果
    // var t = new Date();
    // this.axios({
    //   url: "/api/chartList",
    //   method: "get",
    // }).then(function (data) {
    //   console.log(data);
    // });

   
  },
  methods: {
 
    //方法（事件）
    btn(val) {
      alert("点击事件" + val);
    },
    // watch
    watch() {
      this.code = !this.code;
    },
  },
  computed: {
    //计算属性
    gitNum() {
      return 100;
    },
  },
  watch: {
    // code 对应 data中的code 传入两个值 一个改变之后的值（新值） 一个改变之前的值（旧值）
    code: function (n, o) {
      console.log(o, n);
    },
  },
};
</script>

<style scoped>
</style>
