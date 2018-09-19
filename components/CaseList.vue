<template>
  <div v-if="!showEn">
    <div class="content_section works">
      <div class="section_title">
        <h3 class="title_h3">PROJECTS</h3>
        <p class="title_p">项目</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="section_main">
        <p>住逻辑联合国内外优秀设计师，完成众多优秀项目落地</p>
      </div>
    </div>
    <div>
      <case-list-card :data="caseList" v-if="caseList.length"></case-list-card>
      <div class="pagination">
        <button class="ever_btn" @click="goPrev()" v-show="pageNum>1">
          上一页
        </button>
        <button class="ever_btn" @click="goNext()" v-show="pageNum*pageSize<total">
          下一页
        </button>
      </div>
    </div>
    <div>
      <contact-footer></contact-footer>
    </div>
  </div>
  <div v-else>
    <div class="content_section works">
      <div class="section_title">
        <h3 class="title_h3">PROJECTS</h3>
        <p class="title_p">项目</p>
        <img src="../assets/hello/icon.png" alt="img">
      </div>
      <div class="section_main">
        <p>Zhulogic has combined excellent designers at home and abroad, and have completed many excellent design projects together.</p>
      </div>
    </div>
    <div>
      <case-list-card :data="caseList" v-if="caseList.length"></case-list-card>
      <div class="pagination">
        <button class="ever_btn" @click="goPrev()" v-show="pageNum>1">
          Previous Page
        </button>
        <button class="ever_btn" @click="goNext()" v-show="pageNum*pageSize<total">
          Next Page
        </button>
      </div>
    </div>
    <div>
      <contact-footer></contact-footer>
    </div>
  </div>
</template>
<script type="text/javascript">
  import CaseListCard from './CaseListCard.vue'
  import ContactFooter from './ContactFooter.vue'
  export default {
    name: 'case-list',
    components: {
      'case-list-card': CaseListCard,
      'contact-footer': ContactFooter
    },
    data(){
      return {
        showEn:this.$root.showEn,
        caseList: [],
        pageNum: 1,
        pageSize: 15,
        total: 0
      }
    },
    methods: {
      goNext(){
        this.pageNum++;
        this.getCaseList();
      },
      goPrev(){
        this.pageNum--;
        this.getCaseList();
      },
      getCaseList(){
        this.$http.get(`/website_api/web_projects?pageNum=${this.pageNum}&pageSize=${this.pageSize}`)
          .then(res => {
            if (res.data.status_code = 200) {
              this.caseList = res.data.data.list;
              this.total = res.data.data.total;
            } else if (res.data.status_code = 500) {
              console.log('服务器出错了');
            }
            document.body.scrollTop = this.$route.query.scrollTop || 0;
          });
      }
    },
    created(){
      this.getCaseList();
    }
  }
</script>
<style type="text/css" scoped>
  .content_all {
    /*justify-content:space-between;*/
  }

  .content_section.works {
    padding-top: 107px;
    background: url("../assets/hello/case-list-bg.png") no-repeat;
    height: 400px;
    text-align: center;
  }

  .pagination {
    margin: 60px 45px;
    position: relative;
    text-align: left;
  }

  .pagination .ever_btn {
    width: 120px;
    height: 45px;
    line-height: 45px;
    margin: 10px 0;
    font-size: 12px;
    display: inline-block;
  }

  .pagination .ever_btn:last-child {
    position: absolute;
    right: 0;
  }
</style>
