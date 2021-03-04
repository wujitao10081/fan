<template>
    <div>
        <table border="1px">
            <tr>
                <th>{{this.titleList.id}}</th>
                <th>{{this.titleList.title}}</th>
                <th>{{this.titleList.num}}</th>
                <th>{{this.titleList.time}}</th>
                <th>{{this.titleList.level}}</th>
            </tr>
            <tr v-for="(itemSeller,index) in seller" :key="index">
                <td>{{itemSeller.event_id}}</td>
                <td>{{itemSeller.title}}</td>
                <td>{{itemSeller.count}}</td>
                <td>{{itemSeller.time | formatDate}}</td>
                <td ref="refName">{{itemSeller.level}}</td>
                <!-- <td 
                    :class="{
                        background1:itemSeller.level == 'low',
                        background2:itemSeller.level == 'medium',
                        background3:itemSeller.level == 'high'
                }">{{itemSeller.level}}</td> -->
            </tr>
        </table>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name:'list',
    data() {
        return {
           titleList:"",
           seller:'',

        }
    },
    
    mounted() {
        this.axios.get("/api/titleList").then((response) => {
            console.log(response.data.data.data)
            this.titleList = response.data.data.data     
})
        this.axios.get("/api/seller").then((res) => {
            console.log(res.data.data);  
            this.seller = res.data.data
            this.seller.sort((a,b)=>{
                return a.event_id-b.event_id
            })   
     })     
        
 },  
 
    updated(){
        this.$nextTick(function(){
                for (let i = 0; i < this.seller.length; i++) {
                    console.log(this.seller[i].level);
                    if (this.seller[i].level == 'low') {
                        this.$refs.refName[i].style = "background:green"
                    }else if (this.seller[i].level == 'medium') {
                        this.$refs.refName[i].style = "background:blue"
                    }else{
                        this.$refs.refName[i].style = "background:red"
                    }
                    
                }
            })
    },
    filters:{    
      formatDate: function (x) {
        return moment(x*1000).format('YYYY-MM-DD')
      }
    }
}
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
    /* .background1{
        background: green;
    }
    .background2{
        background: blue;
    }
    .background3{
        background: red;
    } */
</style>