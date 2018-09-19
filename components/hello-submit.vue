<template>
  <div>
    <section class="hello-submit" v-if="!showEn">
      <div class="hello-title">
        专业的软装产品定制服务
      </div>
      <div class="hello-bd">
        <div class="bd-tips">
          基本信息
        </div>
        <div class="bd-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" class="bd-input" v-model="params.name" placeholder="姓名" :class="{errorActive:(!params.name&&first)}">
                </td>
                <td>
                  <input type="text" class="bd-input m40" v-model="params.phone" placeholder="联系电话" :class="{errorActive:(!validatePhone()&&first)}">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bd-tips">
          身份类型
        </div>
        <div class="bd-content">
          <select v-model="params.status" class="bd-select">
            <option value="专业设计师">专业设计师</option>
            <option value="地产商">地产商</option>
            <option value="酒店管理公司">酒店管理公司</option>
            <option value="各类家居厂商">各类家居厂商</option>
            <option value="媒体">媒体</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div class="bd-tips">
          定制需求
        </div>
        <div class="bd-content">
          <textarea v-model="params.content" placeholder="请输入您的定制意向与需求" class="bd-textarea" :class="{errorActive:(!params.content&&first)}"></textarea>
        </div>
        <button class="bd-button" :class="{'bd-button-success':!success}" @click="btnSuccess" :disabled="success">
          立即预约
        </button>
        <div class="bd-desc">
          注：住逻辑将在1-3个工作日内与您取得联系，请保持电话畅通
        </div>
      </div>
    </section>
    <section class="hello-submit en" v-if="showEn">
      <div class="hello-title en">
        <!--Fi 显示的时候会连在一块，所以这里加了个 span 标签-->
        Professional soft - f<span>itting product customization service</span>
      </div>
      <div class="hello-bd">
        <div class="bd-tips">
          Basic Information
        </div>
        <div class="bd-content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="text" class="bd-input" v-model="params.name" placeholder="Name" :class="{errorActive:(!params.name&&first)}">
                </td>
                <td>
                  <input type="text" class="bd-input m40" v-model="params.phone" placeholder="Phone Number" :class="{errorActive:(!validatePhone()&&first)}">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bd-tips">
          Identity Category
        </div>
        <div class="bd-content">
          <select v-model="params.status" class="bd-select">
            <option value="专业设计师">Professional Designer</option>
            <option value="地产商">Property Developers</option>
            <option value="酒店管理公司">Hotel Management Company</option>
            <option value="各类家居厂商">Furniture Manufactures</option>
            <option value="媒体">Media Company</option>
            <option value="其他">Others</option>
          </select>
        </div>
        <div class="bd-tips">
          Custom requirements
        </div>
        <div class="bd-content">
          <textarea v-model="params.content" placeholder="Please enter your customization requirements" class="bd-textarea" :class="{errorActive:(!params.content&&first)}"></textarea>
        </div>
        <button class="bd-button" :class="{'bd-button-success':!success}" @click="btnSuccess" :disabled="success">
          To make an appointment immediately
        </button>
        <div class="bd-desc">
          Note: zhulogic will contact you within 1-3 working days, please keep the phone open
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showEn: this.$root.showEn,
      params: {
        name: '',
        phone: '',
        status: '专业设计师',
        content: ''
      },
      first: false,
      success: false
    }
  },
  methods: {
    btnSuccess () {
      this.first = true;
      if (this.validate()) {
        this.$http.post('/website_api/web_cooperation', this.params)
          .then(res => {
            if (res.data.status_code == 200) {
              this.$Message.success('预约成功');
              this.success = true;
            }
          });
      }
    },
    validate () {
      if (!this.params.name || !this.validatePhone() || !this.params.content) {
        return false
      } else {
        return true
      }
    },
    validatePhone () {
      return (this.params.phone && (/^1[34578]\d{9}$/.test(this.params.phone)))
    }
  }
}
</script>

<style scoped>
.hello-submit {
  position: absolute;
  top: 87px;
  right: 127px;
  width: 527px;
  height: 750px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
  text-align: left;
}
.hello-submit.en {
  height: 800px;
}
.hello-title {
  font-size: 30px;
  color: #f5a623;
  position: relative;
  left: 45px;
  top: 45px;
  display: inline-block;
}

.hello-bd {
  position: relative;
  left: 45px;
  top: 60px;
  display: inline-block;
}

.bd-tips {
  font-size: 18px;
  color: #fff;
  margin-top: 30px;
  margin-bottom: 10px;
}

.bd-input {
  width: 200px;
  height: 50px;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  text-indent: 20px;
}

.bd-select {
  width: 440px;
  height: 50px;
  font-size: 14px;
  letter-spacing: 2px;
  color: #fff;
  cursor: pointer;
  text-indent: 10px;
}

select {
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
  background: url("../assets/app/caret.png") no-repeat right center
    rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3) \9 \0;
  padding-right: 0 \9 \0;
}

option {
  color: black;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.bd-textarea {
  width: 440px;
  height: 160px;
  font-size: 14px;
  color: #fff;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.3);
  padding: 10px;
}

.bd-button {
  width: 440px;
  height: 50px;
  background: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  color: #000;
  margin-top: 40px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.8;
}

.bd-button:disabled[disabled] {
  background: #efefef;
  color: #bfbfbf;
  opacity: 0.45;
}

.bd-button-success:hover {
  opacity: 1;
}

.bd-desc {
  font-size: 14px;
  color: #f5a623;
  margin-top: 20px;
  letter-spacing: 2px;
  opacity: 0.8;
}

.m40 {
  margin-left: 36px;
}

input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(255, 255, 255, 0.6);
}

input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(255, 255, 255, 0.6);
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.6);
}

textarea::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

textarea::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(255, 255, 255, 0.6);
}

textarea:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(255, 255, 255, 0.6);
}

textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.6);
}

.errorActive {
  border: 1px solid red;
}

@media screen and (max-width: 1600px) {
  .hello-submit {
    top: 84px;
    right: 64px;
    width: 427px;
    height: 550px;
  }

  .hello-title {
    font-size: 20px;
    left: 25px;
    top: 25px;
  }

  .hello-bd {
    left: 25px;
    top: 10px;
  }
  .bd-input {
    width: 166px;
    height: 30px;
  }
  .bd-tips {
    margin-top: 30px;
  }
  .bd-select {
    width: 372px;
    height: 36px;
  }
  .bd-textarea {
    width: 372px;
    height: 80px;
  }
  .bd-button {
    width: 372px;
    height: 44px;
    margin-top: 25px;
  }
  .bd-desc {
    font-size: 12px;
    margin-top: 15px;
  }
}
</style>
