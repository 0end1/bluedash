<template>
  <div class="home-page">
    <div class="pc-home" v-if="!isMobile">
      <div class="content">
        <div class="swiper-content">
          <swiper :slides="slides" :swiperMobile="false"></swiper>
        </div>
        <div class="main">
          <div class="manage">
            <p class="title">智能数字化店铺运营管理</p>
            <p class="subtitle">
              全流程智能数字化，提升商家经营时效，促进门店业绩增长，降低运营采购成本
            </p>
            <div>
              <div class="manage-tab">
                <span
                  v-for="(item, index) in tabList"
                  :key="index"
                  :class="{ active: currentTab == index }"
                  @click="toggleTab(index)"
                  >{{ item }}</span
                >
              </div>
              <div
                class="manage-content"
                v-for="(item, index) in manageList"
                :key="index"
                v-show="currentTab == item.id"
              >
                <div class="manage-right">
                  <p class="manage-right-title">{{ item.title }}</p>
                  <p class="manage-right-subTitle">
                    {{ item.subTitle }}
                  </p>
                  <div class="manage-iconArea">
                    <div
                      class="manage-right-iconArea"
                      v-for="(list, index) in item.list"
                      :key="index"
                    >
                      <img class="manage-right-icon" :src="list.img" />
                      <p class="manage-right-text">{{ list.name }}</p>
                    </div>
                  </div>
                </div>
                <div class="manage-left">
                  <img :src="item.manageImg" />
                </div>
              </div>
            </div>
          </div>

          <div class="industry">
            <p class="title">适用行业</p>
            <p class="subtitle">专注美业信息化服务，多业态门店全适用</p>
            <div class="industry-img">
              <img
                v-for="(img, index) in industryList"
                :key="index"
                :src="img.src"
                @mouseover="handleOver(index)"
                @mouseout="handleOut(index)"
                ref="industryImg"
              />
            </div>
          </div>

          <p class="title">他们都在用</p>
          <p class="subtitle">专注美业20年，越来越多的门店选择我们</p>
          <div class="use">
            <div class="useItem">
              <div class="useContent">
                <!-- <span
                  class="useShop"
                  v-for="(item, index) in useList"
                  :key="index"
                  >{{ item }}</span
                > -->
                <img :src="shopNameImg" style="width:100%" alt="" srcset="" />
              </div>
            </div>
          </div>

          <div class="title">实力与保障</div>
          <div class="subtitle">优秀的技术研发团队，稳定安全的数据保障</div>
          <div class="strength">
            <div class="strength-img" v-for="(item, index) in strengthList" :key="index">
              <img
                :key="index"
                :src="item.src"
                @mouseover="imgChangeOn(index)"
                @mouseout="imgChangeOut(index)"
                ref="strengthImg"
              />
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home" v-else>
      <div class="content">
        <div class="swiper-content">
          <swiper :slides="slides" swiperMobile></swiper>
        </div>
        <div class="main">
          <div class="manage">
            <p class="title">智能数字化店铺运营管理</p>
            <p class="subtitle">
              全流程智能数字化，提升商家经营时效，促进门店业绩增长，降低运营采购成本
            </p>
            <div>
              <div class="manage-tab">
                <span
                  v-for="(item, index) in tabList"
                  :key="index"
                  :class="{ active: currentTab == index }"
                  @click="toggleTab(index)"
                  >{{ item }}</span
                >
              </div>
              <div
                class="manage-content"
                v-for="(item, index) in manageList"
                :key="index"
                v-show="currentTab == item.id"
              >
                <div class="manage-right">
                  <p class="manage-right-title">{{ item.title }}</p>
                  <p class="manage-right-subTitle">
                    {{ item.subTitle }}
                  </p>
                  <div class="manage-iconArea">
                    <div
                      class="manage-right-iconArea"
                      v-for="(list, index) in item.list"
                      :key="index"
                    >
                      <img class="manage-right-icon" :src="list.img" />
                      <p class="manage-right-text">{{ list.name }}</p>
                    </div>
                  </div>
                </div>
                <div class="manage-left">
                  <img :src="item.manageImg" />
                </div>
              </div>
            </div>
          </div>

          <div class="industry">
            <p class="title">适用行业</p>
            <p class="subtitle">专注美业信息化服务，多业态门店全适用</p>
            <div class="industry-img">
              <img
                v-for="(img, index) in industryList"
                :key="index"
                :src="img.src"
                @mouseover="handleOver(index)"
                @mouseout="handleOut(index)"
                ref="industryImg"
              />
            </div>
          </div>

          <p class="title">他们都在用</p>
          <p class="subtitle">专注美业20年，越来越多的门店选择我们</p>
          <div class="use">
            <div class="useItem">
              <div class="useContent">
                <div
                  class="useShop"
                  v-for="(item, index) in useList"
                  :key="index"
                  >{{ item }}
                </div>
              </div>
            </div>
          </div>

          <div class="strength">
            <p class="title">实力与保障</p>
            <p class="subtitle">优秀的技术研发团队，稳定安全的数据保障</p>
            <div class="strength-box" v-for="(item, index) in strengthList" :key="index">
              <img
                :key="index"
                :src="item.src"
                @mouseover="imgChangeOn(index)"
                @mouseout="imgChangeOut(index)"
                ref="strengthImg"
              />
              <div class="strength-text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "../../src/utils/utils";
