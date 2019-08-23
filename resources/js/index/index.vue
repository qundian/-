<template>
  <div>
    <!-- 搜索栏 -->
    <header id="c-public-search" style="font-size:16px;">
    	<router-link :to="{path:'search/search'}">
    		<div style="background: #fff;width:50%;float: left;margin-left: 4%;height: 1.7em;line-height: 1.5em;">
    			<img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/search@3x.png">
    			<span>搜索</span>
    		</div>
    	</router-link>
    	<div id='si0308' style="width:42%">
    		<router-link :to="{path:'index/setSendMessage'}">
    			<p style="width:46%;">
    				<img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/index030802.png">
    				<span>订阅</span>
    			</p>
    		</router-link>
    		<router-link :to="{path:'signIn/first'}">
    			<p style="margin-left: 2%;width:51%;">
    				<img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/S-042501.png">
    				<span>签到学习</span>
    			</p>
    		</router-link>
    	</div>
    </header>
    <carousel :imglist='imglist'></carousel>
    <icon :icon='icons'></icon>
    <div id="c-index-ad" style="padding:0px;text-align: center;">
    	<a href="https://m.hrpindao.com/Personal/newPerson.html">
    		<img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/newPersonAd.jpg" style="width: 95%;">
    	</a>
    </div>
    <!-- 直播课堂 -->
    <div id="c-index-live">
		<Leaders :href="'activity/newList'" :text="'大咖讲堂'"></Leaders>
		<div class="swiper-container c-live">
		<div class="swiper-wrapper" style="padding-left: 0;">
		  <div class="swiper-slide" style="width:90% !important;">
			<ul class="newLive">
			  <li style="padding-bottom: .7em;overflow:hidden;" v-for="item in liveClass">
				<router-link :to="{path:'activity/liveDetail',query:{id:item.id}}">
				  <div class="live_left">
					<img :src="item.src" style="height: 100%;width:100%;">
					<p>{{item.num}}人报名</p>
				  </div>
				  <div class="live_right ai0313" style="width: 73%;">
					<p>{{item.title}}</p>
					<dd>{{item.postion}}</dd>
					<div>{{item.time}}直播</div>
					<span>限时免费</span>
				  </div>
				</router-link>
			  </li>
			</ul>
			</div>
			<div class="swiper-slide" style="">
			  <div style="">
				<ul class="newLive">
				  <li style="padding-bottom: .7em;overflow:hidden;" v-for="item in vipClass">
					<router-link :to="{path:'video/video',query:{node_id:item.node_id,id:item.id}}">
					  <div class="live_left">
						<img :src="item.src" style="height: 100%;width:100%;">
					  </div>
					  <div class="live_right ai0313" style="width: 72%;">
						<p>{{item.title}}</p>
						<dd>{{item.postion}}</dd>
						<div style="color: #909399;font-size: 0.9em;">
						  <s>￥{{item.price}}</s>
						  <b style="color:#FF7F1D;margin-left: .5em;">VIP免费</b>
						</div>
					  </div>
					</router-link>
				  </li>
				</ul>
			  </div>
			</div>
			<div class="swiper-slide" style="">
			  <ul class="newLive">
				<li style="padding-bottom: .7em;overflow:hidden;" v-for="item in vipClass">
				  <router-link :to="{path:'video/video',query:{node_id:item.node_id,id:item.id}}">
					<div class="live_left">
					  <img src="https://m.hrpindao.com/Public/upload/course_img/5c88ca6d80876.jpg" style="height: 100%;width:100%;">
					</div>
					<div class="live_right ai0313" style="width: 72%;">
					  <p>华为HRBP实操案例分享</p>
					  <dd>刘冰 | 干部与人才管理专家</dd>
					  <div style="color: #909399;font-size: 0.9em;">
						<s>￥26.9</s>
						<b style="color:#FF7F1D;margin-left: .5em;">VIP免费</b>
					  </div>
					</div>
				  </router-link>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
    </div>
    <!-- 精品课程 -->
    <div id="c-index-class">
    	<Leaders :href="'trainCamp/index'" :text="'精品课程'"></Leaders>
    	<div class="swiper-container c-swiper-jp" style="padding-right: .4em;">
    		<div class="swiper-wrapper">
    			<div class="swiper-slide c-sm">
    				<router-link :to="{path:'member/buy'}">
    					<img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/c-vip.jpg?time=20180827" style="width: 100%;">
    					<p>200节微课免费畅听</p>
    				</router-link>
    			</div>
          <div class="swiper-slide c-sm" v-for="item in bestClass">
            <router-link :to="{path:'exam/index',query:{pid:item.pid}}">
              <img :src="item.src" style="width: 100%;">
              <p>
                <em style="color:#909399;font-size:.8em;">{{item.num}}人次学习</em>
                <span style="color:#FF7F1D;float:right;">￥{{item.price}}</span>
              </p>
              <img src="__PUBLIC__/upload/train_camp/{$v.index_label_img}" class="swiper-slide-jp">
            </router-link>
          </div>
    		</div>
    	</div>
    </div>
    <!-- 推荐老师 -->
    <div id="c-index-class">
    	<Leaders :text='"推荐讲师"' :href='"lecturer/class_list"'></Leaders>
    	<!-- Swiper -->
    	<div class="swiper-container teacher" style="padding-right: 0.5em;padding-left: 1em;">
    		<div class="swiper-wrapper" style="padding-left: 0;">
          <div class="swiper-slide" v-for="item in teachers">
            <router-link :to="{path:'lecturer/details',query:{id:item.pid}}">
              <div class="c-lecturer-userhead" style="border-radius: .5em;">
                <img :src="item.src" style="height: auto;">
                <p>{{item.class}}</p>
              </div>
              <p class='c-lecturer-name'>{{item.name}}</p>
            </router-link>
          </div>
    		</div>
    	</div>
    </div>
    <a href="https://mp.weixin.qq.com/s/zxltvqNIz8gKQJQVNZC5_w">
    	<div style="height:0.6875em;background:#f7f7f7;"></div>
    	<div style="text-align: center;"><img src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/G-03291.png?time=1" style="width:95%;"></div>
    </a>
    <!-- 六月招聘季 -->
    <div id="c-index-zhaopin" style="clear: both;">
    	<Leaders :text='"走进标杆"' :href='"lecturer/benchmark"'></Leaders>
    	<ul>
        <li v-for="item in biaogan">
          <router-link :to="{path:'lecturer/tourDetail',query:{id:item.pid}}">
            <div class="c-index-zhaopin-div1">
              <img class="c-index-zhaopin-img1" :src="item.src">
            </div>
            <div class="c-index-zhaopin-div2" style="position: relative;height: 4.1875em;">
              <h3>
                {{item.title}}
                <!-- 如果剩余名额大于0 显示 否则反之 -->
                <span class="num0322" v-if="item.num > 0">剩余名额:{{item.num}}人</span>
              </h3>
              <dd class="c-public-rightDiv-namePosition">
                <em style="width:100%;line-height:normal;font-size:.85em;">{{item.content}}</em>
              </dd>
              <p style='position:absolute;bottom:0;'>{{item.addTime}}</p>
            </div>
          </router-link>
        </li>
    	</ul>
    </div>
    <div id="c-index-everyday">
      <Leaders :text='"好文阅读"' :href='"file/dern"'></Leaders>
      <ul>
        <router-link :to="{path:'file/article_con',query:{id:article.id,uid:article.uid}}">
          <li style="padding: 0.6875em 1.25em;overflow: hidden;padding-top: 0px;">
            <div class="c-index-zhaopin-div1">
              <img class="c-index-zhaopin-img1" src="https://m.hrpindao.com/Application/Wechat/View/Public/static/images/goodRead.png">
            </div>
            <div class="c-index-zhaopin-div2 A-0326" style="height: 4.1875em;position: relative;">
              <h3 id="everyday" style="float:left;margin-top: 0.5em;font-size:.965em;">{{article.title}}</h3>
              <p style="clear:both;"></p>
              <dd class="c-public-rightDiv-namePosition" style="position:absolute;bottom:10px;left:0px;font-size:.8em;">
              </dd>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 积分商城 -->
    <div id="c-index-shop">
      <Leaders :href='"scoreshop/index"' :text='"积分商城"'></Leaders>
      <div style="padding: 0px 1.25em;padding-bottom: 0.9em;overflow: hidden;">
          <!-- 正常商品图片 -->
          <template v-for="item in scoreShop">
            <router-link :to="{path:'scoreshop/shop_detail',query:{id:item.id}}">
              <div class="c-index-live-col">
                <img :src="item.src">
                <p style="margin-top: 4px;">{{item.title}}</p>
                <dd>
                  <span>{{item.num}}</span><em>积分</em>
                </dd>
              </div>
            </router-link>
          </template>
      </div>
    </div>
    <!-- 资料库 -->
    <div id="c-index-library">
      <Leaders :text='"资料库"' :href='"fileLibrary/index"'></Leaders>
      <ul>
        <li v-for="item in means">
          <!-- <img src="__STATIC__/images/c-new.gif" class="c-index-new"> -->
          <router-link :to="{path:'fileLibrary/index',query:{class_id:item.class_id}}">
          <img :src="item.src">
          <div>
            <h3>{{item.title}}</h3>
            <p>{{item.classify}}</p>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
    <foot></foot>
    <!-- 广告弹窗 -->
    <ImgModel :imgModel='imgModel' :zIndex='21' v-if='show'></ImgModel>
  </div>
