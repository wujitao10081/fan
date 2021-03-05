<template>
    <div>
        <table border="1">
            <tr>
                <th colspan="6">{{this.chartList.title}}</th>
            </tr>
            <tr>
                <th>年龄</th>
                <th>班级</th>
                <th>年龄</th>
                <th>年龄</th>
                <th>年龄</th>
                <th>详情</th>
            </tr>
            <tr v-for="(items,index) in chartListObj" :key="index">
                <td> {{items.age}}</td>
                <td> {{items.class}}</td>
                <td> {{items.items_html}}</td>
                <td> {{items.min_position}}</td>
                <td> {{items.new_latent_count}}</td>
                <td><button class="btn" @click="btn(items.detail.id)">详情</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import detail from '@/components/fan/detail'
export default {
    name:"chartList",
    components:{
        detail,
    },
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
    methods:{
        btn(id){
            this.$router.push({
                path:'/detail',
                query:{
                    id:id
                }
            })
            
        }
    }
}
</script>
    
<style scoped>
    table{
        text-align: center;
        width: 100%;
    }
    .btn{
        border: none;
        font-size: 16px;
        background: none;
        outline: 0;
    }
</style>