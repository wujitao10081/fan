<template>
  <div>
    <table border="1px">
      <tr>
        <th>{{ this.titleList.id }}</th>
        <th>{{ this.titleList.title }}</th>
        <th>{{ this.titleList.num }}</th>
        <th>{{ this.titleList.time }}</th>
        <th>{{ this.titleList.level }}</th>
      </tr>
      <tr v-for="(itemSeller, index) in seller" :key="index">
        <td>{{ itemSeller.event_id }}</td>
        <td>{{ itemSeller.title }}</td>
        <td>{{ itemSeller.count }}</td>
        <td>{{ itemSeller.time | formatDate }}</td>
        <td
          ref="refName"
          :class="{
            background1: itemSeller.level == 'high',
            background2: itemSeller.level == 'medium',
            background3: itemSeller.level == 'low',
          }"
        >
          {{ itemSeller.level }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from "moment";
// function changedate(shijianchuo) {
//     var now = new Date(shijianchuo),
//     y = now.getFullYear(),
//     m = ("0" + (now.getMonth() + 1)).slice(-2),
//     d = ("0" + now.getDate()).slice(-2);
//     return y + "-" + m + "-" + d + " " + now.toTimeString().substr(0, 8);
// }

export default {
  name: "list",
  data() {
    return {
      titleList: "",
      seller: "",
    };
  },
  mounted() {
    this.axios.get("/api/titleList").then((response) => {
      console.log(response.data.data.data);
      this.titleList = response.data.data.data;
    });
    this.axios.get("/api/seller").then((res) => {
      console.log(res.data.data);
      this.seller = res.data.data;
      this.seller.sort((a, b) => {
        return a.event_id - b.event_id;
      });

      this.$nextTick(function () {
        for (let index = 0; this.seller.length; index++) {
          if (this.seller[index].level == "medium") {
            this.$refs.refName[index].style = "background:red";
          }
        }
      });
    });
  },
  filters: {
    formatDate: function () {
      return moment().format("YYYY-MM-DD");
    },
  },
};
</script>

<style scoped>
table {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 250px;
  font-size: 12px;
  text-align: center;
  border-collapse: collapse;
}
</style>