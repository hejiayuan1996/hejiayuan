<template>
  <div id="index">
    我的啊啊啊
    <!-- <li>
        <mt-button @click="go">测试跳转</mt-button>
    </li> -->
    <div>{{name}}是一个{{description}}</div>
    <ul v-for="(item,index) in myData" :key="index">
       <li>{{item.description}}{{index}}</li>
    </ul>
  </div>
</template>
<script>
export default {
    data(){
       return {
           name:'',
           description:'',
           myData:[]
       }
    },
    created(){
     this.$http.get('http://localhost:8080/api/seller').then(res =>{
         console.log(res)
         this.name = res.body.data.name;
         this.description = res.body.data.description;
         this.myData = res.body.data.supports;
     })
    },
    methods:{
        go(){
            this.$router.push(
                {
                    name:'Fa'
                }
            )
        }
    }
}
</script>
<style scoped>
  #index {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
</style>

