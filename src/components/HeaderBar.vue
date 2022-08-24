<template>
  <div class="wrapper">
    <template v-if="isMobile">
      <div class="pc-placeholder" style="height: 44px"></div>
      <!-- 移动端 -->
      <div class="headerBar">
        <div class="head-content">
          <div class="mobile-menu" ref="mobileMenu">
            <div class="mark" ref="mark" @click="close()"></div>
            <div class="menu">

              <img
                class="mobile-icon"
                src="../assets/img/menu.png"
                @click="show"
              />
              <router-link to="/index">
              <img class="mobile-logo" src="../assets/img/mobileLogo.png" />
              </router-link>
            </div>
          </div>
          <div class="mobile-nav" ref="menuList">
            <img
              class="closeIcon"
              ref="menuClose"
              src="../assets/img/close.png"
              @click="close()"
            />
            <ul class="nav">
              <li
                v-for="(item) in configNav"
                :key="item.id"
                :class="{ active: $route.meta.index == item.id }"
                @click="handelTab(item)"
              >
                <p class="text">{{ item.name }}</p>
                <p class="line" v-show="$route.meta.index == item.id"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="pc-placeholder" style="height: 80px"></div>
      <div class="pc-headerBar" v-if="!isMobile">
        <!-- webPc导航 -->
        <div class="head-content">
          <div class="logo" ref="logo">
            <router-link to="/index">
            <img src="../assets/img/logo.png" />
            </router-link>
          </div>
          <!-- <div class="mobile-menu" ref="mobileMenu">
            <div class="mark" ref="mark" @click="close()"></div>
            <div class="menu">
              <img
                class="mobile-icon"
                src="../assets/img/menu.png"
                @click="show()"
              />
              <img class="mobile-logo" src="../assets/img/mobileLogo.png" />
            </div>
          </div> -->
          <div class="right" ref="menuList">
            <img
              class="closeIcon"
              ref="menuClose"
              src="../assets/img/close.png"
              @click="close()"
            />
            <ul class="nav">
              <li
                v-for="(item) in configNav"
                :key="item.id"
                :class="{ active:$route.meta.index == item.id }"
                @click="handelTab(item)"
              >
                <p class="nav-text">{{ item.name }}</p>
                <p class="line" v-show="$route.meta.index == item.id"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import utils from "../../src/utils/utils";
export default {
  name: "headerBar",
  data() {
    return {
      isMobile: false,
      currentClass: 0,
      isShow: true,
      configNav: [
        { id: 0, name: "首页", path: "/index" },
        { id: 1, name: "产品服务", path: "/productService" },
        { id: 2, name: "美业人才", path: "AmericanTalent" },
        { id: 3, name: "关于我们", path: "/about" },
        { id: 4, name: "联系我们", path: "/contactUs" },
        { id: 5, name: "下载", path: "/downLoad" },
      ],
    };
  },
  created() {},
  mounted() {
    const that = this;
    that.isMobile = utils.isMobile();
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth;
    //     console.log(this.screenWidth);

    //     that.screenWidth = window.screenWidth;
    //     //this.isShow = this.screenWidth> 768 ? true:false;
    //     this.$refs.menuList.style.display =
    //       this.screenWidth > 540 ? "block" : "none";
    //     this.$refs.logo.style.display =
    //       this.screenWidth > 540 ? "block" : "none";
    //     this.$refs.mobileMenu.style.display =
    //       this.screenWidth > 540 ? "none" : "block";
    //   })();
    // };
  },
  methods: {
    handelTab(e) {
      this.$router.push({ path: e.path });
      this.currentClass = e.id;
      this.close();
    },
    show() {
      this.$refs.menuList.style.display = "block";
      this.$refs.menuClose.style.display = "block";
       this.$refs.mark.style.display = "block";
      //  this.$refs.mark.style.display = "block";
    },
    close() {
      console.log(1);
      if (window.screen.width < 540) {
        this.$refs.menuList.style.display = "none";
        this.$refs.menuClose.style.display = "none";
        this.$refs.mark.style.display = "none";
      } else {
        this.$refs.menuList.style.display = "block";
      }
      // if ( this.screenWidth < 768) {
      // this.$refs.menuClose.style.display = "none";
      // this.$refs.menuList.style.display = "none";
      // // this.$refs.mark.style.display = "none";
      // }
    },
  },
};
</script>


<style scoped lang="less">
.pc-headerBar {
  display: flex;
  justify-content: center;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;

  .head-content {
    width: @primaryWith;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 27px 0;
    .mobile-menu {
      display: none;
    }
    .logo {
      display: block;
      margin-top: -6px;
      // width: 177px;
      // height: 50px;
      img {
        width: 152px;
        height: 40px;
        vertical-align: inherit;
      }
    }
    .right {
      display: block;
      .closeIcon {
        display: none;
      }
      .nav {
        font-size: 18px;

        .active {
          color: #e43535;
        }
        li {
          position: relative;
          color: #333333;
          cursor: pointer;
          display: inline-block;
          .nav-text {
            font-size: 18px;
            min-width: 100px;
            text-align: center;
            height: 36px;
          }
          .line {
            width: 20px;
            height: 2px;
            border-bottom: 4px solid #e43535;
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}

.headerBar {
  width: 100%;
  height: 44px;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 9;
  .head-content {
    padding: 0 16px;
    .mobile-menu {
      width: 100%;
      display: block;
      .mark {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 998;
        background: rgba(0, 0, 0, 0.3);
      }
      .menu {
        z-index: 999;
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
        .mobile-logo {
          width: 92px;
          height: 24px;
          img {
            width: 97px;
            height: 24px;
          }
        }
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.5s ease;
    }
    .fade-enter,
    .fade-leave-active {
      opacity: 0;
    }
    .mobile-nav {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 325px;
      height: 100%;
      background: #ffffff;
      z-index: 998;
      padding: 10px 0 0 0;
      .closeIcon {
        position: absolute;
        top: 12px;
        right: 16px;
        width: 24px;
          height: 24px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      .nav {
        width: 100%;
        margin: 24px 0 0 0;
        padding: 10px 0 0 40px;
        box-sizing: border-box;

        .active {
          color: #e43535;
        }
        li:first-child, li:last-child {
          width: 40px;
        }
        li {
          position: relative;
          height: 60px;
          display: block;
          width: 80px;

          p {
            font-size: 18px;
            color: #333333;
          }
          .line {
            width: 20px;
            height: 20px;
            border-bottom: 3px solid #e43535;
            position: absolute;
            left:45%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
</style>
