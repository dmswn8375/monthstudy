<template>
  <div>
    <!-- <app-header v-bind :(하위 컴포넌트에 있는)프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header
    v-bind:propsdata="str"
    v-on:renew="renewStr"
    ></app-header>
  </div>
  <!-- div 안에서 해야함 -->
</template>

<script>
import AppHeader from './components/AppHeader.vue';
//(앞에서 한것 :객체가 아닌)파일의 내용을 AppHeader변수에 담김
//  var AppHeader = {
//    template: '<header><h1>Header</h1></header>'
//  }

export default {
 data: function() {
   return {
     str: 'Header'
   }
 },
 components: {
   'app-header' : AppHeader
 },
 methods: {
   renewStr: function() {
     this.str = 'hi';
     //같은 객체 내에서 불러올때 this씀

   }
 }
}
</script>

<style>

</style>
