import Vue from "vue";

export default ({ route }) => {
  if (route.query.lang === 'en') {
    Vue.prototype.showEn = true
  }
}