import Swiper from "../components/swiper.vue";

export default {
  name: "index",
  components: {
    Swiper,
  },
  data() {
    return {
      isMobile: false,
      swiperMobile: false,
      currentTab: 0,
      tabList: ["店务管理", "小程序商城"],
      slides: [
        {
          src: require("../assets/img/home/swiper01.png"),
          mobileSrc: require("../assets/img/home/swiper01-mobile2.png"),
          href: "/about",
        },
        {
          src: require("../assets/img/home/swiper02.png"),
          mobileSrc: require("../assets/img/home/swiper02-mobile2.png"),
          href: "/americanTalent",
        },
      ],
      manageList: [
        {
          id: 0,
          title: "店务管理",
          subTitle: "数字化门店管理，提升门店管理效率和业绩",
          manageImg: require("../assets/img/home/home01.png"),
          list: [
            {
              img: require("../assets/img/home/homeIcon01.png"),
              name: "开单记账",
            },
            {
              img: require("../assets/img/home/homeIcon02.png"),
              name: "会员管理",
            },
            {
              img: require("../assets/img/home/homeIcon03.png"),
              name: "员工管理",
            },
            {
              img: require("../assets/img/home/homeIcon04.png"),
              name: "店铺业绩",
            },
            {
              img: require("../assets/img/home/homeIcon05.png"),
              name: "智能预约",
            },
          ],
        },
        {
          id: 1,
          title: "小程序商城",
          subTitle: "门店的社交名片，通过分享吸引更多客户",
          manageImg: require("../assets/img/home/home02.png"),
          list: [
            {
              img: require("../assets/img/home/homeIcon06.png"),
              name: "微信预约",
            },
            {
              img: require("../assets/img/home/homeIcon07.png"),
              name: "商城购买",
            },
            {
              img: require("../assets/img/home/homeIcon08.png"),
              name: "在线查询",
            },
            {
              img: require("../assets/img/home/homeIcon09.png"),
              name: "线上营销",
            },
            {
              img: require("../assets/img/home/homeIcon10.png"),
              name: "",
            }
          ],
        },
      ],
      industryList: [
        {
          src: require("../assets/img/home/industry01.png"),
          activatedSrc: require("../assets/img/home/industry02.png"),
        },
        {
          src: require("../assets/img/home/industry03.png"),
          activatedSrc: require("../assets/img/home/industry04.png"),
        },
        {
          src: require("../assets/img/home/industry05.png"),
          activatedSrc: require("../assets/img/home/industry06.png"),
        },
        {
          src: require("../assets/img/home/industry07.png"),
          activatedSrc: require("../assets/img/home/industry08.png"),
        },
        {
          src: require("../assets/img/home/industry09.png"),
          activatedSrc: require("../assets/img/home/industry10.png"),
        },
        {
          src: require("../assets/img/home/industry11.png"),
          activatedSrc: require("../assets/img/home/industry12.png"),
        },
      ],
      useList: [
        "靓潮美容美发",
        "新经典",
        "东岛造型",
        "尊尚造型",
        "梵希造型",
        "美琪造型",
        "靓剪美容美发",
        "新琪造型",
        "京田美容美甲",
        "柯梵造型",
        "戈木造型",
        "新星造型",
        "美界工作室",
        "杰森造型",
        "领尚造型",
        "剪约造型",
        "汤尼造型",
        "美界造型",
        "梵客造型",
        "世田造型",
        "东靈造型",
        "星尚造型",
        "层名流工作室",
        "騑美甲美睫",
        "花样年华",
        "华萍美发造型",
        "星点造型",
        "No 5",
        "安迪美业",
        "七号造型",
        "组合造型",
        "东方名意",
        "星东田造型",
        "毓秀美容美发",
        "时光沙龙",
        "鼎豪造型",
        "蜜奢美甲美睫",
      ],
      shopNameImg: require("../assets/img/home/shopName.png"),
      strengthList: [
        {
          src: require("../assets/img/home/strength01.png"),
          activatedSrc: require("../assets/img/home/strength02.png"),
          text: "数据安全",
        },
        {
          src: require("../assets/img/home/strength03.png"),
          activatedSrc: require("../assets/img/home/strength04.png"),
          text: "快速访问",
        },
        {
          src: require("../assets/img/home/strength05.png"),
          activatedSrc: require("../assets/img/home/strength06.png"),
          text: "技术过硬",
        },
        {
          src: require("../assets/img/home/strength07.png"),
          activatedSrc: require("../assets/img/home/strength08.png"),
          text: "系统稳定",
        },
        {
          src: require("../assets/img/home/strength09.png"),
          activatedSrc: require("../assets/img/home/strength10.png"),
          text: "智能高效",
        },
        {
          src: require("../assets/img/home/strength11.png"),
          activatedSrc: require("../assets/img/home/strength12.png"),
          text: "快速迭代",
        },
        {
          src: require("../assets/img/home/strength13.png"),
          activatedSrc: require("../assets/img/home/strength14.png"),
          text: "实时安装",
        },
        {
          src: require("../assets/img/home/strength15.png"),
          activatedSrc: require("../assets/img/home/strength16.png"),
          text: "专属客服",
        },
      ],
    };
  },
  created() {
    this.isMobile = utils.isMobile();
    /*this.$nextTick(() => {
      this.swiperMobile = utils.isMobile();
    })*/
  },
  methods: {
    toggleTab(index) {
      this.currentTab = index;
    },
    handleOver(index) {
      let industryImg = this.$refs.industryImg;
      industryImg[index].src = this.industryList[index].activatedSrc;
    },
    handleOut(index) {
      let industryImg = this.$refs.industryImg;
      industryImg[index].src = this.industryList[index].src;
    },
    imgChangeOn(index) {
      let strengthImg = this.$refs.strengthImg;
      strengthImg[index].src = this.strengthList[index].activatedSrc;
    },
    imgChangeOut(index) {
      let strengthImg = this.$refs.strengthImg;
      strengthImg[index].src = this.strengthList[index].src;
    },
  },
};
</script>

