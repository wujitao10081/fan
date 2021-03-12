<template>
    <div class="personList">
        <div class="searchBox">
            <el-input placeholder="请输入要查询的姓名" v-model="searchDat" ></el-input>
            <el-button @click="search">查询</el-button>
            <el-button @click="add">增加</el-button>
        </div>
        <el-table style="width:100%" :data ="personData" border >
            <el-table-column  prop="name" label="姓名" min-width='20'>
                <!-- <template slot-scope="scope">
                    <span style="margin-left: 10px">{{scope.row.name }}</span> -->
                <!-- </template> -->
            </el-table-column>
            <el-table-column prop="sex" label="性别" min-width='20'>
                <!-- <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>     
                </template> -->
            </el-table-column>
            <el-table-column prop="time" label="出生日期" min-width='30' >
                <!-- <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template> -->
            </el-table-column>
            <el-table-column prop="address" label="地址"  min-width='30'>
                <!-- <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template> -->
            </el-table-column>
            <el-table-column prop="phone" label="电话"  min-width='50'>
                <!-- <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template> -->
            </el-table-column>
            <el-table-column prop="email" label="邮箱" min-width='50'>
                <!-- <template slot-scope="scope">
                    <span>{{ scope.row.date }}</span>
                </template> -->
            </el-table-column>
            <el-table-column  label="操作" min-width='50'>
                <template slot-scope="scope">
                    <el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" @click="del(scope.$index, scope.row)">删除</el-button>
                </template>
                <!-- <el-button size="mini" @click="edit()">编辑</el-button>
                <el-button size="mini" @click="del()">删除</el-button> -->
            </el-table-column>
        </el-table>

        <!-- 增加弹层 -->
        <div class="messageBox" v-if="isMessageBox">
            <div>
                <el-input  v-model="megBoxData.name"  placeholder ='姓名'></el-input>
                <template>
                    <el-radio v-model="megBoxData.sex" label="男">男</el-radio>
                    <el-radio v-model="megBoxData.sex" label="女">女</el-radio>
                </template>
                <el-input  v-model="megBoxData.time"  placeholder ='出生日期'></el-input>
                <el-input  v-model="megBoxData.address" placeholder ='地址'></el-input>
                <el-input  v-model="megBoxData.phone"  placeholder ='电话'></el-input>
                <el-input  v-model="megBoxData.email"   placeholder ='邮箱'></el-input>
            </div>
            <div class="handleBtn">
                <el-button class="handleBtnOne" @click="addBtn">确认</el-button>
                <el-button @click="delAdd">取消</el-button>
            </div>
        </div>

        <!-- 修改弹层 -->
        <div class="messageBox" v-if="isMegEditBox">
            <div>
                <el-input  v-model="megEditBox.name"  placeholder ='姓名'></el-input>
                <template>
                    <el-radio v-model="megEditBox.sex" label="男">男</el-radio>
                    <el-radio v-model="megEditBox.sex" label="女">女</el-radio>
                </template>
                <el-input  v-model="megEditBox.time"  placeholder ='出生日期'></el-input>
                <el-input  v-model="megEditBox.address" placeholder ='地址'></el-input>
                <el-input  v-model="megEditBox.phone"  placeholder ='电话'></el-input>
                <el-input  v-model="megEditBox.email"   placeholder ='邮箱'></el-input>
            </div>
            <div class="handleBtn">
                <el-button class="handleBtnOne" @click="editBtn">确认</el-button>
                <el-button @click="delEdit">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'personList',
    data() {
        return {
            personData:[],
            megBoxData:{},
            megEditBox:{},
            isMessageBox:false,
            isMegEditBox:false,
            searchDat:""

        }
    },
    mounted() {
        this.setPersonApi()
    },
    methods: {
        //增加
        add(){
            this.isMessageBox = true
        },
        // 增加确认
        addBtn(){
            let _id = Math.max(...this.personData.map((item)=>{return item.per_id}))+1
                this.personData.push({
                  name:this.megBoxData.name,
                  sex:this.megBoxData.sex,
                  address:this.megBoxData.address,
                  time:this.megBoxData.time,
                  email:this.megBoxData.email,
                  phone:this.megBoxData.phone,
                  per_id:_id
            })
            this.megBoxData={}
            this.isMessageBox = false   
        },
        // 取消增加
        delAdd(){
             this.isMessageBox = false
        },
        // 修改
        edit(i,d){
            this.isMegEditBox = true
            // console.log(i);
            // console.log(d);
            // this.megEditBox=d
            this.megEditBox={
                name:d.name,
                sex:d.sex,
                address:d.address,
                time:d.time,
                email:d.email,
                phone:d.phone,
                per_id:d.per_id
            }
            
        },
        editBtn(){
                this.personData.forEach((item,index)=>{
                 if (item.per_id == this.megEditBox.per_id) {
                     this.personData[index] = this.megEditBox
                     this.$set( this.personData, index, this.megEditBox )
                 } 
             }) 
             this.isMegEditBox = false
        },
        delEdit(){
            this.isMegEditBox = false
        },
        del(i){
            this.personData.splice(i,1)
        },
        search(){
            let arrNews = []
            this.personData.map((items)=>{
                if (items.name.search(this.searchDat) != -1 ) {
                    arrNews.push(items)
                }
                
            })
            this.personData = arrNews
            this.searchDat =""
        },
        setPersonApi:function(){
            let _this = this
            this.axios({
                url:'http://localhost:3000/personalData',
                method:'get'
            }).then((res)=>{
                console.log(res.data);
                _this.personData = res.data
            })
        }
    },
}
</script>

<style scoped>
    .personList{
        position: relative;
    }
    .searchBox{
        display: flex; 
    }
    .messageBox{
        width: 500px;
        height: 320px;
        text-align: center;
        background: burlywood;
        border: 1px solid #ccc;
        border-radius: 10px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        
    }
    .el-input{
        margin-top: 10px;
    }
    .handleBtn{
        margin-top: 5px;
    }
    .handleBtnOne{
        margin-right: 180px;
    }
</style>