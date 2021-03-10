<template>
    <div>
        <ul>
            <li v-for="(item,index) in testListData" :key="index" class="listData">
                <img :src="item.thumbnail_pic_s" alt="" srcset="" class="imgList">
                <div class="dataCon">
                    <h2>{{item.title}}</h2>
                    <p class="adsCon">{{item.address}}</p>
                     
                    <span>  {{item.content}}</span>
                     <p class="timeCon">{{item.time}}</p>
                    <button @click="detailCon(item.id)">查看详情</button>
                     
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import testListDetail from '@/components/fan/testListDetail'
export default {
    name:'testList',
    components:{
        testListDetail,

    },
    data() {
        return {
            testListData:''
        }
    },
    mounted() {
        this.axios.get('https://www.testList.com').then((res)=>{
            console.log(res.data.memberList);
            this.testListData = res.data.memberList
        })
    },
    methods:{
        detailCon(id){
            this.$router.push({
                name:'testListDetail',
                params:{
                    id:id
                }
            })
        }
    }
}
</script>
    
<style scoped>
    .listData{
        width: 100%;
        height: 200px;
        border-bottom: 1px solid red;
        margin-bottom: 5px;
        display: flex;
    }
    .imgList{
        width: 180px;
        height: 200px;
    }
    .dataCon{
        position: relative;
    }
    h2{
        font-size: 18px;
        text-align: center;
        margin-bottom: 6px;
    }
    .adsCon{
        font-size: 12px;
        text-align: center;
        margin-bottom: 6px;

    }
    .timeCon{
        font-size: 13px;
        text-align: end;
        margin-top: 6px;
    }
    span{
        font-size: 12px;
        line-height: 16px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        text-align: center;
        margin-top: 6px;
    }
    button{
        width: 100%;
        position: absolute; 
        bottom: 0;
        background: blueviolet;
        color: #fff;
    }
</style>