<template>
  <div class="container" data-aos="fade-up" v-view="visibilityChanged">
    <div class="communityInner">
      <div class="subTtl">
        <i></i>
        What makes our product special
      </div>
      <div class="linksContainer" id="explore">
        <div class="link" v-for="link in itemData" :key="link.id" data-aos="fade-up" @click="openPopup(link.id)">
          <div class="txt">{{link.title}}</div>
          <div class="videoContainer">
            <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
            <video muted loop autoplay>
              <source :src="require(`@/assets/img/community/${link.video}`)" type="video/mp4">
            </video>
          </div>
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
    }
  },
  methods: {
    openPopup (id) {
      this.$store.commit('setCommunity', id)
    },
    visibilityChanged () {
      this.$store.commit('setMenuStatus', 1)
    }
  }
}
</script>
<style scoped>
  .link:nth-child(2){
    margin-left: 240px;
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
  .link:hover .videoContainer{
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
  .link:hover .txt{
    color: #fff;
    /*transform: rotateY(-25deg) scale3d(1.1,1.13,1.1);*/
    transform: scale(1.1);
  }
  .subTtl{
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
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
    padding-top: 180px;
  }
  .videoContainer video{
     height: 100%;
  }
  .gradient{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
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
      height: 350px;
    }
    .link .txt{
      font-size: 140px;
    }
    .communityInner{
      padding-top: 110px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .link .txt{
      font-size: 70px;
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
