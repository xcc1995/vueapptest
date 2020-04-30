<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationwz" class="location-icon" />
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" />
        </van-col>
        <van-col span="5">
          <van-button type="default" size="mini">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      locationwz: require("../../assets/images/location.png"),
      value: "",
         images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  mounted () {
    
  },
};
</script>

<style  scoped>
.search-bar {
  height: 2.2rem;
  background-color: blueviolet;
  line-height: 2.2rem;
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border: 0px;
  border-bottom: 1px white solid;
  background-color: blueviolet;
  color: white;
}
.location-icon {
  width: 80%;
  height: 80%;
  padding-top: 0.2rem;
  padding-left: 0.3rem;
}
.swiper-area{
  /* border: 1px red solid; */
  clear: both;
  max-height: 15rem;
  overflow: hidden;
}
</style>