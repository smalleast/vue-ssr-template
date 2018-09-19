<template>
  <div id="case">
    <div class="case_service">
      <div class="service_title">
        <h3 class="title_h3">BRAND IMAGE</h3>
        <p class="title_p">品牌形象</p>
        <img src="../assets/case/icon.png" alt="img">
      </div>
      <div class="service_main">
        <p>大概说一下我们公司是干嘛的，能提供怎样的服务，大概来个60个字，软装设计协作服务，上传清单给报价服务</p>
        <p>独立提供交付安装服务？这可以是我们的服务流程，也可以是服务内容的一部分？</p>
      </div>
    </div>

    <div class="content_brand">
      <div class="brand_title">
        <h3 class="title_h3">BRAND  IMAGE</h3>
        <p class="title_p">品牌形象</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="brand_content">
        <div class="content_img">
          <img src="../assets/hello/brand.png" alt="img">
          <p class="img_title">设计师专访 | 新锐设计师潘赞</p>
        </div>
        <div class="content_img">
          <img src="../assets/hello/brand.png" alt="img">
          <p class="img_title">设计师专访 | 新锐设计师潘赞</p>
        </div>
        <div class="content_img">
          <img src="../assets/hello/brand.png" alt="img">
          <p class="img_title">设计师专访 | 新锐设计师潘赞</p>
        </div>

      </div>
    </div>

    <div class="content_contact">
      <div class="contact_title">
        <h3 class="title_h3">CONTACT</h3>
        <p class="title_p">咨询</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="contact_main">
        <p>大概说一下我们公司是干嘛的，能提供怎样的服务，大概来个60个字，软装设计协作服务，上传清单给报价服务</p>
        <p>独立提供交付安装服务？这可以是我们的服务流程，也可以是服务内容的一部分？</p>
        <div class="main_btn">
          <div class="btn1">
            <span>400-998-0137</span>
            <a href="#"><img src="../assets/hello/btn.png" alt="btn"></a>
            <div class="btn2">
              <span>CONTACT FORM</span>
              <a href="#"><img src="../assets/hello/btn.png" alt="btn"></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'case',
    data(){
        return {
          showEn:this.$root.showEn,
        }
    }

  }
</script>
<style type="text/css" scoped>
  #case {
    width: 100%;
    height: 100%;
    margin-top: 60px;
  }

  .case_service {
    width: 95%;
    margin-left: 2.5%;
    height: 330px;
    background: url("../assets/case/top-bg.png") no-repeat;
    text-align: center;
  }

  .case_service .service_title {
    width: 100%;
    height: auto;
  }

  .case_service .service_title .title_h3 {
    font-size: 45px;
    color: #fff;
    padding-top: 45px;
  }

  .case_service .service_title .title_p {
    font-size: 21px;
    color: #fff;
    margin-top: 23px;
    margin-bottom: 25px;
  }

  .case_service .service_main {
    width: 100%;
    height: auto;
    margin-top: 26px;
    margin-bottom: 30px;
  }

  .case_service .service_main p {
    width: 100%;
    height: 30px;
    color: #fff;
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
  }

  .content_brand .brand_content .content_img .img_title {
    width: 60%;
    float: left;
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

  .content_contact {
    width: 95%;
    margin-left: 2.5%;
    height: 380px;
    background: #000;
    text-align: center;
    margin-top: -20px;
  }

  .content_contact .contact_title {
    width: 100%;
    height: auto;
  }

  .content_contact .contact_title .title_h3 {
    font-size: 45px;
    color: #fff;
    padding-top: 45px;
  }

  .content_contact .contact_title .title_p {
    font-size: 21px;
    color: #fff;
    margin-top: 23px;
    margin-bottom: 25px;
  }

  .content_contact .contact_main {
    width: 100%;
    height: 40px;
    margin-top: 26px;
    margin-bottom: 30px;
  }

  .content_contact .contact_main p {
    width: 100%;
    height: 30px;
    color: #fff;
  }

  .content_contact .contact_main .main_btn {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-top: 20px
  }

  .content_contact .contact_main .main_btn .btn1 {
    width: 280px;
    height: 50px;
    background: #fff;
    border-radius: 5px;
    line-height: 50px;
    float: left;
    margin-left: 565px;
  }

  .content_contact .contact_main .main_btn .btn2 {
    height: 50px;
    width: 280px;
    background: #fff;
    border-radius: 5px;
    line-height: 50px;
    float: left;
    margin-left: 140px;
  }
</style>
