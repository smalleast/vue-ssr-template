<template>
  <div>
    <header :class="{'scrolled':scrolled}">
      <div class="header">
        <div class="header_login">
          <img src="~/assets/app/logo.png">
        </div>
        <div class="header_main" v-if="!showEn">
          <div class="main-1 main_home_page">
            <router-link :to="{path:'/',query:{'lang':'zh'}}">
              <span>首页</span>
            </router-link>
          </div>
          <div class="main-1 main_case">
            <router-link :to="{path:'/case',query:{'lang':'zh'}}" exact>
              <span>项目</span>
            </router-link>
          </div>
          <div class="main-2 main_workbench main-bench">
            <a href="http://b.zhulogic.com" target="_blank">云设计平台</a>
            <img src="~/assets/hello/bubble.png" class="new-img">
          </div>
          <div class="main-1 main_workbench">
            <a href="http://gc.zhulogic.com/login" target="_blank">斑斓智造</a>
          </div>
          <div class="main-1 main_about">
            <router-link :to="{path:'/about',query:{'lang':'zh'}}">
              <span>关于住逻辑</span>
            </router-link>
          </div>
          <div class="main-1 main_contact">
            <router-link :to="{path:'/contact',query:{'lang':'zh'}}">
              <span>联系我们</span>
            </router-link>
          </div>
        </div>
        <div class="header_main" v-else>
          <div class="main-1 main_home_page">
            <router-link :to="{path:'/',query:{'lang':'en'}}">
              <span>Home</span>
            </router-link>
          </div>
          <div class="main-1 main_case">
            <router-link :to="{path:'/case',query:{'lang':'en'}}" exact>
              <span>Projects</span>
            </router-link>
          </div>
          <div class="main-2 main_workbench main-bench">
            <a href="http://b.zhulogic.com" target="_blank">Cloud Design</a>
            <img src="~/assets/hello/bubble.png" class="new-img1">
          </div>
          <div class="main-1 main_workbench">
            <a href="http://gc.zhulogic.com/login" target="_blank">Factory</a>
          </div>
          <div class="main-1 main_about">
            <router-link :to="{path:'/about',query:{'lang':'en'}}">
              <span>About</span>
            </router-link>
          </div>
          <div class="main-1 main_contact">
            <router-link :to="{path:'/contact',query:{'lang':'en'}}">
              <span>Contact</span>
            </router-link>
          </div>
        </div>
        <div class="header_language">
          <button @click="toggleEn('zh')" :disabled="!showEn">中文</button>
          <button @click="toggleEn('en')" :disabled="showEn">ENGLISH</button>
        </div>
      </div>
    </header>
    <nuxt/>
    <!--回到顶部-->

    <div v-if="!showEn">
      <div class="back-top-phone" @click="phoneShow = !phoneShow; hideUdesk()" @mouseover="handleOver" :class="{'back-top-phone-hover':showPhone}" @mouseout="handleOut">
        <img src="~/assets/index/phone.png" v-if="!showPhone">
        <img src="~/assets/index/phone1.png" v-if="showPhone">
        <p>电话客服</p>
        <div class="showPhone" v-if="phoneShow">
          <div class="title">
            <span class="phone-icon"><img src="~/assets/index/phone1.png" alt=""></span>
            联系住逻辑客服
            <span class="close-icon">-</span>
          </div>
          <div class="main">
            <p>联系电话：400-998-0137</p>
            <p>服务时间：09:00-18:00</p>
          </div>
        </div>
      </div>
      <div class="back-top-server" id="zaixiankefu" @click="phoneShow = false" @mouseover="handleOver1" :class="{'back-top-phone-hover':showServer}" @mouseout="handleOut1">
        <img src="~/assets/index/server.png" v-if="!showServer">
        <img src="~/assets/index/server1.png" v-if="showServer">
        <p>在线客服</p>
      </div>
      <div class="back-top" @click="backToTop()" v-if="showBackTop" @mouseover="handleOver2" :class="{'back-top-phone-hover':showTop}" @mouseout="handleOut2">
        <img src="~/assets/index/backTop.png" v-if="!showTop">
        <img src="~/assets/index/backTop1.png" v-if="showTop">
        <p>返回顶部</p>
      </div>
    </div>

    <div v-if="showEn">
      <div class="back-top-phone" @click="phoneShow = !phoneShow; hideUdesk()" @mouseover="handleOver" :class="{'back-top-phone-hover':showPhone}" @mouseout="handleOut">
        <img src="~/assets/index/phone.png" v-if="!showPhone">
        <img src="~/assets/index/phone1.png" v-if="showPhone">
        <p>Telephone Service</p>
        <div class="showPhone" v-if="phoneShow">
          <div class="title">
            <span class="phone-icon"><img src="~/assets/index/phone1.png" alt=""></span>
            Connect with zhulogic customer service
            <span class="close-icon">-</span>
          </div>
          <div class="main">
            <p>Telephone：400-998-0137</p>
            <p>Service time：09:00-18:00</p>
          </div>
        </div>
      </div>
      <div class="back-top-server" id="zaixiankefu" @click="phoneShow = false" @mouseover="handleOver1" :class="{'back-top-phone-hover':showServer}" @mouseout="handleOut1">
        <img src="~/assets/index/server.png" v-if="!showServer">
        <img src="~/assets/index/server1.png" v-if="showServer">
        <p>Online Service</p>
      </div>
      <div class="back-top" @click="backToTop()" v-if="showBackTop" @mouseover="handleOver2" :class="{'back-top-phone-hover':showTop}" @mouseout="handleOut2">
        <img src="~/assets/index/backTop.png" v-if="!showTop">
        <img src="~/assets/index/backTop1.png" v-if="showTop">
        <p>Top</p>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="footer">
      <div class="footer-one">
        <article>
          <ul>
            <li>
              <a class="zlj-item" href="javascript:void(0)">
                <div class="zlj-layer">
                  <img src="~/assets/app/bar_code_weixin.png">
                </div>
                <div class="zlj-btn">
                  <img src="~/assets/app/wx.png">
                </div>
              </a>
            </li>
            <li>
              <a href="http://weibo.com/zhulogic?is_hot=1" class="zlj-item" target="_blank">
                <img src="~/assets/app/wb.png">
              </a>
            </li>
            <li>
              <a class="zlj-item" href="javascript:void(0)">
                <div class="zlj-layer">
                  <img src="~/assets/app/bar_code_app.png">
                </div>
                <div class="zlj-btn">
                  <img src="~/assets/app/photo.png">
                </div>
              </a>
            </li>
          </ul>
        </article>
      </div>
      <div class="div_two" v-if="!showEn">
        <div class="two_main">
          <router-link :to="{path:'/',query:{'lang':'zh'}}">首页</router-link>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/case',query:{'lang':'zh'}}" exact>项目</router-link>
        </div>
        <div class="two_main">
          <a href="http://b.zhulogic.com" target="_blank">云设计平台</a>
        </div>
        <div class="two_main">
          <a href="http://gc.zhulogic.com/login" target="_blank">斑斓智造</a>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/about',query:{'lang':'zh'}}">关于住逻辑</router-link>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/contact',query:{'lang':'zh'}}">联系我们</router-link>
        </div>

      </div>
      <div class="div_two" v-else>
        <div class="two_main">
          <router-link :to="{path:'/',query:{'lang':'en'}}">Home</router-link>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/case',query:{'lang':'en'}}" exact>Projects</router-link>
        </div>
        <div class="two_main">
          <a href="http://b.zhulogic.com" target="_blank">Cloud Design</a>
        </div>
        <div class="two_main">
          <a href="http://gc.zhulogic.com/login" target="_blank">Factory</a>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/about',query:{'lang':'en'}}">About</router-link>
        </div>
        <div class="two_main">
          <router-link :to="{path:'/contact',query:{'lang':'en'}}">Contact</router-link>
        </div>

      </div>
      <!--<div style="margin:0 1%">-->
      <!--<span>|</span>-->
      <!--</div>-->
      <!--<div class="div_three">-->
      <!--<router-link to="/protocal" style="color: #666 !important;" target="_blank" class="a1">住逻辑用户协议 </router-link>-->
      <!--<span style="color: #666 !important;padding:0 5px;"> & </span>-->
      <!--<router-link to="/afterSale" style="color: #666 !important" target="_blank">物流与售后说明</router-link>-->
      <!--</div>-->
      <div class="footer-two" v-if="!hiddenCopyRight">
        <p>斑斓信息科技（上海）有限公司</p>
        <p>Copyright © 2018 Zhulogic.com Inc.All Rights Reserved.</p>
      </div>
      <div style="visibility: hidden">
        <script src="https://s11.cnzz.com/z_stat.php?id=1259903790&web_id=1259903790" language="JavaScript"></script>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'app',
  data () {
    let hiddenCopyRight = false
    let clientHeight = 1000
    if (!process.server) {
      hiddenCopyRight = window.innerWidth < 1200
      clientHeight = document.documentElement.clientHeight
    }
    return {
      scroll: 0,
      showEn: this.$root.showEn,
      timer: () => {
      },
      hiddenCopyRight,
      scrolled: false,
      showBackTop: false,
      isTop: true,
      clientHeight,
      phoneShow: false,
      showPhone: false,
      showServer: false,
      showTop: false,
    }
  },
  methods: {
    handleOver () {
      this.showPhone = true;
    },
    handleOut () {
      this.showPhone = false;
    },
    handleOver1 () {
      this.showServer = true;
    },
    handleOut1 () {
      this.showServer = false;
    },
    handleOver2 () {
      this.showTop = true;
    },
    handleOut2 () {
      this.showTop = false;
    },
    onscroll () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scroll > 1) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      if (this.scroll > this.clientHeight) {
        this.showBackTop = true;
      } else {
        this.showBackTop = false;
      }
      if (this.scroll == 0) {
        clearInterval(this.timer);
      }
      ;
    },
    backToTop () {
      this.timer = setInterval(function () {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        //获取滚动条距离顶部高度
        var ispeed = Math.floor(-this.scroll / 5);
        document.documentElement.scrollTop = document.body.scrollTop = this.scroll + ispeed;
        //到达顶部，清除定时器
        if (this.scroll == 0) {
          clearInterval(this.timer);
        }
        ;
      }, 30);
    },
    toggleEn (language) {
      window.location.href = `${location.href.split('?')[0]}?lang=${language}`;
    },

    udeskHandle () {
      this.$nextTick(() => {
        (function (a, h, c, b, f, g) {
          a["UdeskApiObject"] = f;
          a[f] = a[f] || function () {
            (a[f].d = a[f].d || []).push(arguments)
          };
          g = h.createElement(c);
          g.async = 1;
          g.charset = "utf-8";
          g.src = b;
          c = h.getElementsByTagName(c)[0];
          c.parentNode.insertBefore(g, c)
        }
        )(window, document, "script", "http://assets-cli.udesk.cn/im_client/js/udeskApi.js", "ud");

        ud({
          "code": "260bd3ji",
          "link": "http://zhulogic.udesk.cn/im_client/?web_plugin_id=42958",
          "mode": "inner",
          "color": "#B5B5B5 ", //#308697
          "targetSelector": "#zaixiankefu",
          "noBubble": false,
        })
      })
    },
    hideUdesk () {
      let udeskPanel = document.getElementById('udesk_panel')
      udeskPanel.style.display = 'none'
    }
  },
  mounted () {
    if (!process.server) {
      this.udeskHandle()
      window.addEventListener('scroll', this.onscroll)
    }
  }
}
</script>

