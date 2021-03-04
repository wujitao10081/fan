<template>
    <div>
        <table border="1">
            <tr>
                <th colspan="5">{{this.chartList.title}}</th>
            </tr>
            <tr>
                <th>年龄</th>
                <th>班级</th>
                <th>年龄</th>
                <th>年龄</th>
                <th>年龄</th>
                

            </tr>
            <tr v-for="(items,index) in chartListObj" :key="index">
                <td> {{items.age}}</td>
                <td> {{items.class}}</td>
                <td> {{items.items_html}}</td>
                <td> {{items.min_position}}</td>
                <td> {{items.new_latent_count}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name:"chartList",
    data() {
        return {
            chartList:'',
            chartListObj:''
        }
    },
    mounted() {
        this.axios.get('/api/chartList').then((res)=>{
            console.log(res.data.data);
            this.chartList = res.data.data
            this.chartListObj = res.data.data.objArray
        })
    },
}
</script>
    
<style scoped>
    table{
        text-align: center;
        width: 100%;
    }
</style>