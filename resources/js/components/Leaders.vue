<template>
	<div>
		<a :href="href">
			<div class="c-public-leader" style="text-align:left;">
				<img class="c-public-leader-img1" src="/images/home_title_img@3x.png">
				<span>{{text}}</span>
				<img class="c-public-more" src="/images/More@3x.png">
			</div>
		</a>
	</div>
</template>

<script>
  export default {
    props: ['href','text'],
    data (){
      return {

      }
    }
  }
</script>

<style>
</style>
