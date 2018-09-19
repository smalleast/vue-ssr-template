<template>
  <div>
    <div class="hello" v-if="!showEn">
      <div class='hello_banner'>
        <app-banner :listImg="listImg"></app-banner>
      </div>
      <div class='hello_introduce  content_section'>
        <div class="section_title">
          <h3 class="title_h3">WELCOME TO ZHULOGIC</h3>
          <p class="title_p">致力于打造优秀的定制化软装解决方案提供商</p>
          <img src="../assets/hello/icon.png" alt="img">
        </div>

        <div class="section_main">
          <p>通过专业的信息系统搭建和算法研究，为设计师提供一个优质丰富的设计素材库与执行工具,以使软装设计工序变得更加高效快捷</p>
          <p>同时通过自建独有的家居工业4.0系统深度管控生产链，从原材料采购、材料质检、生产流程管理以及交付安装管理，全流程信息化协作</p>
          <p>用科技手段打造一个智能的联合工厂，在输出优质软装设计和软装产品打造美好空间的同时</p>
          <p> 有志于推动家居设计与制造业的转型升级</p>
        </div>
        <div class="ever_btn">
          <router-link :to="{path:'/about',query:{'lang':'zh'}}">关于住逻辑</router-link>
        </div>
      </div>

      <div class="hello_service content_section margin-content">
        <div class="section_title">
          <h3 class="title_h3">SERVICE</h3>
          <p class="title_p">服务</p>
          <img src="../assets/hello/icon.png" alt="img">
        </div>
        <div class="section_main">
          <p> 住逻辑是一站式软装解决方案供应商，为设计工作者赋能，为家居制造业转型升级提供创新机制。</p>
        </div>
      </div>

      <div class="hello_content margin-content">
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_01.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>MATERIAL</h3>
            <P>海量素材</P>
            <hr class='h1'>
            <span>大量优质的素材库，极速智能获取报价，清晰可见的价格预算，只为让设计变得更加完美与高效。</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_02.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>MANUFACTURE</h3>
            <P>智能生产</P>
            <hr class='h2'>
            <span>云网系统通过线上流程管理和大数据算法分析，让生产品质严格管控，让生产成本更加精细，精美的家居产品创造来源于工匠精神与智能创新。</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_03.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>TRANSPORTATION</h3>
            <P>安心交付</P>
            <hr class='h3'>
            <span>自建物流与安装团队，8小时交钥匙法则，全品类全天侯，交付无忧。</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_04.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>AFTER-SALES</h3>
            <P>贴心售后</P>
            <hr class='h4'>
            <span>严格执行国家三包服务政策，用品质保驾护航，用态度践行服务，用真心赢得赞赏。</span>
          </div>
        </div>
      </div>

      <div class="div_two_content margin-content">
        <div class="content_section content_projects">
          <div class="section_title">
            <h3 class="title_h3">PROJECTS</h3>
            <p class="title_p">项目</p>
            <img src="../assets/hello/icon.png" alt="img">
          </div>
          <div class="section_main">
            <p>住逻辑联合国内外优秀设计师，完成众多优秀项目落地</p>
          </div>
        </div>
      </div>

      <div class="div_three_content margin-content">
        <case-list-card :data="caseList" v-if="caseList.length"></case-list-card>
        <div class="ever_btn">
          <router-link :to="{path:'/case',query:{'lang':'zh'}}">PROJECTS</router-link>
        </div>
      </div>
      <contact-footer></contact-footer>
    </div>
    <div class="hello" v-else>
      <div class='hello_banner'>
        <app-banner :listImg="listImg"></app-banner>
      </div>
      <div class='hello_introduce  content_section'>
        <div class="section_title">
          <h3 class="title_h3">WELCOME TO ZHULOGIC</h3>
          <p class="title_p">Dedicated to creating unique soft decoration solutions supplier @Zhulogic</p>
          <img src="../assets/hello/icon.png" alt="img">
        </div>

        <div class="section_main">
          <p>Through the professional information system structures and the algorithm research,</p>
          <p> we provides designers with a rich library of design materials and implements tools to make the process of
            soft decoration design more efficient.</p>
          <p>At the same time, with our unique home industry 4.0 system, informatization cooperation is throughout the
            production chain that from raw material procurement,</p>
          <p> material quality inspection, and production process management to delivery installation management.</p>
          <p>To create a smart joint factory with technology, which aims to give impetus to industrial transformation
            and upgrading of interior design industry and manufacture industry,</p>
          <p>while providing high-quality soft decoration service and decoration products. </p>
        </div>
        <div class="ever_btn">
          <router-link :to="{path:'/about',query:{'lang':'en'}}">About Zhulogic</router-link>
        </div>
      </div>

      <div class="hello_service content_section margin-content">
        <div class="section_title">
          <h3 class="title_h3">SERVICE</h3>
          <p class="title_p">服务</p>
          <img src="../assets/hello/icon.png" alt="img">
        </div>
        <div class="section_main">
          <p>Zhulogic is the one-stop soft solution supplier,</p>
          <p> which can provide the design workers with the innovation mechanism for the transformation and upgrading of
            the household manufacturing industry.</p>
        </div>
      </div>

      <div class="hello_content margin-content">
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_01.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>MATERIAL</h3>
            <P>海量素材</P>
            <hr class='h1'>
            <span>We have a large number of high-quality material resource, unique aesthetic orientation, clear and transparent budget of price, that is to make the design more perfect and efficient.</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_02.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>MANUFACTURE</h3>
            <P>智能生产</P>
            <hr class='h2'>
            <span>Through the analysis of online process management and big data algorithm, the cloud network system makes the production quality control is strict and the production cost is more precise.
          The creation of exquisite household products comes from the spirit of craftsman and intelligent innovation.</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_03.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>TRANSPORTATION</h3>
            <P>安心交付</P>
            <hr class='h3'>
            <span>Self-built logistics and installation team, Rule of 8 hours to submit key, whole category and full - day delivery.</span>
          </div>
        </div>
        <div class="content_message">
          <div class="message_img">
            <img src="../assets/hello/message_img_04.png" alt="img">
          </div>
          <div class="message_cont">
            <h3>AFTER-SALES</h3>
            <P>贴心售后</P>
            <hr class='h4'>
            <span>We strictly enforce the national three package service policy: Escort with quality, Use your attitude to practice your service, Win praise with your heart.</span>
          </div>
        </div>
      </div>

      <div class="div_two_content margin-content">
        <div class="content_section content_projects">
          <div class="section_title">
            <h3 class="title_h3">PROJECTS</h3>
            <p class="title_p">项目</p>
            <img src="../assets/hello/icon.png" alt="img">
          </div>
          <div class="section_main">
            <p>Zhulogic has combined excellent designers at home and abroad, and have completed many excellent design
              projects together.</p>
          </div>
        </div>
      </div>

      <div class="div_three_content margin-content">
        <case-list-card :data="caseList" v-if="caseList.length"></case-list-card>
        <div class="ever_btn">
          <router-link :to="{path:'/case',query:{'lang':'en'}}">PROJECTS</router-link>
        </div>
      </div>
      <contact-footer></contact-footer>
    </div>
    <HelloSubmit></HelloSubmit>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  import banner1 from '../assets/hello/banner_001.jpg'
  import banner1_en from '../assets/hello/banner_001_en.jpg'
  import ContactFooter from './ContactFooter.vue'
  import CaseListCard from './CaseListCard.vue'
  import HelloSubmit from './hello-submit.vue'

  export default {
    name: 'hello',
    data() {
      return {
        showEn: this.$root.showEn,
        listImg: [{
          url: this.$root.showEn ? banner1_en : banner1
        }],
        caseList: []
      }
    },
    components: {
      'app-banner': Banner,
      'contact-footer': ContactFooter,
      'case-list-card': CaseListCard,
      HelloSubmit
    },
    methods: {
      initCaseList() {
        this.$http.get('/website_api/web_projects?pageNum=1&pageSize=6')
          .then(res => {
            if (res.data.status = 200) {
              console.log(res);
              this.caseList = res.data.data.list;
            }
            document.body.scrollTop = this.$route.query.scrollTop || 0;
          });
      }
    },
    created() {
      this.initCaseList();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #id {
    width: 100%;
    height: 100%;
  }

  .margin-content {
    margin: 0 45px;
  }

  .hello_banner {
    width: 100%;
    height: 47.4vw;
  }

  .hello_introduce {
    width: 100%;
    height: 520px;
    background: #1a191c;
    text-align: center;
  }

  .hello_introduce .about_title img {
    margin-top: 26px;
    margin-bottom: 26px;
  }

  .hello_introduce .about_btn {
    width: 100%;
    height: 60px;
    margin-top: 50px;

  }

  .hello_introduce .about_btn a {
    padding: 20px 60px;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
  }

  .hello_service {
    height: 330px;
    background: url("../assets/hello/hone-bg.png") no-repeat;
    text-align: center;
  }

  .hello_content {
    background: #fff;
    padding-bottom: 80px;
  }

  .hello_content .content_message {
    text-align: center;
    width: 25%;
    display: inline-block;
    margin-left: -4px;
    vertical-align: top;
  }

  .hello_content .content_message .message_img {
    width: 100%;
    height: auto;
    margin-top: 100px;
    text-align: center;
  }

  .hello_content .content_message .message_img .img {
    width: 150px;
    height: 150px;
  }

  .hello_content .content_message .message_cont {
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-top: 30px;
  }

  .hello_content .content_message .message_cont h3 {
    font-size: 18px;
    font-weight: normal;
  }

  .hello_content .content_message .message_cont p {
    width: 100%;
    height: 20px;
    line-height: 100%;
    font-size: 18px;
    font-weight: normal;
    margin-top: 15px;
    margin-bottom: 25px;
    color: #333;
  }

  .hello_content .content_message .message_cont .h1 {
    width: 35px;
    border-top: 2px solid #ad4a4a;
    margin: 0 auto;
    margin-bottom: 26px;
  }

  .hello_content .content_message .message_cont .h2 {
    width: 35px;
    border-top: 2px solid #79c471;
    margin: 0 auto;
    margin-bottom: 26px;
  }

  .hello_content .content_message .message_cont .h3 {
    width: 35px;
    border-top: 2px solid #5e8ac6;
    margin: 0 auto;
    margin-bottom: 26px;
    color: #333;
  }

  .hello_content .content_message .message_cont .h4 {
    width: 35px;
    border-top: 2px solid #ef9c00;
    margin: 0 auto;
    margin-bottom: 26px;
  }

  .hello_content .content_message .message_cont span {
    font-size: 16px;
    color: #666;
    line-height: 30px;
  }

  .div_two_content .content_projects {
    height: 330px;
    background: url("../assets/hello/projects.png") no-repeat;
    text-align: center;
  }

  .div_two_content .content_projects .projects_title {
    width: 100%;
    height: auto;
  }

  .div_two_content .content_projects .projects_title .title_h3 {
    font-size: 45px;
    color: #fff;
    padding-top: 45px;
    font-weight: normal;
  }

  .div_two_content .content_projects .projects_title .title_p {
    font-size: 21px;
    color: #fff;
    margin-top: 23px;
    margin-bottom: 25px;
  }

  .div_two_content .content_projects .projects_main {
    width: 100%;
    height: auto;
    margin-top: 26px;
    margin-bottom: 30px;
  }

  .div_two_content .content_projects .projects_main p {
    width: 100%;
    height: 30px;
    color: #fff;
  }

  .div_three_content {
    text-align: center;
    background: #222222;
    position: relative;
    overflow: hidden;
  }

  .div_three_content .ever_btn {
    width: 220px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 5px;
    margin: 120px auto;
  }

  .div_three_content .ever_btn a {
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
  }

  .content_brand .brand_title img {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .content_brand {
    width: 95%;
    height: 1050px;
    margin-left: 2.5%;
    background: #1a191c;
    text-align: center;
    position: relative;
  }

  .content_brand .brand_title {
    width: 100%;
    height: auto;
  }

  .content_brand .brand_title .title_h3 {
    font-size: 45px;
    color: #fff;
    padding-top: 75px;
  }

  .content_brand .brand_title .title_p {
    font-size: 21px;
    color: #fff;
    margin-top: 23px;
    margin-bottom: 25px;
  }

  .content_brand .brand_content {
    width: 80%;
    height: auto;
    margin-left: 10%;
    margin-top: 100px;
    text-align: center;
  }

  .content_brand .brand_content .content_img {
    display: inline-block;
    width: 33%;
    padding: 5px;
    box-sizing: border-box;
  }

  .content_brand .brand_content .content_img img {
    width: 100%;
  }

  .content_brand .brand_content .content_img .img_title {
    text-align: left;
    color: #fff;
    margin-top: 30px;
  }

  .content_brand .ever_btn {
    width: 220px;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 5px;
    position: absolute;
    bottom: 100px;
    left: 805px;
  }

  .content_brand .ever_btn a {
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    color: #fff;
  }

  .hello_banner img {
    width: 100%;
    height: 100%;
  }
</style>
