<template>
  <div id="app" class="app" ref="app">
    <!--  顶部导航兰  -->
    <header-bar></header-bar>
    <!--  页面容器  -->
    <keep-alive><router-view /></keep-alive>
    <!--  底部  -->
    <div class="float" v-if="isMobile">
      <div class="focusOnImg">
        <img v-show="show" title="联系客服" src="./assets/img/float06.png" />
      </div>
      <div class="floatContent">
        <a href="#app"> <img src="./assets/img/float05.png" /></a>
      </div>
    </div>

    <div class="pc-float" v-else >
      <div class="focusOnImg">
        <img v-show="show" title="联系客服" src="./assets/img/float06.png" />
      </div>
      <div class="floatContent">
        <a href="#app"> <img src="./assets/img/float05.png" /></a>
      </div>
    </div>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import utils from "@/utils/utils";
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    HeaderBar,
    FooterBar,
  },
  data() {
    return {
       isMobile: false,
      title: "",
      backShow: false,
      transitionName: "",
      show: false,
    };
  },
  mounted() {
    this.isMobile = utils.isMobile();
    console.log("height33", window.screen.height);
    this.$nextTick(() => {});
  },
  methods: {
  },
};
</script>
<style lang="less">
.app {
  font-family: PingFang SC-Regular, PingFang SC, Avenir, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background: #ffffff;
  width: 100%;
  overflow-x: hidden;

  .pc-float {
    position: fixed;
    right: 30px;
    bottom: 40px;
    display: flex;
    .focusOnImg {
      padding-top: 20px;
      img {
        width: 147px;
        height: 170px;
      }
    }
    .floatContent {
      img {
        display: block;
        width: 70px;
        height: 70px;
      }
    }
  }
  .float {
    position: fixed;
    right: 6px;
    bottom: 20px;
    display: flex;
    //display: grid;
    //grid-template-columns: 90px 32px;
    .focusOnImg {
      img {
        width: 90px;
        //height: 114px;
      }
    }
    .floatContent {
      display: flex;
      flex-direction:column;
      justify-content:center;
      height: 114px;
      img {
        display: block;
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
