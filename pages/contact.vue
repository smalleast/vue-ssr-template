<template>
  <div id="contact" v-if="!showEn">
    <div class="content_section">
      <div class="section_title">
        <h3 class="title_h3">CONTACT</h3>
        <p class="title_p">联系合作</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="section_main">
        <p>一封邮件、一通电话或许就是一个奇妙旅程的开始。</p>
        <p style="font-size:22px;line-height:50px;">400-998-0137</p>
        <p>欢迎填写表格或者发送邮件至 zhulogic@163.com</p>
        <p>加入住逻辑，发送简历至 hr@zhulogic.com</p>
        <div class="location" style="margin:10px auto 20px">
          <img src="../assets/app/location.png" alt="" style="width:20px;margin-right:20px;">
          <span>上海市静安区灵石路695号珠江创意中心2号楼A座3楼</span>
        </div>
      </div>
    </div>
    <div class='contact_table'>
      <table class='table'>
        <tr>
          <td>
            <span class="required">姓名</span>
          </td>
          <td>
            <input type="text" v-model="user.name" v-validate="'required'" :class="{'is-danger': errors.has('userName') }" name="userName" placeholder="NAME">
            <span v-show="errors.has('userName')" class="help is-danger">姓名为必填项</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">联系电话</span>
          </td>
          <td>
            <input type="text" name="phoneNum" v-model="user.phone" v-validate="{required: true, regex:/^1[34578]\d{9}$/}" :class="{'is-danger': errors.has('phoneNum') }" placeholder="PHONE NUMBER">
            <span v-show="errors.has('phoneNum')" class="help is-danger">请输入一个有效的联系电话</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>邮箱</span>
          </td>
          <td>
            <input type="email" name="email" v-model="user.email" placeholder="E-MAIL" v-validate="'email'" :class="{'is-danger': errors.has('email') }">
            <span v-show="errors.has('email')" class="help is-danger">请输入一个有效的邮箱地址</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">身份类别</span>
          </td>
          <td class="select">
            <div>
              <select name="ID" id="ID" v-validate="'required'" v-model="user.status" :class="{'is-danger': errors.has('ID') }">
                <option value="专业设计">专业设计</option>
                <option value="地产商">地产商</option>
                <option value="酒店管理公司">酒店管理公司</option>
                <option value="各类家居厂商">各类家居厂商</option>
                <option value="媒体">媒体</option>
                <option value="其他">其他</option>
              </select>
            </div>
            <span v-show="errors.has('ID')" class="help is-danger">身份类别必选</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">合作内容</span>
          </td>
          <td>
            <textarea name="corp-content" v-model="user.content" cols="30" rows="10" v-validate="'required'" :class="{'is-danger': errors.has('corp-content') }">
            </textarea>
            <span v-show="errors.has('corp-content')" class="help is-danger">请输入合作内容</span>
          </td>
        </tr>
      </table>
      <div class="success-tip" v-if="send_success">
        谢谢您的关注，我们会尽快与您联系
      </div>
      <button class="ever_btn" @click="sendCorpContent()" :disabled="has_error || errors.items.length > 0||send_success">
        完成并发送
      </button>
    </div>
  </div>
  <div id="contact" v-else>
    <div class="content_section">
      <div class="section_title">
        <h3 class="title_h3">CONTACT</h3>
        <p class="title_p">联系合作</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="section_main">
        <p>an email may be the beginning of the wonderful journey</p>
        <p>Welcome to fill in the form or send email to service@zhulogic.com，you can also call the hotline 400-998-0137</p>
        <p>Join us，send resume to hr@zhulogic.com</p>
        <div class="location" style="margin:10px auto 20px">
          <img src="../assets/app/location.png" alt="" style="width:20px;margin-right:20px;">
          <span>B105 Building No.2, Zhujiang Creativity Center,Lingshi Rd, Jingan District, Shanghai ,China ( 200072）</span>
        </div>
      </div>
    </div>
    <div class='contact_table'>
      <table class='table'>
        <tr>
          <td>
            <span class="required">Name</span>
          </td>
          <td>
            <input type="text" v-model="user.name" v-validate="'required'" :class="{'is-danger': errors.has('userName') }" name="userName" placeholder="NAME">
            <span v-show="errors.has('userName')" class="help is-danger">Name is required</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">Contact Number</span>
          </td>
          <td>
            <input type="text" name="phoneNum" v-model="user.phone" v-validate="{required: true, regex:/^1[34578]\d{9}$/}" :class="{'is-danger': errors.has('phoneNum') }" placeholder="PHONE NUMBER">
            <span v-show="errors.has('phoneNum')" class="help is-danger">Invalid Contact Number</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>E-mail</span>
          </td>
          <td>
            <input type="email" name="email" v-model="user.email" placeholder="E-MAIL" v-validate="'email'" :class="{'is-danger': errors.has('email') }">
            <span v-show="errors.has('email')" class="help is-danger">invalid E-mail</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">Identity categories</span>
          </td>
          <td class="select">
            <div>
              <select name="ID" id="ID" v-validate="'required'" v-model="user.status" :class="{'is-danger': errors.has('ID') }">
                <option value="专业设计">Professional Design</option>
                <option value="地产商">Property Developers</option>
                <option value="酒店管理公司">Hotel Management Company</option>
                <option value="各类家居厂商">Furniture Manufactures</option>
                <option value="媒体">Media Company</option>
                <option value="其他">Others</option>
              </select>
            </div>
            <span v-show="errors.has('ID')" class="help is-danger">Identity categories is required</span>
          </td>
        </tr>
        <tr>
          <td>
            <span class="required">Cooperation Content</span>
          </td>
          <td>
            <textarea name="corp-content" v-model="user.content" cols="30" rows="10" v-validate="'required'" :class="{'is-danger': errors.has('corp-content') }">
            </textarea>
            <span v-show="errors.has('corp-content')" class="help is-danger">Cooperation Content is Required</span>
          </td>
        </tr>
      </table>
      <div class="success-tip" v-if="send_success">
        thank you for your attention ，we will contact you as soon as possible
      </div>
      <button class="ever_btn" @click="sendCorpContent()" :disabled="has_error || errors.items.length > 0||send_success">
        SEND
      </button>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'contact',
  data () {
    return {
      showEn: this.$root.showEn,
      user: {
        name: '',
        status: '专业设计',
        phone: '',
        content: '',
      },
      send_success: false
    }
  },
  computed: {
    has_error: function () {
      return !this.user.name || !this.user.status || !this.user.phone || !this.user.content;
    }
  },
  methods: {
    sendCorpContent () {
      this.$http.post('/website_api/web_cooperation', this.user)
        .then(res => {
          if (res.data.status_code == 200) {
            this.send_success = true;
          }
        });
    }
  }
}
</script>
<style type="text/css" scoped>
#contact {
  width: 100%;
  height: 100%;
  background: #151515;
}
#contact .content_section {
  height: auto;
}
.contact_table .table tr td input.is-danger,
.contact_table .table tr td textarea.is-danger,
.contact_table .table tr td select.is-danger {
  border: 1px solid #c22828;
  outline-color: #c22828;
}

