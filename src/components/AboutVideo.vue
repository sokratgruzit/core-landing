<template>
  <div class="about-video__container">
    <div class="about-video__text">
      <div class="container">
        <h3 class="font-51">Simple Text Here</h3>
        <div class="about-video__text-descr">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </div>
      </div>
    </div>
    <div class="about-video">
      <iframe src="https://iframe.videodelivery.net/5e4a7d5c6d497ae4c84da7eddbf699e6?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe> </div>
    <div class="about-video__poster-inner" :class="playVideo ? 'active' : ''" @click="playVideoFunc" v-if="false">
      <div class="about-video__poster">
        <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/about-video.jpg`)" alt="" class="about-video__poster-img">
      </div>
      <div class="about-video__play">
        <div class="about-video__play-txt">
          <span>play</span>
          <span>play</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Array
    }
  },
  data () {
    return {
      playVideo: false
    }
  },
  methods: {
    playVideoFunc () {
      if (!this.playVideo) {
        this.playVideo = true
      } else {
        this.playVideo = false
      }
    }
  }
}
</script>
<style>
  .about-video__text-descr{
    font-size: 15px;
    line-height: 24px;
  }
  .about-video__text .container{
    display: flex;
    flex-direction: column;
  }
  .about-video__text{
    position: absolute;
    bottom: 60px;
    left: 0px;
    flex-direction: column;
    display: flex;
    width: 50%;
  }
  .about-video{
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0px;
    right: 0px;
    opacity: .5;
  }
  .about-video__play-txt span{
    color: #141417;
    text-transform: uppercase;
    line-height: 25px;
    font-size: 13px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .about-video__play:hover span{
    transform: translateY(-100%);
  }
  .about-video__play-txt {
    display: flex;
    flex-direction: column;
    height: 25px;
    overflow: hidden;
  }
  .about-video__play{
    position: relative;
    height: 128px;
    width: 128px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .about-video__play:hover{
    background: rgba(255,255,255,.7);
  }
  .about-video__poster{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .about-video__poster img{
    position: absolute;
    left: 0px;
    height: 120%;
    top: -10%;
    object-fit: cover;
  }
  .about-video__poster-inner{
    height: 100%;
    width: calc(210px + 100%);
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .about-video__poster-inner.active{
    opacity: 0;
    transition-delay: .2s;
  }
  .about-video__container{
    position: relative;
    z-index: 1;
    padding-top: 42%;
  }
  /*Ipad pro*/
  @media (max-width: 1300px){
    .about-video__text{
      bottom: 30px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .about-video__text{
      width: 100%;
    }
    .about-video__play{
      height: 80px;
      width: 80px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
    .about-video__poster img{
      width: 100%;
    }
    .about-video__poster-inner{
      width: 100%;
    }
    .about-video__text {
      bottom: 15px;
    }
    .about-video__text-descr{
      font-size: 11px;
      line-height: 18px;
    }
  }
</style>
