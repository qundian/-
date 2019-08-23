<template>
    <div id="imgModel" :style="{zIndex:zIndex}">
        <div>
            <img src="/images/close_2.png" alt="关闭" id="imgModel_close" @click='close($event)'>
            <a :href="imgModels.href">
                <img :src="imgModels.src" alt="广告" id="imgModel_img">
            </a>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default{
        props: ['imgModel','zIndex'],
        data (){
            return {
                imgModels:this.imgModel
            }
        },
        methods: {
            close: function(event){
                $(event.currentTarget).parent().parent().hide();
                // this.$data.imgModels.ad_list_4 = '';
            }
        },
    }
</script>

<style>
    #imgModel{position:fixed;top:0;left:0;right:0;bottom:0;z-index:11;background:rgba(0,0,0,.3);padding-top:20%;}
    #imgModel_close{width:2em;position:absolute;top:0;right:0;z-index:1;}
    #imgModel_img{width:100%;}
    #imgModel div{width:78%;position:relative;max-width:600px;overflow:hidden;left:11%;z-index:1;}
</style>
