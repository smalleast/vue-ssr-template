module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "住逻辑-专业的软装家具定制服务提供商",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "住逻辑通过提供优质的软装设计，协同家居产品设计及家居产品生产链深度管理，为设计师、装饰设计公司、地产开发商、高端精品酒店等有软装需求的用户打造高效的软装服务平台。通过S2b（民主设计+住逻辑产业园 ）模式共同推进家居设计及制造业的转型升级"
      },
      {
        name: "keywords",
        content:
          "N住逻辑，海直格，美间，造作，软装，软装设计，软装供应链，软装服务商，软装产品，软装产品定制，软装产品提供者，软装解决方案，软装产品解决方案提供者，软装一站式服务，家具定制，家具定制工厂，家具定制供应商， 软装设计素材，软装方案，软装灵感源，软装场景，软装产品图片，软装产品素材，家具素材，软装搭配，软装搭配方案，室内设计场景图，空间灵感，pinteresr,花瓣,软装解决方案提供者"
      },
      {
        name: "p:domain_verify",
        content: "4dc993b1d91c35acccdfee6d8afb8918"
      },
      {
        name: "baidu-site-verification",
        content: "HnMBGOPQjl"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  css: ["swiper/dist/css/swiper.css"],
  plugins: [
    { src: "~/plugins/i18n", ssr: false },
    { src: "~/plugins/main" },
    { src: "~/plugins/swiper.js", ssr: false }
  ],
  vendor: ["axios", "vue-awesome-swiper"]
};
