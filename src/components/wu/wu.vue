<template>
  <div class="wu">
    <!-- 新增 -->
    <div>
      <el-input size=" mini " v-model="iptAdd"></el-input>
      <el-button type="primary" size="mini" @click="add()">新增</el-button>
    </div>
    <!-- 查找 -->
    <div>
      <el-input size=" mini " v-model.trim="iptFind"></el-input>
      <el-button type="primary" size="mini" @click="find()">搜索</el-button>
    </div>
    <!-- 列表 -->
    <ul>
      <li v-for="(item, i) in list" :key="i">
        <span> {{ item.address }}</span>
        <span> {{ item.open }}</span>
        <el-button size="mini" @click="btn(item)">修改</el-button>
        <el-button size="mini" @click="del(item)">删除</el-button>
      </li>
    </ul>
    <!-- 修改 -->
    <div v-show="editTof" class="editForm">
      <el-input size=" mini " v-model="ipt"></el-input>
      <el-button size="mini" @click="edit">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "wu",
  data() {
    return {
      list: [],
      iptAdd: "",
      editTof: false,
      ipt: "",
      address: "",
      iptFind: "",
    };
  },
  mounted() {
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
    // 新增
    add() {
      var obj = {
        address: this.iptAdd,
      };
      this.list.push(obj);
    },
    // 查找
    find() {
      var arr = [];
      this.list.forEach((v, i) => {
        if (v.address == this.iptFind) {
          arr.push(v);
        }
      });

      this.list = arr;
    },
    // 点击修改按钮
    btn(v) {
      this.editTof = true;
      this.ipt = v.address;
      this.id = v.id;
    },
    // 修改确定
    edit() {
      var code = "";
      this.list.forEach((v, i) => {
        if (v.id == this.id) {
          code = i;
        }
      });
      this.list[code] = {
        address: this.ipt,
      };
      this.editTof = false;
    },
    // 删除
    del(e) {
      var code = "";
      this.list.forEach((v, i) => {
        if (e.id == v.id) {
          code = i;
        }
      });
      this.list.splice(code, 1);
    },
    // 列表
    setNewsApi: function () {
      var _this = this;
      this.axios({
        url: "https://www.testList.com", // tableList
        method: "get",
      }).then(function (data) {
        console.log(data.data.memberList);
        _this.list = data.data.memberList;
        _this.listFind = data.data.memberList;
      });
    },
  },
};
</script>

<style scoped>
.wu >>> .el-input {
  width: 30%;
}
</style>
