<template>
 <header>
     <h1>{{ propsdata }}</h1>
     <button v-on:click="sendEvent">send</button>
 </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew');
            //이벤트 올려보내기
        }
    }

}
</script>

<style>

</style>