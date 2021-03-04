<template>
    <div>
        <table border="1">
            <tr>
                <th>{{this.titleName.id}}</th>
                <th>{{this.titleName.title}}</th>
                <th>{{this.titleName.num}}</th>
                <th>{{this.titleName.time}}</th>
                <th>{{this.titleName.level}}</th>
            </tr>
            <tr v-for="(items,index) in sellerCon " :key="index" ref="refName">
                <td>{{items.event_id}}</td>
                <td>{{items.title}}</td>
                <td>{{items.count}}</td>
                <td>{{items.time}}</td>
                <td>{{items.level}}</td>
            </tr>
        </table>
        <button v-on:click="btn1">排序</button>
        <button v-on:click="btn2">变色</button>
    </div>
</template>

<script>
export default {
    name:'listuser',
    data() {
        return {
            titleName:'',
            sellerCon:''
        }
    },
    mounted() {
        this.axios.get('/api/titleList').then((res)=>{
            console.log(res.data.data.data);
            this.titleName = res.data.data.data
        })
        this.axios.get('/api/seller').then((res1)=>{
            console.log(res1.data.data);
            this.sellerCon = res1.data.data
        })
       
    },
    methods:{
        btn1(){
            this.sellerCon.sort((a,b)=>{
               return a.event_id-b.event_id
            })
        },
        btn2(){
            this.$nextTick(()=>{
                for (let i = 0; i < this.sellerCon.length; i++) {
                    console.log(this.sellerCon);
                this.$refs.refName[1].style = 'background:red'
                
            }
            })
        }
    }
}
</script>

<style scoped>
    table{
        width: 100%;
        font-size: 12px;
        text-align: center;
        height: 250px;
        border-collapse: collapse;
    }
</style>