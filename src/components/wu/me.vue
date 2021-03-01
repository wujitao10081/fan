<template>
    <div>
        <p>{{name}}</p>

            <el-divider></el-divider>

        <el-button @click="btn">btn</el-button>

            <el-divider></el-divider>

        <ul>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>

            <el-divider></el-divider>

        <div>{{getNumber}}</div>

            <el-divider></el-divider>

        <el-button @click="btn1">btn1</el-button>

            <el-divider></el-divider>

        <div>
            <el-button @click="btn2()">btn2</el-button>
            <div v-if="show">{{text}}</div>
        </div>

            <el-divider></el-divider>

        <ul>
            <li v-for="(item,index) in arr " :key="index">{{index+1}}.name:{{item.name}}-------age:{{item.age}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'me',
    data() {
        return {
            name:'me',
            price:10,
            unmber:2,
            code:true,
            show:false,
            text:"hello world",
            list:[1,2,3,4,5,6],
            arr:[
                    {
                      name:'xm',
                      age:12
                    },
                    {
                      name:'xl',
                      age:18
                    },
                    {
                      name:'xh',
                      age:15
                    },
      ]
        }
    },
    // created(){
    //     console.log(this.list);
    // },
    mounted(){
        console.log(this.name);
    },
    created(){
        console.log(this.list);
    },
    computed:{
        getNumber(){
            console.log(this.price*this.unmber);
        }
    },
    methods:{
        btn(){
            console.log('点击事件');
        },
        btn1(){
            // if (this.code===0) {
            //     console.log('0');
            // } else {
            //     console.log('1');
            // }
            this.code = !this.code
        },
        
        btn2(){
            this.show = !this.show


        }
    },
    watch:{
        code:(n,o)=>{
            console.log(o,n);
        }
    }

}
</script>

<style scoped>

</style>