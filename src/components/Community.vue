<template>
  <div class="container" data-aos="fade-up" v-view="visibilityChanged">
    <div class="communityInner">
      <div class="subTtl">
        What makes CORE different
      </div>
      <div class="linksContainer" id="explore">
        <div class="link" v-for="link in itemData" :key="link.id" @click="openPopup(link.id)" @mouseover="hover(link.id)" :class="activeHover == link.id ? 'hover' : ''">
          <div class="txt">{{link.title}}</div>
          <div class="videoContainer">
            <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
            <div class="video" v-html="link.video"></div>
          </div>
        </div>
        <router-link to="/technology" class="link" :class="activeHover == 3 ? 'hover' : ''" @mouseover.native="hover(3)">
          <div class="txt">Technology</div>
          <div class="videoContainer">
            <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
            <div class="video">
              <iframe src="https://iframe.videodelivery.net/912d9ee7a940b1c6cdeabbcb15821e9b?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
            </div>
          </div>
        </router-link>
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
      activeHover: 1
    }
  },
  methods: {
    openPopup (id) {
      this.$store.commit('setCommunity', id)
    },
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 1)
    },
    hover (id) {
      this.activeHover = id
      console.log(this.activeHover)
    }
  }
}
</script>
<style scoped>
  .link:nth-child(1){
    margin-right: 350px;
  }
  .link:nth-child(2){
    margin-left: 0px;
  }
  .link:nth-child(3){
    margin-left: 480px;
  }
  .link .txt{
    font-size: 180px;
    z-index: 3;
    position: relative;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    color: transparent;
    /*perspective: 1000px;*/
  }
  .videoContainer{
    position: absolute;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    left: 0px;
    height: 500px;
    top: -50%;
    overflow: hidden;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
    transform: scale(.7);
  }
  .link.hover .videoContainer{
    opacity: 1;
    transform: scale(1);
    transition-delay: .1s;
  }
  .link{
    position: relative;
    width: fit-content;
    cursor: pointer;
    transform-origin: bottom center;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .link.hover .txt{
    color: #fff;
    /*transform: rotateY(-25deg) scale3d(1.1,1.13,1.1);*/
    transform: scale(1.1);
  }
  .subTtl{
    font-size: 20px;
    display: flex;
    align-items: center;
    color: #FF7152;
  }
  .communityInner{
    position: relative;
    padding-top: 200px;
    padding-bottom: 150px;
    width: 100%;
  }
  .linksContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding-right: 105px;
    padding-top: 180px;
  }
  .videoContainer .video{
    height: 100%;
    width: 100%;
  }
  .videoContainer .video iframe{
    position: relative;
  }
  .gradient{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .subTtl i{
    height: 28px;
    width: 28px;
    background: #0500FF;
    display: flex;
    border-radius: 50%;
    margin-right: 25px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .videoContainer{
      height: 340px;
    }
    .link .txt{
      font-size: 140px;
    }
    .communityInner{
      padding-top: 110px;
    }
    .link:nth-child(3) {
      margin-left: 250px;
    }
    .link:nth-child(2) {
      margin-right: 100px;
    }
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
    .videoContainer{
      height: 240px;
    }
    .link .txt{
      font-size: 90px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .videoContainer{
      height: 180px;
    }
    .link .txt{
      font-size: 70px;
    }
    .link:nth-child(1) {
      margin-right: 200px;
    }
    .link:nth-child(2) {
      margin-left: 90px;
    }
    .link:nth-child(3) {
      margin-left: 180px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .subTtl{
      font-size: 16px;
      line-height: 22px;
    }
    .subTtl i{
      width: 22px;
      height: 22px;
      margin-right: 15px;
    }
    .communityInner {
      padding-top: 65px;
      padding-bottom: 65px;
    }
    .subTtl{
      align-items: end;
    }
    .linksContainer{
      padding-top: 50px;
      padding-right: 0px;
    }
    .link .txt {
      font-size: 50px;
      line-height: 56px;
    }
    .videoContainer{
      height: 170px;
      top: -100%;
      user-select: none;
    }
    .link{
      margin:12px auto!important;
      user-select: none;
      -webkit-user-select: none;
    }
    video{
      user-select: none;
      -webkit-user-select: none;
    }
    .link img{
      user-select: none;
      -webkit-user-select: none;
    }
  }
</style>
