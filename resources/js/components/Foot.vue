<template>
	<div class="foot">
		<ul>
			<li><router-link :to="{path:'/video/classify'}">分类</router-link></li>
			<li><router-link :to="{path:'/video/course_class'}">VIP专区</router-link></li>
			<li><router-link :to="{path: '/'}">首页</router-link></li>
			<li><router-link :to="{path:'/personal/record'}">学习数据</router-link></li>
			<li><router-link :to="{path: '/index/geren'}">我的</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data (){
			return {

			}
		},
		methods: {

        }
	}
</script>

<style>
	.foot{
		position:fixed;
		bottom:0;
		line-height:3em;
		text-align: center;
		width:100%;
        background:#fff;
        z-index:10;
	}
	.foot ul{
		width:100%;
	}
	.foot ul li{
		width:20%;
		float: left;
	}
</style>
