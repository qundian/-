<template>
  <swiper :options="RotaryPlantingMap" id='RotaryPlantingMap'>
    <swiper-slide v-for="(item,index) in imglist" :key='index'>
      <img :src="item"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
　</swiper>
</template>

<script>
  export default{
    props: ['imglist'],
    data (){
      return {
        RotaryPlantingMap: {
          direction: 'horizontal',
          loop: true,
          autoplay: false,
          slidesPerView: "auto",
          centeredSlides:true,
          spaceBetween: 20
        }
      }
    }
  }
</script>

<style>
  #RotaryPlantingMap{margin-top: 3em;margin-bottom: .5em;height:10.75em;}
  #RotaryPlantingMap img{width:100%;}
  #RotaryPlantingMap .swiper-wrapper{padding-left:0;}
  #RotaryPlantingMap .swiper-slide-next img,#RotaryPlantingMap .swiper-slide-prev img{height:80%;margin-top:5%;}
</style>