<style scoped lang="less">
.pc-home {
  display: flex;
  justify-content: center;
  background-color: @primaryBackground;

  .content {
    .center {
      width: @primaryWith;
    }

    .swiper-content {
      width: 100%;
      //height: 790px;
      overflow: hidden;
      
    }

    .title {
      font-size: 36px;
      font-weight: 600;
      color: #000000;
      text-align: center;
      margin: 110px 0 22px 0;
    }

    .subtitle {
      font-size: 24px;
      color: #333333;
      text-align: center;
      margin: 16px 0 50px 0;
    }

    .manage:extend(.centerContent) {
      .manage-tab {
        font-size: 28px;
        text-align: center;
        border-bottom: 1px solid #e9e9e9;

        span {
          padding: 17px 44px;
          text-align: center;
        }

        .active {
          color: #e43535;
          border-bottom: 3px solid #e43535;
        }

        span {
          display: inline-block;
        }
      }

      .manage-content {
        margin-top: 70px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        .manage-left {
          width: 568px;
          height: 460px;
          margin-right: 50px;

          img {
            width: 568px;
            height: 460px;
          }
        }

        .manage-right {
          color: #000000;

          .manage-right-title {
            font-size: 36px;
            line-height: 42px;
          }

          .manage-right-subTitle {
            font-size: 24px;
            margin-top: 16px;
          }

          .manage-iconArea {
            display: flex;
            flex-wrap: nowrap;
            width: 550px;

            .manage-right-iconArea {
              width: 130px;
              text-align: center;
              margin: 40px 0px 14px 0;

              img {
                width: 36px;
                height: 36px;
              }

              .manage-right-text {
                font-size: 20px;
                color: #333333;
                margin-top: 0px;
              }
            }
          }
        }
      }
    }

    .industry:extend(.centerContent) {
      .industry-img {
        display: grid;
        grid-template-columns: 380px 380px 380px;
        grid-template-rows: 285px 285px;
        grid-gap: 26px 30px;

        img {
          width: 380px;
          height: 285px;
        }
      }
    }

    .use {
      background: #fafafa;

      .useItem:extend(.centerContent) {
        .useContent {
          padding: 20px 0;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;

          .useShop {
            text-align: center;
            padding: 23px;
            border: 1px solid #e9e9e9;
            font-size: 20px;
            color: #333333;
            background: #ffffff;
            margin: 10px;
          }
        }
      }
    }

    .strength:extend(.centerContent) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .strength-img {
        padding-top: 20px;
        padding-bottom: 100px;
        img {
          width: 128px;
          height: 128px;
        }
        p {
          font-size: 22px;
          width: 128px;
          text-align: center;
        }
      }
    }
  }
}

