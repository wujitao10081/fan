<template>
    <div>
        <table border="1px">
            <tr>
                <th v-for="(item,index) in titleList" :key="index">{{item}}</th>
            </tr>
            <tr v-for="(itemSeller,index) in seller" :key="index">
                <td >{{itemSeller.time}}</td>
                <td >{{itemSeller.title}}</td>
                <td >{{itemSeller.count}}</td>
                <td >{{itemSeller.event_id}}</td>
                <td >{{itemSeller.level}}</td>
                
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:'list',
    data() {
        return {
           titleList:"",
           seller:''
        }
    },
    mounted() {
        this.axios.get("/api/titleList").then((response) => {
            console.log(response.data.data.data)
            this.titleList = response.data.data.data      
})
        this.axios.get("/api/seller").then((res) => {
        console.log(res.data.data)
        this.seller = res.data.data   
         } )
}}
</script>

<style scoped>
    table{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 250px;
        font-size: 12px;
        text-align: center;
        border-collapse: collapse;
        
    }
</style>