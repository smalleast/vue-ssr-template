<template>
  <div class='details'>
    <div class='details_titler'>
      <div class="back">
        <button class="ever_btn" @click="goBack">{{showEn?'Back':'返回'}}</button>
      </div>
      <h3>{{caseItem.name}}</h3>
      <h4>设计师·{{caseItem.designer}}</h4>
      <span>{{caseItem.code}}</span>
    </div>
    <div class='details_content'>
      <div class="swiper-container" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="desc in caseItem.descFiles" :key="desc.id">
            <img :src="imageBaseUrl+desc.descFile.key">
          </div>
        </div>
        <div class="swiper-button-prev swiper-button-white"></div>
        <div class="swiper-button-next swiper-button-white"></div>
      </div>
      <div class="rests_img">
        <img :src="imageBaseUrl+desc.thumbFile.key" v-if="desc.thumbFile" @click="changeImg(index)" v-for="(desc,index) in caseItem.descFiles" :key="index">
      </div>
    </div>
    <div class='details_referral'>
      <h5>DESCRIPTION 案例介绍</h5>
      <p>{{caseItem.introduce}}</p>
    </div>
    <div>
      <contact-footer></contact-footer>
    </div>
  </div>
</template>
<script>
import ContactFooter from '~/components/ContactFooter'
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name: 'case-detail',
  data () {
    return {
      showEn: this.$root.showEn,
      caseItem: {},
      url: '',
      swiper: {},
      imageBaseUrl: 'http://oss.zhulogic.com/',
      swiperOption: {
        loop: true,
        autoplay: false,
        observer: true,
        speed: 600,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  methods: {
    changeImg (index) {
      this.mySwiper.slideTo(index + 1, 600, false);
    },
    goBack () {
      this.$router.back();
    }
  },
  asyncData ({ params }) {
    return axios.get(`/website_api/web_projects/${params.caseId}`)
      .then(res => {
        if (res.data.status_code == 200) {
          var that = this;
          return {
            caseItem: res.data.data,
            url: `http://oss.zhulogic.com/${res.data.data.coverFile.key}`
          }
        }
      });
  },
  components: {
    'contact-footer': ContactFooter
  }
}
</script>
<style scoped>
.details {
  width: 100%;
  height: auto;
  padding-top: 60px;
  background: #151515;
}

.back {
  position: absolute;
  top: 10px;
  left: 0;
}

.back .ever_btn {
  width: 90px;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}

.details .details_titler {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.details .details_titler p {
  width: 100%;
  height: 16px;
  margin-top: 40px;
  color: #fff;
  font-size: 16px;
}

.details .details_titler h3 {
  width: 100%;
  height: 37px;
  font-size: 37px;
  color: #fff;
  margin-top: 24px;
  font-weight: normal;
}

.details .details_titler h4 {
  width: 100%;
  height: 16px;
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
  display: inline-block;
  font-weight: normal;
}

.details .details_titler span {
  display: inline-block;
  width: 100%;
  height: 13px;
  margin-top: 20px;
  margin-bottom: 39px;
  color: #fff;
}

.details .details_content {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}

.details .details_content .swiper-container {
  width: 100%;
  height: 600px;
  padding: 10px 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}

.details .details_content .swiper-container img {
  max-width: 100%;
  max-height: 100%;
}

.details .details_content .rests_img {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.details .details_content .rests_img img {
  margin-bottom: 30px;
  width: 100px;
  height: 65px;
  float: left;
  margin-right: 10px;
  cursor: pointer;
}

.details .details_referral {
  width: 1000px;
  height: auto;
  margin: 0 auto;
  clear: both;
  border-top: 1px solid #fff;
}

.details .details_referral h5 {
  width: 100%;
  text-align: left;
  font-size: 19px;
  color: #fff;
  font-weight: normal;
  margin-top: 39px;
}

.details .details_referral p {
  width: 100%;
  height: auto;
  text-align: justify;
  display: inline-block;
  font-size: 15px;
  color: #ccc;
  margin-bottom: 79px;
  word-wrap: break-word;
  margin-top: 20px;
  line-height: 20px;
  text-indent: 2rem;
  letter-spacing: 1px;
}
</style>

