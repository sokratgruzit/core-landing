<template>
  <div>
    <div class="roadmap__container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <div class="roadmap__top-video-outer">
        <div class="roadmap__video">
          <iframe src="https://iframe.videodelivery.net/a8a861e66cd058a7a2b9f8b4f90ce517?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </div>
      </div>
      <div class="roadmap__bottom-video-outer">
        <div class="roadmap__video">
          <iframe src="https://iframe.videodelivery.net/43e3fd7aafe928137053cf281062b6f2?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </div>
      </div>
      <TopHead/>
      <div class="roadmap__container-inner">
        <div class="roadmap__half left">
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">February</div>
            <div class="roadmap__item-description">Founded by Adam Back, Erik Svenson, Pieter Wuille and others.</div>
          </div>
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">March</div>
            <div class="roadmap__item-description">Founded by Adam Back, Erik Svenson, Pieter Wuille and others.</div>
          </div>
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">August</div>
            <div class="roadmap__item-description">Founded by Adam Back, Erik Svenson, Pieter Wuille and others.</div>
          </div>
          <div data-aos="fade-up" class="roadmap__lrg-buble top">Inception</div>
          <div data-aos="fade-up" class="roadmap__ltl-buble middle">2018</div>
          <div data-aos="fade-up" class="roadmap__lrg-buble bottom">Future</div>
        </div>
        <div class="roadmap__half right">
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">June</div>
            <div class="roadmap__item-description">Raised $21M in seed funding.</div>
          </div>
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">Jule</div>
            <div class="roadmap__item-description">Raised $21M in seed funding.</div>
          </div>
          <div data-aos="fade-up" class="roadmap__item">
            <div class="roadmap__item-title">December</div>
            <div class="roadmap__item-description">Raised $21M in seed funding.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHead from '@/components/TopHead.vue'
export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  components: {
    TopHead
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 100)
  },
  methods: {
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 0)
    }
  }
}
</script>
<style scoped>
  .roadmap__bottom-video-outer iframe{
    transform: scale(1.3);
  }
  .roadmap__top-video-outer{
    width: calc(100% + 210px);
    padding-top: 50%;
    position: absolute;
    z-index: 1;
    right: 0px;
    overflow: hidden;
    top: 0px;
  }
  .roadmap__bottom-video-outer{
    width: calc(100% + 210px);
    padding-top: 50%;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    right: 0px;
    bottom: 0px;
  }
  .roadmap__video{
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
  }
  .roadmap__video iframe{
    opacity: .5;
  }
  .roadmap__video:after{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(0deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .roadmap__video:before{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: '';
    z-index: 2;
    height: 50%;
    background: rgb(0,5,15);
    background: linear-gradient(180deg, rgba(0,5,15,0.23993347338935578) 0%, rgba(0,5,15,1) 100%);
  }
  .roadmap__lrg-buble.top{
    top: 80px;
  }
  .roadmap__lrg-buble.bottom{
    bottom: 170px;
  }
  .roadmap__ltl-buble{
    top: 560px;
    font-size: 15px;
    position: absolute;
    right: -32px;
    height: 64px;
    width: 64px;
    border: 2px solid #FF7152;
    background: #00050F;
    display: flex;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
  .roadmap__lrg-buble{
    font-size: 15px;
    position: absolute;
    right: -55px;
    height: 110px;
    width: 110px;
    border: 2px solid #FF7152;
    background: #00050F;
    display: flex;
    border-radius: 50%;
    z-index: 2;
    justify-content: center;
    align-items: center;
  }
  .roadmap__half.left:after{
    content: '';
    width: 2px;
    height: 100%;
    display: flex;
    position: absolute;
    right: 0px;
    top: 0px;
    background: rgb(155,153,255);
    background: linear-gradient(180deg, rgba(155,153,255,0) 0%, rgba(155,153,255,1) 50%, rgba(155,153,255,0) 100%);
  }
  .roadmap__container{
    position: relative;
    display: flex;
    justify-content: center;
    padding-right: 210px;
  }
  .roadmap__container-inner{
    display: flex;
    width: 850px;
    margin-top: 240px;
    padding-bottom: 360px;
    position: relative;
    z-index: 3;
  }
  .roadmap__half{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 370px;
  }
  .left .roadmap__item{
    padding-right: 200px;
    text-align: right;
  }
  .right .roadmap__item{
    padding-left: 200px;
  }
  .left .roadmap__item:after{
    height: 2px;
    width: 85px;
    content: '';
    position: absolute;
    top: 14px;
    right: 80px;
    background: rgb(155,153,255);
    background: linear-gradient(90deg, rgba(155,153,255,1) 0%, rgba(155,153,255,0) 100%);
    display: flex;
  }
  .right .roadmap__item:after{
    height: 2px;
    width: 85px;
    content: '';
    position: absolute;
    top: 14px;
    left: 80px;
    background: rgb(155,153,255);
    background: linear-gradient(270deg, rgba(155,153,255,1) 0%, rgba(155,153,255,0) 100%);
    display: flex;
  }
  .roadmap__item{
    position: relative;
  }
  .roadmap__item-title{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 12px;
  }
  .roadmap__item-description{
    color: rgba(255,255,255,.5);
    font-size: 15px;
    line-height: 24px;
  }
  .left .roadmap__item:nth-child(1){
    margin-top: 260px;
  }
  .left .roadmap__item:nth-child(2){
    margin-top: 350px;
  }
  .left .roadmap__item:nth-child(3){
    margin-top: 150px;
  }
  .right .roadmap__item:nth-child(1){
    margin-top: 400px;
  }
  .right .roadmap__item:nth-child(2){
    margin-top: 400px;
  }
  .right .roadmap__item:nth-child(3){
    margin-top: 260px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .left .roadmap__item {
      padding-right: 100px;
    }
    .right .roadmap__item {
      padding-left: 100px;
    }
    .left .roadmap__item:after{
      width: 55px;
      right: 20px;
    }
    .right .roadmap__item:after{
      width: 55px;
      left: 20px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .roadmap__top-video-outer,.roadmap__bottom-video-outer{
      width: 100%;
    }
    .roadmap__container-inner{
      margin-top: 220px;
    }
    .roadmap__container{
      padding: 0px 25px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .roadmap__top-video-outer iframe{
      transform: scale(1.5);
    }
    .roadmap__container-inner {
      margin-top: 120px;
      padding-bottom: 160px;
    }
    .roadmap__top-video-outer{
      padding-top: 80%;
    }
    .left .roadmap__item:after {
      width: 20px;
      right: 10px;
    }
    .left .roadmap__item{
      padding-right: 45px;
    }
    .right .roadmap__item:after {
      width: 20px;
      left: 10px;
    }
    .right .roadmap__item{
      padding-left: 45px;
    }
    .roadmap__item-title{
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 5px;
    }
    .roadmap__item-description{
      font-size: 12px;
      line-height: 20px;
    }
    .left .roadmap__item {
      padding-right: 40px;
    }
  }
</style>
