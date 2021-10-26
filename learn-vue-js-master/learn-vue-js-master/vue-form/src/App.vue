<template>
  <form v-on:submit.prevent="submitForm">
    <!-- eventmodifier: .prevent -->
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
  
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return{
      username: '',
      password: '',

    }
  },
  methods: {
    submitForm: function() {
      //submit event 를 인자로
      // event.preventDefault();
      //새로고침 막음
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      //data 보내고 결과를 받는 주소
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
      // post : data 생성, 조작시 사용하는 http 방법/메소드
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>