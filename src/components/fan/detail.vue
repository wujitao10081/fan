<template>
    <div>
        <table border="1">
            <tr>
                <th>年龄</th>
                <th>班级</th>
                <th>年龄</th>
                <th>年龄</th>
                 
            </tr>
            <tr >
                <td>{{this.detailCon.detail_count}}</td>
                <td>{{this.detailCon.detail_nale}}</td>
                <td>{{this.detailCon.detail_num}}</td>
                <td>{{this.detailCon.detail_title}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'detail',
    data() {
        return {
            detailCon:'',
            
        }
    },
    mounted() {
        this.axios.get("/api/chartList",{params:{id:this.$route.query.id}}).then((res)=>{
            // console.log(res.data.data.objArray);
            let arr = res.data.data.objArray
            arr.forEach((item,index)=>{
                // console.log(item.detail);
                if(item.detail.id == this.$route.query.id){
                    this.detailCon = item.detail
                }
            })
        
        })
    },
    methods: {
        
    },
}
</script>

<style scoped>

</style>
