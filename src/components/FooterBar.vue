<template>
  <div class="wrap">
    <!-- webPc端 -->
    <div class="pc-footerBar" v-if="!isMobile">
      <div class="footer-content">
        <div class="main">
          <div class="left">
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft01.png"
              /><span class="name">上海集勇信息科技有限公司</span>
            </div>
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft02.png"
              /><span class="text"
                >021-6331 6099&nbsp; &nbsp;|&nbsp;
                &nbsp;周一至周五09:00-18:00</span
              >
            </div>
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft03.png"
              /><span class="text">上海市黄浦区淮海中路222号力宝广场13楼</span>
            </div>
          </div>
          <div class="right">
            <div class="right-content">
              <img src="../assets/img/footerRight01.png" />
              <p class="right-text">App下载</p>
            </div>
            <div class="right-content">
              <img src="../assets/img/footerRight02.png" />
              <p class="right-text">关注公众号</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          Copyright &#169; 2017-{{ year }} Inc.
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="unionFlag">
            沪ICP备17056175号-1</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="sallCnFlag">
            沪ICP备17056175号-4</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="sallComFlag">
            沪ICP备17056175号-2</a>
        </div>
      </div>
    </div>

    <!-- 移动端 -->
    <div class="footerBar" v-else>
      <div class="footer-content">
        <div class="main">
          <div class="left">
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft01.png"
              /><span>上海集勇信息科技有限公司</span>
            </div>
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft02.png"
              /><span
                >021-6331&nbsp;6099&nbsp; &nbsp;|&nbsp;
                &nbsp;周一至周五09:00-18:00</span
              >
            </div>
            <div class="left-main">
              <img
                class="footer-left-icon"
                src="../assets/img/footerLeft03.png"
              /><span>上海市黄浦区淮海中路222号力宝广场13楼</span>
            </div>
          </div>
          <div class="right">
            <div class="right-content">
              <img src="../assets/img/footerRight01.png" />
              <p>App下载</p>
            </div>
            <div class="right-content">
              <img src="../assets/img/officialAccountMobile.png" />
              <p>关注公众号</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          Copyright &#169; 2017-{{ year }} Inc.
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="unionFlag">
            沪ICP备17056175号-1</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="sallCnFlag">
            沪ICP备17056175号-4</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" v-if="sallComFlag">
            沪ICP备17056175号-2</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../src/utils/utils";
export default {
  name: "footerBar",
  data() {
    return {
      isMobile: false,
      year: new Date().getFullYear(),
      unionFlag: false,
      sallCnFlag: false,
      sallComFlag: false,
    };
  },
  mounted() {
    this.isMobile = utils.isMobile();
    this.unionFlag = document.domain.includes('round-table-union.com');
    this.sallCnFlag = document.domain.includes('swordsall.cn');
    this.sallComFlag = document.domain.includes('swordsall.com');
  },
};
</script>


<style scoped lang="less">
.pc-footerBar {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #ffffff;
  background: url("../assets/img/footerBg.png") no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  .footer-content {
    width: @primaryWith;
    .main {
      display: flex;
      justify-content: space-between;
      .left {
        margin: 65px 0;
        font-size: 16px;
        .left-main {
          display: flex;
          align-items: center;
          height:50px;
          img {
            width: 20px;
            height: 20px;
            padding-right: 5px;
          }
          .name {
            text-align: center;
            font-size: 18px;
          }
          .text {
            text-align: center;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
      .right {
        margin: 60px 0;
        display: flex;
        justify-content: center;
        .right-content {
          padding-left: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          img {
            width: 100px;
            height: 100px;
          }
          .right-text {
            font-size: 14px;
            width: 100px;
            text-align: center;
          }
        }
      }
    }
    .bottom {
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      padding: 2px 0;
      border-top: 1px solid #ffffff;
      opacity: 0.5;
      padding: 20px 0;
    }
  }
}

.footerBar {
  width: 375px;
  font-size: 14px;
  color: #ffffff;
  background: url("../assets/img/footerBgMobile.png") no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  .footer-content {
    width: 100%;
    .main {
      width: 100%;
      display: grid;
      grid-template-columns: auto;
      .left {
        margin: 40px 32px 30px 32px;
        font-size: 14px;
        .left-main {
          display: flex;
          margin: 16px 0;

          img {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
      }
      .right {
        display: flex;
        justify-content: start;
        margin-bottom: 30px;
        .right-content {
          padding-left: 50px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            text-align: center;
            font-size: 13px;
          }
          p:first {
            font-size: 14px;
          }
        }
      }
    }
    .bottom {
      font-size: 12px;
      color: #ffffff;
      text-align: center;
      padding: 2px 0;
      border-top: 1px solid #ffffff;
      opacity: 0.5;
      padding: 20px 0;
    }
  }
}
</style>
