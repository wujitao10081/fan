<template>
  <div class="wu">
    <button @click="btn">btn</button>
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
    this.axios({
      url: "/api/chartList", // tableList
      method: "get",
    }).then(function (data) {
      // console.log(data.data.data.objArray);
    });
    // 回调函数案例
    // var getNum = function(a){
    //   console.log(100);
    //   return 100 + a
    // };

    // var da = function(getNum){
    //   var a = 10
    //   console.log( getNum(a));
    // }
    // da(getNum)

    // onresize = function () {
    //   console.log("resize");
    // };
    // onclick = function () {
    //   console.log(10);
    //   return 10;
    // };

    // console.log(document);
    // window.location.reload()
    // console.log(window.location);

    // var a = function () {
    //   var timeout = null;
    //   return function () {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => {
    //       console.log(1);
    //     }, 500);
    //   };
    // };

    // document.onmousemove = a();
    this.setNewsApi();
  },
  methods: {
    setNewsApi: function () {
      this.axios({
        url: "https://www.testList.com", // tableList
        method: "get",
      }).then(function (data) {
        console.log(data.data.memberList);
      });
    },
    //方法（事件）
    btn(val) {
      console.log(this);
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
