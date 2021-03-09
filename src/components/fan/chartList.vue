<template>
    <div>
        <table border="1"  ref="refTab">
            <tr>
                <th colspan="9">{{this.chartList.title}}</th>
            </tr>
            <tr>
                <th>年龄</th>
                <th>班级</th>
                <th>年龄</th>
                <th>年龄</th>
                <th>年龄</th>
                <th>详情</th>
                <th>详情</th>
                <th>详情</th>
            </tr>
            <tr v-for="(items,index) in chartListObj" :key="index">
                <td> {{items.age}}</td>
                <td> {{items.class}}</td>
                <td> {{items.items_html}}</td>
                <td> {{items.min_position}}</td>
                <td> {{items.new_latent_count}}</td>
                <td><button class="btn" @click="btn(items.detail.id)">详情</button></td>
                <td><button class="del" @click="del(index)">删除</button></td>
                <td><button class="mod" @click="mod(items)">修改</button></td>
                
            </tr>
            <tr><button @click="add" class="btnIpt">增加</button></tr>
        </table>
        <div class="addIpt" ref="refIpt">
            年龄<input type="text" v-model="ipt1"><br>
            年龄<input type="text" v-model="ipt2"><br>
            年龄<input type="text" v-model="ipt3"><br>
            年龄<input type="text" v-model="ipt4"><br>
            年龄<input type="text" v-model="ipt5"><br>
            <button @click="sub">提交</button>
        </div>
        <div class="modIpt">
            年龄<input type="text" v-model="modIpt.age"><br>
            年龄<input type="text" v-model="modIpt.class"><br>
            年龄<input type="text" v-model="modIpt.items_html"><br>
            年龄<input type="text" v-model="modIpt.min_position"><br>
            年龄<input type="text" v-model="modIpt.new_latent_count"><br>
            <button @click="upd">确认</button>
            <button @click="cancel">取消</button>
        </div>
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
            chartListObj:'',
            detailID:'',
            ipt1:'',
            ipt2:'',
            ipt3:'',
            ipt4:'',
            ipt5:'',
            arrIpt:'',
            modIpt:{}
            
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
            
        },
        add(){
            this.$nextTick(()=>{
                this.$refs.refIpt.style = 'display:block'
                this.$refs.refTab.style = 'opacity: .1;'
            })
        },
        del(index){
            this.chartListObj.splice(index,1)
        },
       
        sub(){
            let _id =Math.max (...this.chartListObj.map((item)=>{return item.detail.id}))+1
            let obj = {
                id:_id
            }
            
            let flag = this.ipt1 != ''&& this.ipt2 != '' && this.ipt3 != '' && this.ipt4 != '' && this.ipt5 != ''
            // let flag = this.ipt1 == ''&& this.ipt2 =='' && this.ipt3 == '' && this.ipt4 == '' && this.ipt5 == ''
          
        //     // console.log(_id);
            
            if (flag) {
                // console.log(_id);
            obj.age = this.ipt1
            obj.class = this.ipt2
            obj.items_html = this.ipt3
            obj.min_position = this.ipt4
            obj.new_latent_count = this.ipt5
            this.chartListObj.push(obj)

            this.$nextTick(()=>{
                this.$refs.refIpt.style = 'display:none'
                this.$refs.refTab.style = 'opacity: 1;'
                })     
         }else{
             alert('请输入')
         }
            this.ipt1 = '' 
            this.ipt2 ='' 
            this.ipt3 = '' 
            this.ipt4 = ''  
            this.ipt5 = '' 
        },
         mod(items){
            //  console.log(items.detail.id);
                this.modIpt = {
                age:items.age,
                class:items.class,
                items_html:items.items_html,
                min_position:items.min_position,
                new_latent_count:items.new_latent_count,
                id:items.detail.id
            } 
        },
       upd(){
            for (let i = 0; i < this.chartListObj.length; i++) {
                 if (this.chartListObj[i].detail.id == this.modIpt.id) {
                   this.modIpt = this.chartListObj[i]   
            }
                
            } 
        },
        cancel(){
            
        }


    }
}
</script>
    
<style scoped>
    table{
        text-align: center;
        width: 100%;
        font-size: 10px;
    }
    .btn{
        border: none;
        font-size: 16px;
        background: none;
        outline: 0;
    }
    .addIpt{
        display: none;
        height: 150px;
        width: 300px;
        background: #ccc;
        position: fixed;
        top: 100px;
        left: 40px;
    }
    
    
   
</style>