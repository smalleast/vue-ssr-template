<template>
  <div class="content_all">
    <div class="content_ever" v-for="item in caseList" @click="goDetail(item.id)" :key="item.id">
      <div class="ever_top">
        <div class="top_img">
          <img :src="imageBaseUrl+item.coverFile.key" v-if="item.coverFile" alt="img">
        </div>
        <div class="top_start">
          <img src="../assets/hello/start.png" alt="">
        </div>
      </div>
      <div class="ever_bottom">
        <h5 class="bottom_h5">{{item.name}}</h5>
        <p class="main_p" style="color:#fff">{{item.code}}</p>
        <div class="bottom_line"></div>
      </div>
      <div class="ever_bg"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'case-list-card',
    props: {
      data: Array,
      required: true
    },
    data(){
      return {
        showEn:this.$root.showEn,
        imageBaseUrl: 'http://oss.zhulogic.com/',
        caseList: this.data
      }
    },
    methods:{
        goDetail(id){
          var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
          this.$router.push({path:`/case/${id}`,query:{scrollTop:scrollTop,lang:this.showEn?'en':'zh'}});
        }
    }
  }
</script>
<style>
  .content_all {
    width: 100%;
    padding-top: 50px;
  }

  .content_all .content_ever {
    display: inline-block;
    width: 26vw;
    min-width: 330px;
    max-width: 490px;
    margin: 1vw;
    background: #000;
    position: relative;
    cursor:pointer;
  }

  .content_all .content_ever .ever_top {
    position: relative;
  }

  .content_all .content_ever .ever_top .top_img {
    height: 17.5vw;
    min-height: 220px;
    max-height: 327px;
    overflow: hidden;
    position: relative;
    outline: none;
  }

  .content_all .content_ever .ever_top .top_img img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 50%;
    min-height: 100%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    top: 0 \9 \0;
    transform: translateY(0) \9 \0;
    -ms-transform: translateY(0) \9 \0;
  }

  .content_all .content_ever .ever_top .top_start {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  .content_all .content_ever .ever_bg {
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.5;
  }

  .content_all .content_ever .ever_bg:hover {
    opacity: 0;
  }

  .content_all .content_ever .ever_bottom {
    text-align: left;
    padding-left: 40px;
    padding-bottom: 30px;
    position: relative;
  }

  .content_all .content_ever .ever_bottom .bottom_h5 {
    clear: both;
    width: 100%;
    height: 30px;
    color: #fff;
    margin-top: 40px;
    font-size: 19px;
    font-weight: normal;
  }

  .content_all .content_ever .ever_bottom .bottom_p {
    width: 100%;
    height: 20px;
    font-size: 14px;
    color: #fff;
  }

  .content_all .content_ever .ever_bottom .bottom_pp {
    width: 50%;
    height: 20px;
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
  }

  .content_all .content_ever .ever_bottom .bottom_line {
    width: 20px;
    height: 20px;
    border-left: 1px solid #fff;
    margin-top: 35px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }

  .content_all .content_ever .cont_main {
    width: 200px;
    height: 20px;
    color: #fff;
    position: absolute;
    right: -60px;
    bottom: 130px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    text-align: left;
  }

  .content_all .content_ever .main_p {
    color: #fff;
    font-size: 13px;
    margin-top:20px;
  }
</style>
