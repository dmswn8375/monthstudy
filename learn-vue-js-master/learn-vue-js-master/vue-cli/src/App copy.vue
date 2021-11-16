<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- 컴포넌트 명명법 종류 -->
    <!-- <hello-world></hello-world> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <HelloWorld> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// helloworld를 가져와서 사용

export default {
  // 인스턴스 옵션 속성 or 컴포넌트 옵션 속성
  name: 'App',
  components: {
    // 'hello-world' : 생략
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>