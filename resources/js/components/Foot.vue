<template>
	<div class="foot">
		<ul>
			<li><router-link :to="{path:'/classify'}">分类123</router-link></li>
			<li><router-link :to="{path:'/course_class'}">VIP专区</router-link></li>
			<li><router-link :to="{path: '/'}">首页</router-link></li>
			<li><router-link :to="{path:'/personal/record'}">学习数据</router-link></li>
			<li><router-link :to="{path: '/geren',query:{id:321}}">我的</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id: 66,
				msg: ''
			}
		},
		mounted: function(){
			this.msg = '/view/test/'+this.id
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
