<template>
  <div class="content_section" v-if="!showEn">
    <div class="section_title">
      <h3 class="title_h3">CONTACT</h3>
      <p class="title_p">咨询</p>
      <img src="~/assets/hello/icon.png" alt="img">
    </div>
    <div class="section_main">
      <p>专业的设计咨询、精准的报价系统、个性软装定制服务。</p>
      <p>致力打造住空间领域专业高效服务平台，协助您将好的设计落地。</p>
      <div class="main_btn">
        <router-link :to="{path:'/contact',query:{'lang':'zh'}}" class="btn">
          <span>联系合作</span>
          <img src="~/assets/hello/btn.png" alt="btn">
        </router-link>
      </div>
      <div class="location">
        <img src="~/assets/app/location.png" alt="" style="width:20px;margin-right:20px;">
        <span>上海市静安区灵石路695号珠江创意中心2号楼B105</span>
      </div>
    </div>
  </div>
  <div class="content_section" v-else>
    <div class="section_title">
      <h3 class="title_h3">CONTACT</h3>
      <p class="title_p">咨询</p>
      <img src="~/assets/hello/icon.png" alt="img">
    </div>
    <div class="section_main">
      <p>Professional design consultation、accurate quotation system、personalized soft decoration service. </p>
      <p>Dedicated to building a professional and efficient service platform in the area of living space, and we will assist you to achieve good design results.</p>
      <div class="main_btn">
        <router-link :to="{path:'/contact',query:{'lang':'en'}}" class="btn">
          <span>CONTACT FORM</span>
          <img src="~/assets/hello/btn.png" alt="btn">
        </router-link>
      </div>
      <div class="location">
        <img src="~/assets/app/location.png" alt="" style="width:20px;margin-right:20px;">
        <span>B105 Building No.2, Zhujiang Creativity Center,Lingshi Rd, Jingan District, Shanghai ,China (200072）</span>
      </div>
    </div>
  </div>
</template>
<script>
let browser = {
  versions: {
    mobile: false
  }
}
if (!process.server) {
  browser = {
    versions: function () {
      var u = navigator.userAgent;
      return {
        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) && u.indexOf('QIHU') && u.indexOf('Chrome') < 0, //是否为移动终端
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
}
export default {
  name: 'contact-footer',
  data () {
    return {
      showEn: this.$root.showEn,
      isMobile: browser.versions.mobile
    }
  }
}
</script>
<style scoped>
.content_section {
  padding-bottom: 40px;
  padding-top: 20px;
  background: #000;
  margin: 0 45px;
  margin-bottom: 90px;
}

.content_section .section_main {
  width: 100%;
  margin-top: 26px;
  margin-bottom: 0px;
}

.content_section .section_main p {
  width: 100%;
  height: 30px;
  margin-top: 10px;
}

.content_section .section_main .main_btn {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  justify-content: center;
}

.content_section .section_main .main_btn a {
  text-align: center;
  position: relative;
  display: inline-block;
  color: #2c3e50;
}

.content_section .section_main .main_btn a:active,
.content_section .section_main .main_btn a:link,
.content_section .section_main .main_btn a:visited,
.content_section .section_main .main_btn a:-webkit-any-link {
  color: #2c3e50 !important;
}

.content_section .section_main .main_btn a img {
  position: absolute;
  top: 14px;
  right: 20px;
  transition: right 0.6s;
}

.content_section .section_main .main_btn a:hover img {
  right: 15px;
}

.content_section .section_main .main_btn .btn1 {
  width: 280px;
  height: 50px;
  background: #fff;
  border-radius: 5px;
  line-height: 50px;
}

.content_section .section_main .main_btn .btn2 {
  height: 50px;
  width: 280px;
  background: #fff;
  border-radius: 5px;
  line-height: 50px;
  margin-left: 140px;
}

.content_section .section_main .main_btn .btn {
  height: 50px;
  width: 280px;
  background: #fff;
  border-radius: 5px;
  line-height: 50px;
}
</style>
