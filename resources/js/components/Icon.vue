<template>
  <div>
  	<ul id="c-index-nav">
  		<li v-for="item in items">
  			<router-link :to="{path:item.href}">
  				<img :src="item.src">
  				<p>{{item.text}}</p>
  			</router-link>
  		</li>
  	</ul>
  </div>
</template>

<script>
  export default{
    props: ['icon'],
    data (){
      return {
        items: this.icon
      }
    }
  }
</script>

<style>
</style>
