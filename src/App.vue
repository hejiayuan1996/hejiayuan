<template>
  <div id="app">
    <div class="content-div">
         <router-view/>
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
import Footer from './components/Spinner/footerBar'
export default {
  name: 'App',
  components:{
     'footer-bar':Footer
  },
  methods:{
    handleClick(){
      this.$toast('Hello World!')
    }
  }
}
</script>

<style scoped>
.content-div {
  margin-bottom: 55px;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
