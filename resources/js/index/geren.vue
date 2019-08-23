<template>
    <div>
        <div class="c_geren_top">
            <div id="c-mine-light">
                <div style="position: relative;width: 100%;height: 100%;">
                    <div id="c-mine-light_1"></div><div id="c-mine-light_2"></div><div id="c-mine-light_3"></div>
                </div>
            </div>
            <div class="c_geren_topLeft">
                <div style="position: relative;height: 100%;">
                    <img :src="'/images/'+user_info.head_image" id="c-mine-pic">
                    <img src="/images/king1@3x.png" id="c-mine-king">
                </div>
            </div>
            <div class="c_geren_topRight">
                <p style="color: #fff;" id="c-mine-name">
                    <em>{{user_info.username}}</em><span style="color: #FFF142">Lv{{user_info.lv}}</span>
                </p>
            </div>
            <router-link :to="{path:'login/grxx'}" id="c-mine-shezhi" style='display:inline;height:auto;'>
                <img src="/images/shezhi@3x.png" >
            </router-link>
        </div>
        <ul id="c-mine-col-2">
                <!-- <li>
                    <a href="{:U('Member/buy')}">
                        <img src="/images/king@3x.png">
                        <div>
                            <p>尊贵会员</p>
                            <span>会员到期:{$vip_info['end_time']|date="Y-m-d",###}</span>
                        </div>
                    </a>
                    <b></b>
                </li> -->
                <li>
                    <a href="{:U('Member/buy')}">
                        <img src="/images/king@3x.png">
                        <div>
                            <p>开通会员</p>
                            <span>点击了解会员详情</span>
                        </div>
                    </a>
                    <b></b>
                </li>
            <li>
                <a href="{:U('SignIn/index')}">
                    <img src="/images/signin1.png" style="width:2.5em;margin-top:.1em;">
                    <div>
                        <p>赚积分兑好礼</p>
                        <span>积分：{{user_info.score}}</span>
                    </div>
                </a>
            </li>
        </ul>
        <!-- 订阅 -->
        <div id="ad" style="padding:.5em 2.5%;">
            <a href="{:U('Personal/newPerson')}">
                <img src="/images/newPersonAd.jpg" alt="img" style="width:100%;">
            </a>
        </div>

        <div class="personal_wrap">
            <router-link :to="{path:'personal/buy_record'}">
                <geren-line :text="'已购课程'" :srcs="'/images/class@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'personal/study_record'}">
                <geren-line :text="'我的学习记录'" :srcs="'/images/lishi@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'personal/collections'}">
                <geren-line :text="'我的收藏'" :srcs="'/images/heart@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'personal/personalAct'}">
                <geren-line :text="'我的活动'" :srcs="'/images/activityT.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'personal/userCoupon'}" style='margin-top:10px;'>
                <geren-line :text="'我的兑换券'" :srcs="'/images/quan@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'index/myGift'}">
                <geren-line :text="'我的奖品'" :srcs="'/images/c-mygift@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'medal/userMedalsWall'}">
                <geren-line :text="'我的勋章'" :srcs="'/images/xunzhang@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'contract/special_contract',query:{id:1}}">
                <geren-line :text="'我的协议'" :srcs="'/images/xieyi.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'Index/userFedBack'}" style='margin-top:10px;'>
                <geren-line :text="'用户反馈'" :srcs="'/images/fankui@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'Login/kefu'}">
                <geren-line :text="'联系客服'" :srcs="'/images/kefu@3x.png'"></geren-line>
            </router-link>
            <router-link :to="{path:'Dy/setmessage'}">
                <geren-line :text="'消息提醒设置'" :srcs="'/images/tongzhi@3x.png'"></geren-line>
            </router-link>
             <!-- 勋章弹框 -->
            <div class="mask1" style="display:none;"></div>
            <div class="gift1" style="display:none;">
                <div class="tan_xz">
                    <img src="/images/exam_No1.png">
                </div>
                <p style="padding-top: 20px;font-size:18px;">您已完善信息</p>
                <p style="padding-top: 10px;font-size:16px;">获得头头是道勋章</p>
                <h5 id="get">领取</h5>
                <span class="c_1222"></span>
             </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
    import $ from 'jquery'
    import Foot from '../components/foot.vue'
    import GerenLine from '../components/gerenLine.vue'
    export default({
        data (){
            return {
                user_info:{username:'慕容飞雪',lv:4,head_image:'ilike.jpg',score:123}
            }
        },
        created() {

        },
        computed: {

        },
        methods: {

        },
        components:{
            Foot,
            GerenLine
        }
    });
</script>
<style>
    @import url("../../../public/css/c-mine.css");
    body{background: #F7F7F7;}
</style>
