<template>
    <div class="tab">
        <router-link to="./home1" class="item">home1</router-link>
        <router-link to="./about1" class="item">about1</router-link>
        <router-link to="./user1" class="item">user1</router-link>
    </div>
</template>

<script>


export default {
    name:"tab",
    
}
</script>

<style scoped>
    .tab{
        display: flex;
        flex-direction: column;
        width: 30%;
        background:#ccc;
        text-align: center;
    }
    .item{
        text-decoration: none;
        margin-bottom: 20px;
    }
</style>