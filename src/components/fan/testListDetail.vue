<template>
    <div>
        <h1>{{this.detailData.name}}</h1>
    </div>
</template>

<script>
export default {
    name:'testListDetail',
    data() {
        return {
            detailData:'',
        }
    },
    mounted() {
       this.axios.get("https://www.testList.com",{id:this.$route.params.id},
      ).then((res)=>{
           let arr = res.data.memberList
           arr.forEach((item,index) => {
               console.log(item.id, 'item的id');
               if (item.id == this.$route.params.id) {
                   console.log(item.id == this.$route.params.id);
                   this.detailData = item.detail
                   
               }
           });
       })
    },
}
</script>

<style scoped>

</style>