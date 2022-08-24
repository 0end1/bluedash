<template>
  <div>
    <div class="wrap">
      <div
        class="swiper"
        v-if="swiperMobile"
        @mouseover="clearInv"
        @mouseout="runInv"
      >
        <div class="slide-img">
          <transition name="slide-trans">
            <img
              class="swiper-img"
              v-if="isShow"
              :src="slides[nowIndex].mobileSrc"
            />
          </transition>
          <transition name="slide-trans-old">
            <img
              class="swiper-img"
              v-if="!isShow"
              :src="slides[nowIndex].mobileSrc"
            />
          </transition>
        </div>
        <span class="more">
          <router-link :to="slides[nowIndex].href" class="router-test"
            >了解更多</router-link
          >
        </span>
        <ul class="slide-pages">
         <span
            :class="[nowIndex === 0 ? 'active' : 'round']"
            @click="goto(prevIndex)"
          ></span>
          <span
            :class="[nowIndex === 1 ? 'active' : 'round']"
            @click="goto(nextIndex)"
          ></span>
          <!-- <li v-for="(item, index) in slides" :key="index" @click="goto(index)">
            <a :class="{ on: index === nowIndex }"></a>
          </li> -->
        </ul>
      </div>

      <div class="pc-swiper" v-else @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
          <transition name="slide-trans">
            <img v-if="isShow" :src="slides[nowIndex].src" />
          </transition>
          <transition name="slide-trans-old">
            <img v-if="!isShow" :src="slides[nowIndex].src" />
          </transition>
        </div>
        <span class="more"
          ><router-link :to="slides[nowIndex].href" class="router-test">
            了解更多
          </router-link></span
        >
        <ul class="slide-pages">
          <span
            :class="[nowIndex === 0 ? 'active' : 'round']"
            @click="goto(prevIndex)"
          ></span>
          <span
            :class="[nowIndex === 1 ? 'active' : 'round']"
            @click="goto(nextIndex)"
          ></span>
          <!-- <li
            v-for="(item, index) in slides"
            :key="index"
            @click="goto(index)"
          >
            <a :class="[ index === nowIndex?'active':'round' ]"></a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>
<script scoped>
import utils from "../../src/utils/utils";

export default {
  name: "swiper",
  props: {
    //组件的图片相关信息S
    slides: {
      type: Array,
      default: () => [],
    },
    //轮播的时间间隔
    inv: {
      type: Number,
      default: 5000,
    },
    swiperMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // isMobile: false,
      nowIndex: 0,
      isShow: false,
    };
  },
  computed: {
    //获得前一张图片
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    //获得下一张图
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    },
  },
  mounted() {
    this.isMobile = utils.isMobile();
    //页面加载完成，启动自动播放轮播图函数
    this.runInv();
  },
  methods: {
    //跳转到任意一页
    goto(index) {
      this.isShow = false;
      //10毫秒的延迟，为过渡提供时间
      setTimeout(() => {
        this.isShow = true;
        this.nowIndex = index;
        //可以向父组件发送当前的图片index
        this.$emit("onchange", index);
      }, 10);
    },
    //使用定时器定时调用跳转到下一页的函数
    //鼠标移入和页面开始时执行定时器
    runInv() {
      this.invID = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    //鼠标进入，清除定时器，轮播图停止自动轮播
    clearInv() {
      clearInterval(this.invID);
    },
  },
};
</script>

<style scoped lang="less">
/* 使用过度写两个图片交替的过程 */
.pc-swiper {
  position: relative;
  width: 100%;
  height: 788px;
  background-color: black;

  .slide-trans-enter-active {
    transition: all 0.5s;
  }

  .slide-trans-enter {
    transform: translateX(100%);
  }

  .slide-trans-old-leave-active {
    transition: all 0.5s;
    transform: translateX(-100%);
  }

  .slide-img {
    width: 100%;
    img{
      width: 100%;
    }
  }

  .more {
    cursor: pointer;
    position: absolute;
    bottom: 237px;
    left: calc(50% - 156px);
    width: 312px;
    height: 87px;
    background: #e43535;
    font-size: 28px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 87px;
    z-index: 2;
  }

  .slide-pages {
    position: absolute;
    bottom: 50px;
    left: calc(50% - 50px);
    width: 100px;
    display: flex;
    justify-content: center;

    .slide-pages li a {
      display: block;
      cursor: pointer;
      background-color: #ffffff;
      width: 12px;
      height: 12px;
      clip-path: circle(50%);
      margin: 0 5px;
    }

    .slide-pages li .active {
      background-color: red;
      width: 30px;
      height: 12px;
      border-radius: 100px 100px 100px 100px;
    }
    .round {
      display: inline-block;
      cursor: pointer;
      width: 12px;
      height: 12px;
      background: #ffffff;
      clip-path: circle(50%);
      margin: 0 5px;
    }
    .active {
      width: 30px;
      height: 12px;
      background: #e43535;
      border-radius: 100px 100px 100px 100px;
    }
  }
}

/* 移动端 */
/*
.wrap {
  width: 375px;

}
*/

.swiper {
  position: relative;
  width: 375px;
  height: 282px;
  background-color: black;

  .slide-trans-enter-active {
    transition: all 0.5s;
  }

  .slide-trans-enter {
    transform: translateX(100%);
  }

  .slide-trans-old-leave-active {
    transition: all 0.5s;
    transform: translateX(-100%);
  }

  .slide-img {
    width: 375px;

    .swiper-img {
      width: 375px;
      height: 282px;
    }
  }

  .more {
    cursor: pointer;
    position: absolute;
    bottom: 62px;
    left: 50%;
    transform: translateX(-50%);
    width: 116px;
    height: 40px;
    background: #e43535;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    z-index: 1;
  }

  .slide-pages {
    position: absolute;
    bottom: 16px;
    left: calc(50% - 50px);
    width: 100px;
    display: flex;
    justify-content: center;

    .slide-pages li a {
      display: block;
      cursor: pointer;
      background-color: #ffffff;
      width: 12px;
      height: 12px;
      clip-path: circle(50%);
      margin: 0 5px;
    }

    .slide-pages li .on {
      background-color: red;
      width: 30px;
      height: 12px;
      border-radius: 100px 100px 100px 100px;
    }
     .round {
      display: inline-block;
      cursor: pointer;
      width: 6px;
      height: 6px;
      background: #ffffff;
      clip-path: circle(50%);
      margin: 0 5px;
    }
    .active {
      width: 14px;
      height: 6px;
      background: #e43535;
      border-radius: 100px 100px 100px 100px;
    }
  }
}
</style>
