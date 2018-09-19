<template>
  <div class="swiper-container">
    <div v-if="listImg.length>1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="str in listImg" :key="str">
          <img :src="str.url" alt="banner">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <div v-if="listImg.length<2" style="position:relative">
      <img :src="listImg[0].url" alt="banner">
    </div>
  </div>

</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  props: ['listImg'],
  mounted () {
    if (this.listImg.length > 1) {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        loop: true,
        speed: 600,
        autoplay: false,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      });
    }
  }
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

.swiper-container img {
  z-index: 3;
  max-width: 100%;
  height: auto;
}

/*.swiper-container .article{*/
/*position:absolute;*/
/*top:0;*/
/*bottom:0;*/
/*width:100%;*/
/*color:#fff;*/
/*}*/
/*.swiper-container .article .title {*/
/*margin-top:290px;*/
/*font-size: 44px;*/
/*font-weight: 300;*/
/*text-align:center;*/
/*!*text-shadow:1px 2px 1px #000;*!*/
/*}*/
/*.swiper-container .article .subtitle {*/
/*font-size: 28px;*/
/*text-align:center;*/
/*margin-top:20px;*/
/*letter-spacing: 3px;*/
/*}*/
/*.swiper-container .article  .text {*/
/*font-size: 14px;*/
/*max-width: 400px;*/
/*line-height: 1.3;*/
/*}*/
.swiper-container-horizontal > .swiper-pagination-bullets {
  text-align: right;
  bottom: 35px;
  right: 30px;
  width: auto;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  font-size: 13px;
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 22px;
  opacity: 1;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet-active {
  background-color: #fff;
  color: #000;
}

.swiper-pagination-bullet {
  width: 0.833rem;
  height: 0.833rem;
  display: inline-block;
  background: #7c5e53;
}
</style>