<style>
#udesk_panel {
  right: 80px !important;
}
* {
  margin: 0;
  padding: 0;
  border: 0px;
  list-style: none;
  outline: none;
  font-family: "微软雅黑";
}
textarea {
  overflow: auto;
}
a {
  text-decoration: none;
  color: #fff;
}
a:active,
a:link,
a:visited,
a:-webkit-any-link {
  color: inherit;
  outline: none;
}
img {
  border: 0 none; /*去除ie浏览器下a标签的border*/
}
body,
html {
  width: 100%;
  height: 100%;
  background: #1a191c;
}
#app {
  min-width: 1200px;
}
.content_section {
  height: auto;
  text-align: center;
}
.content_section .section_title {
  width: 100%;
  height: auto;
}
.content_section .section_main {
  width: 100%;
  height: auto;
  margin-top: 26px;
  margin-bottom: 30px;
}
.content_section .section_main p {
  width: 100%;
  line-height: 30px;
  color: #ccc;
  font-size: 16px;
}
.content_section .section_title .title_h3 {
  font-size: 34px;
  color: #fff;
  padding-top: 45px;
  font-weight: normal;
}
.content_section .section_title .title_p {
  font-size: 14px;
  color: #fff;
  margin-top: 23px;
  margin-bottom: 25px;
}
.ever_btn {
  width: 220px;
  height: 60px;
  border: 1px solid #fff;
  background-color: transparent;
  border-radius: 4px;
  color: #fff;
  line-height: 60px;
  margin: 0 auto;
}
.ever_btn a {
  display: block;
}
.location {
  color: #ccc;
  overflow: hidden;
  margin-top: 50px;
  text-align: center;
}
.location * {
  display: inline-block;
  vertical-align: middle;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes jump {
  to {
    bottom: 100px;
  }
  20% {
    bottom: 120px;
  }
  50% {
    bottom: 100px;
  }
  from {
    bottom: 100px;
  }
}
#app .inner #header {
  background: red;
}
.back-top {
  position: fixed;
  margin-top: 10px;
  right: 20px;
  bottom: 100px;
  cursor: pointer;
  background: #ffffff;
  height: 70px;
  width: 60px;
  text-align: center;
  /*animation: jump 2s ease-in infinite;*/
}
.back-top > img {
  margin-top: 10px;
}
.back-top-phone {
  position: fixed;
  right: 20px;
  bottom: 239px;
  z-index: 1000000002;
  cursor: pointer;
  background: #ffffff;
  height: 70px;
  width: 60px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.back-top-phone .showPhone {
  position: fixed;
  right: 85px;
  bottom: 206px;
  z-index: 5000;
  width: 340px;
  height: 145px;
  background: #ffffff;
}
.back-top-phone .showPhone .title {
  height: 36px;
  font-size: 12px;
  color: #373737;
  background: #efefef;
  line-height: 36px;
  text-align: left;
  padding: 0 15px;
  position: relative;
}
.title .phone-icon {
  width: 20px;
  height: 20px;
  background: #f5a623;
  float: left;
  margin-top: 8px;
  margin-right: 10px;
  border-radius: 50%;
}
.title .close-icon {
  width: 15px;
  height: 15px;
  background: #b5b5b5;
  position: absolute;
  right: 19px;
  top: 10px;
  border-radius: 50%;
  line-height: 13px;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.phone-icon img {
  width: 12px;
  height: 16px;
  position: absolute;
  left: 19px;
  top: 10px;
}
.back-top-phone .showPhone .main {
  padding-left: 62px;
  padding-top: 22px;
}
.back-top-phone .showPhone .main p {
  text-align: left;
  font-size: 18px;
  color: #373737;
}
.back-top-phone .showPhone .main p.first {
  margin-top: 25px;
}
.back-top-phone > img {
  margin-top: 10px;
}
.back-top-server {
  position: fixed;
  right: 20px;
  bottom: 169px;
  z-index: 2000;
  cursor: pointer;
  background: #ffffff;
  height: 70px;
  width: 60px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.back-top-phone-hover {
  background: #f5a623;
  color: #fff;
}
.back-top-server > img {
  margin-top: 10px;
}

.main_workbench {
  position: relative;
}

.main_workbench .new-img {
  position: absolute;
  right: 16px;
  top: 4px;
}
.main_workbench .new-img1 {
  position: absolute;
  right: 10px;
  top: 4px;
}
.main-bench {
  min-width: 160px;
  max-width: 160px;
}
.main-gc {
}
header {
  padding: 0 30px;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  min-width: 600px;
}

.header {
  width: 100%;
  position: relative;
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);
}

header.scrolled {
  background-color: #111;
}

header.scrolled .header {
  border-bottom: none;
}

.header.scrolled div a.active {
  box-sizing: border-box;
}

.header .header_login {
  width: 70px;
  float: left;
  margin-left: 56px;
  margin-top: 10px;
}

.header .header_login img {
  display: inline-block;
  margin-top: -20px;
}

.header .header_language {
  position: absolute;
  top: 0;
  right: 10px;
}

.header .header_language button:first-child:after {
  content: "";
  display: block;
  height: 10px;
  width: 1px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 25px;
}

.header .header_language button {
  background-color: transparent;
  font-size: 14px;
  display: block;
  padding: 0 12px;
  height: 60px;
  line-height: 60px;
  float: left;
  color: #999;
  position: relative;
  cursor: pointer;
}

.header .header_language button:disabled {
  color: #fff;
  cursor: not-allowed;
}

.header .header_main {
  width: 50%;
  min-width: 670px;
  height: 60px;
  margin: 0 auto;
  margin-left: 32%;
}

.header .header_main .main-1 {
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  width: 14%;
  float: left;
}

.header .header_main .main-2 {
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  width: 19%;
  float: left;
}

.header .header_main .main-2 {
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  width: 19%;
  float: left;
}

.header .header_main div a {
  text-decoration: none;
  height: 100%;
  display: inline-block;
  box-sizing: border-box;
}

.header .header_main div a.active,
.header .header_main div a.nuxt-link-exact-active {
  border-bottom: 1px solid #fff;
}

.header .header_main div a,
.header .header_main div span {
  color: #fff;
  font-size: 15px;
}

/*页脚*/
.footer {
  height: 75px;
  width: 100%;
  background: #fff;
  text-align: center;
  position: relative;
}

.footer > div {
  display: inline-block;
  vertical-align: middle;
}

.footer .footer-one {
  width: 15%;
  position: absolute;
  left: 20px;
  height: 75px;
}

.footer .div_two {
  font-size: 13px;
  width: 33%;
  min-width: 670px;
  margin: 0 auto;
}

.footer .div_two .two_main {
  height: 75px;
  line-height: 75px;
  width: 16%;
  float: left;
  text-align: center;
}

.footer .div_three {
  height: 75px;
  font-size: 12px;
  color: #000;
  line-height: 75px;
}

.footer .div_three a {
}

.footer .div_three a:hover {
  color: #d2d0d0 !important;
}

.footer .footer-two {
  position: absolute;
  color: #666;
  font-size: 12px;
  right: 30px;
  padding-top: 20px;
}

.footer .footer-two p {
  text-align: right;
}

.footer .footer-one ul {
  list-style: none;
}

.footer .footer-one ul li {
  width: 30%;
  height: 75px;
  display: inline-block;
}

.footer .footer-one li .zlj-item {
  display: block;
  position: relative;
  height: 75px;
  line-height: 75px;
}

.footer .footer-one li .zlj-item * {
  vertical-align: middle;
}

.zlj-item:hover .zlj-layer {
  opacity: 1;
}

.zlj-layer {
  opacity: 0;
  width: 140px;
  height: 140px;
  position: absolute;
  transition: all 0.3s;
  z-index: 9999;
  top: -120px;
  left: -10px;
}

.zlj-layer img {
  max-width: 100%;
}

.footer a {
  text-decoration: none;
  color: #000;
}
</style>