.home-page {
  width: 100%;
}

.home {
  display: flex;
  justify-content: center;
  background-color: @primaryBackground;
  width: 100%;

  .content {
    width: 100%;

    .swiper-content {
      width: 100%;
      height: 282px;
      overflow: hidden;
    }

    .title {
      font-size: 20px;
      font-weight: 600;
      color: #000000;
      text-align: center;
      margin-top: 50px;
    }

    .subtitle {
      font-size: 15px;
      color: #333333;
      text-align: center;
      margin: 10px 0 30px 0;
    }

    .manage {
      padding: 0 30px;

      .manage-tab {
        padding: 0 3px;
        font-size: 18px;
        text-align: center;
        border-bottom: 1px solid #e9e9e9;

        span {
          padding: 0 20px 12px 20px;
          text-align: center;
        }

        .active {
          color: #e43535;
          border-bottom: 2px solid #e43535;
        }

        span {
          display: inline-block;
        }
      }

      .manage-content {
        margin-top: 20px;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        justify-content: center;

        .manage-left {
          width: 100%;
           text-align: center;
          img {
            width: 315px;
            height: 256px;
          }
        }

        .manage-right {
          margin-bottom: 0.5rem;
          color: #000000;
          width: 315px;
          .manage-right-title {
            font-size: 18px;
          }

          .manage-right-subTitle {
            font-size: 15px;
            margin: 7px 0 20px 0;
          }

          .manage-iconArea {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .manage-right-iconArea {
              width: 56px;
              height: 52px;
              text-align: center;

              .manage-right-icon {
                width: 24px;
                height: 24px;
              }
              .manage-right-text {
                font-size: 13px;
                margin: 6px 0 20px 0;
                color: #333333;
              }
            }
          }
        }
      }
    }

    .industry {
      width: 100%;

      .industry-img {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: repeat(6, auto);
        grid-row-gap: 16px;

        img {
          display: flex;
          justify-self: center;
          width: 315px;
          height: 236px;
        }
      }
    }

    .use {
      background: #fafafa;

      .useItem {
        padding: 30px 0;

        .useContent {
          display: grid;
          grid-template-columns: repeat(3, max-content);
          justify-content: center;
          grid-gap: 14px;
          color: #333333;

          .useShop {
            display: inline-block;
            width: 105px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            margin: 0 auto;
            border: 1px solid #e9e9e9;
            font-size: 14px;
            color: #333333;
            background: #ffffff;
          }
        }
      }
    }

    .strength {
      padding: 0 16px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      .strength-box {
        margin-bottom: 14px;
        img {
          width: 105px;
          height: 105px;
          object-fit: cover;
          vertical-align: bottom;
        }

        .strength-text {
          color: #333333;
          width: 105px;
          text-align: center;
          font-weight: 400; 
          font-size: 15px;
          margin-top: 4px;
        }
      }
      .strength-box:last-of-type {
        margin-bottom: 50px;
      }
    }
  }
}
</style>