span.is-danger {
  color: #c22828;
}

.content_section {
  padding-top: 90px;
  height: 330px;
  text-align: center;
}

.contact_table {
  width: 100%;
  text-align: center;
}

.contact_table .table {
  width: 970px;
  height: auto;
  margin: 0 auto;
}

.contact_table .table tr {
  width: 100%;
  height: 70px;
  color: #fff;
}

.contact_table .table tr td span.required:before {
  content: "*";
  margin-right: 15px;
}

.contact_table .table tr td:last-child {
  text-align: left;
}

.contact_table .table tr td select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -ms-appearance: none;
  border: 1px solid #333;
  color: #fefefe;
  height: 45px;
  width: 300px;
  padding: 0 10px;
  padding-right: 34px;
  outline: none;
  background: url("../assets/app/caret.png") no-repeat right center #151515;
  padding-right: 0 \9 \0;
}

.contact_table .table tr td select::-ms-expand {
  display: none;
}

.contact_table .table tr td select option {
  font-size: 16px;
  background-color: #151515;
}

.contact_table .table tr td input,
.contact_table .table tr td textarea {
  width: 800px;
  background: transparent;
  border: 1px solid #333;
  padding-left: 25px;
  color: #fff;
}

.contact_table .table tr td input {
  height: 45px;
}

.contact_table .table tr td textarea {
  padding-top: 1em;
}

.contact_table .table tr td:nth-child(1) {
  width: 200px;
  height: 70px;
  margin-right: 25px;
  float: left;
  line-height: 70px;
  text-align: right;
}

.contact_table .table tr td .title {
  float: left;
  display: inline-block;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #333;
  opacity: 1;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #333;
  opacity: 1;
}

input:-ms-input-placeholder {
  color: #333;
  opacity: 1;
}

input::-webkit-input-placeholder {
  color: #333;
  opacity: 1;
}

:focus {
  outline-color: #fff;
}

.ever_btn {
  width: 294px;
  margin: 70px auto 100px auto;
  color: #fff;
  display: block;
}

.ever_btn:disabled {
  color: #666;
  border-color: #666;
  cursor: not-allowed;
}

.success-tip {
  display: block;
  border: 3px solid #fff;
  color: #fff;
  padding: 15px 50px;
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
