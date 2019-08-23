<template>
    <div class="personal_mian">
        <img :src="srcs" alt="" class="personal_maozi icon">
        <h3 class="span">{{text}}</h3>
        <img src="/images/right@3x.png" alt="" class="personal_xi">
    </div>
</template>

<script>
    import $ from 'jquery'
    export default{
        props: ['srcs','text']
    }
</script>

<style>
</style>