</template>

<script>
	import $ from 'jquery'
	import Public from '../../../public/js/public.js'
	import Foot from '../components/foot.vue'
	import Icon from '../components/icon.vue'
	import Leaders from '../components/leaders.vue'
	import Carousel from '../components/carousel.vue'
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css'
    import ImgModel from '../components/imgModel.vue';

	export default {
		// 数据
		data () {
			return {
				imglist: [
						  {src:'https://m.hrpindao.com/Public/upload/banner/20190708134205.jpg',href:''},
						  {src:'https://m.hrpindao.com/Public/upload/banner/20190724003920.jpg',href:''},
						  {src:'https://m.hrpindao.com/Public/upload/banner/20190326203431.jpg',href:''},
						  {src:'https://m.hrpindao.com/Public/upload/banner/20190716153055.jpg',href:''}
						 ],
				icons: [
						{src:'https://m.hrpindao.com/Application/Wechat/View/Public/static/images/big_class_.png',text:'大咖讲堂',href:'video/course_class'},
						{src:'https://m.hrpindao.com/Application/Wechat/View/Public/static/images/train_icon@3x.png',text:'系列好课',href:'trainCamp/index'},
						{src:'https://m.hrpindao.com/Application/Wechat/View/Public/static/images/benchmark.png',text:'走进标杆',href:'lecturer/benchmark'},
						{src:'https://m.hrpindao.com/Application/Wechat/View/Public/static/images/ai0313.png',text:'内训定制',href:'lecturer/class_list'}
					  ],
				liveClass: [
						{id:1,src:'https://m.hrpindao.com/Public/upload/activity/5d2d3bd10cbd9.jpg',title:'HR如何利用思维导图提高工作效率？',postion:'陈资璧 | 亚洲首位获得博赞认证的华人女导师',time:'07-18 20:00'},
						{id:1,src:'https://m.hrpindao.com/Public/upload/activity/5d2d3bd10cbd9.jpg',title:'HR如何利用思维导图提高工作效率？',postion:'陈资璧 | 亚洲首位获得博赞认证的华人女导师',time:'07-18 20:00'}
					  ],
				vipClass: [
						{id:1,node_id:1,src:'https://m.hrpindao.com/Public/upload/course_img/5c88ca110eec4.jpg',title:'京东人才梯队建设',postion:'纪冬妮 | 人才发展部负责人',price:'26.9'},
						{id:1,node_id:1,src:'https://m.hrpindao.com/Public/upload/course_img/5c88ca110eec4.jpg',title:'京东人才梯队建设',postion:'纪冬妮 | 人才发展部负责人',price:'26.9'}
					  ],
				bestClass: [
						{pid:1,src:'https://m.hrpindao.com/Public/upload/train_camp/5d3581f64bff9.jpg',num:3,price:99.00},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/train_camp/5d3581f64bff9.jpg',num:3,price:99.00},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/train_camp/5d3581f64bff9.jpg',num:3,price:99.00},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/train_camp/5d3581f64bff9.jpg',num:3,price:99.00}
					  ],
				teachers: [
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5c8b7ffa2ca8e.jpg',class:'人力资源专家',name:'张老师'}
					  ],
				biaogan: [
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5cd3fb5e850fc.jpg',title:'阿里巴巴',content:'寻根源 理思维 观大势 找方法',addTime:'地点：杭州 | 时间：7月29-30日',num:1},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5cd3fb5e850fc.jpg',title:'阿里巴巴',content:'寻根源 理思维 观大势 找方法',addTime:'地点：杭州 | 时间：7月29-30日',num:2},
						{pid:1,src:'https://m.hrpindao.com/Public/upload/lecturer/5cd3fb5e850fc.jpg',title:'阿里巴巴',content:'寻根源 理思维 观大势 找方法',addTime:'地点：杭州 | 时间：7月29-30日',num:3}
					  ],
				scoreShop: [
						{id:1,src:'https://m.hrpindao.com/Public/upload/goods_img/5c0f1fe2228de.jpg',title:'华为人力资源管理',num:32},
						{id:1,src:'https://m.hrpindao.com/Public/upload/goods_img/5c0f1fe2228de.jpg',title:'华为人力资源管理',num:345}
					  ],
				means: [
						{class_id:1,src:'https://m.hrpindao.com/Public/upload/file/5b68072f1311d.png',title:'员工招聘',classify:'绩效'},
						{class_id:1,src:'https://m.hrpindao.com/Public/upload/file/5b68072f1311d.png',title:'员工招聘',classify:'绩效'},
						{class_id:1,src:'https://m.hrpindao.com/Public/upload/file/5b68072f1311d.png',title:'员工招聘',classify:'绩效'},
						{class_id:1,src:'https://m.hrpindao.com/Public/upload/file/5b68072f1311d.png',title:'员工招聘',classify:'绩效'}
					  ],
				article: {title:'硬核HR们都在谈论的OD到底是什么？',id:1,uid:170038},
                imgModel: {href:'',src:'https://m.hrpindao.com/Public/upload/ad/5d4c2b99490a8.jpg',ad_list_4:'1'},
                show: false
			}
		},
		// 实例创建前
		created (){

		},
		// 实例创建时
		mounted (){
			  // $('#myModal').modal('show');
			  var swipers = new Swiper('.c-live', {
				on: {
					slideChangeTransitionStart: function(event){
					if(this.activeIndex < $('.c-live .swiper-wrapper').children('.swiper-slide').length){
						move(this.activeIndex);
					  }
					},
					transitionStart: function(){
					  if(this.activeIndex < $('.c-live .swiper-wrapper').children('.swiper-slide').length){
						move(this.activeIndex);
					  }
					}
				  }
			  });
			  function move(option){
				var width = window.screen.width*0.9;
				$('.c-live .swiper-wrapper')[0].style.transform = 'translate3d(-'+width*option+'px,0px,0px)';
			  }
			  var swiper = new Swiper('.c-swiper-jp', {
				slidesPerView: 'auto',
				spaceBetween: 20,
				freeMode: true
			  });
			  var swiper = new Swiper('.teacher', {
				slidesPerView: 'auto',
				spaceBetween: 0,
				freeMode: true
			  });
		},
		// 计算属性
		computed: {

		},
		// 组件
		components: {
			Foot,
			Leaders,
			Icon,
			Carousel,
            ImgModel
		},
			// 方法
		methods: {
			toPage: function(){
				this.$router.push({path: '/geren',query:{id:123}})
			}
		},
		// 监听
		watch: {

		},
		beforeDestroy() {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url("../../../public/css/Index-index.css");
  body{padding-bottom:3em;}
</style>
