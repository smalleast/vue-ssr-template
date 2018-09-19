import Vue from "vue";
import axios from "axios";
import IView from "iview";
import "iview/dist/styles/iview.css";
import VeeValidate from "vee-validate";

Vue.use(IView);
Vue.use(VeeValidate);

axios.defaults.baseURL = "http://webapi.zhulogic.com";

Vue.prototype.$http = axios;
