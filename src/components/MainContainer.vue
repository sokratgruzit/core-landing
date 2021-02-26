<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="main-video__container" >
        <div class="overlay"></div>
        <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
        <!--      <video muted loop autoplay class="main-video">-->
        <!--        <source :src="require(`@/assets/img/Main.mp4`)" type="video/mp4">-->
        <!--&lt;!&ndash;        <source :src="require(`@/assets/img/Main.ogg`)" type="video/ogg; codecs=theora, vorbis">&ndash;&gt;-->
        <!--      </video>-->
        <div class="main-video">
          <iframe src="https://iframe.videodelivery.net/0999a83bd18ba4ebe1cd10136b7963fb?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
        </div>
      </div>
      <div class="container">
        <div class="main-container__description">
          <h1>Core</h1>
          <p>
            A Virtual World <br>
            of Interconnected Blockchains
          </p>
        </div>
<!--        <div class="scroll-down">-->
<!--          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--            <path d="M46.809 16.6354L39.1666 16.675V33.7813L11.8836 6.49828L6.49829 11.8836L33.7813 39.1666L16.675 39.1666L16.6354 46.809H46.809V16.6354Z" fill="#0500FF"/>-->
<!--          </svg>-->
<!--        </div>-->
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
    },
    test () {
      this.$store.commit('setStart', true)
    }
  }
}
</script>
<style scoped>
  .main-video{
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .main-video iframe{
    transform: translateY(-40%);
  }
  .download-container__mobile{
    display: none;
  }
  .main-video__container{
    position: absolute;
    top: 0%;
    right: -38%;
    padding-top: 50%;
    width: 100%;
    transform: translateY(-40%);
  }
  .main-video__container video{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .animHead .main-video__container{
    transform: scale(1);
    opacity: 1;
    transition-delay: 1.5s;
  }
  .main-video__container{
    opacity: 0;
    transform: scale(.8);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .gradient{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 3;
    transform: translateY(-40%);
  }
  .scroll-down{
    position: absolute;
    z-index: 20;
    bottom: 90px;
    right: 80px;
    cursor: pointer;
  }
  .main-container__description p{
    font-size: 36px;
    line-height: 48px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead p{
    transform: translateY(0px);
    opacity: .8;
    transition-delay: .6s;
  }
  .main-container__description h1{
    font-size: 180px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    text-transform: uppercase;
    color: #FF7152;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding-left: 80px;
    z-index: 5;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  .follow-container a:hover path{
    fill: #ff7152;
  }
  .follow-container a path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .follow-container .ttl{
    font-size: 20px;
  }
  .follow-container a{
    margin-left: 15px;
  }
  #main{
    position: relative;
    height: 580px;
    width: 100%;
    background: #00050F;
    overflow: hidden;
  }
  #main > .container{
    flex-direction: column;
    height: 100%;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-container__description p{
      font-size: 46px;
      line-height: 54px;
    }
    .main-container__description{
      padding-left: 40px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){}
  /*Ipad 768*/
  @media (max-width: 1023px){
    .main-container__description{
      padding-left: 25px;
    }
    .main-video__container{
      right: -50%;
      padding-top: 130%;
      width: 130%;
    }
    .main-container__header .left {
      font-size: 13px;
      line-height: 22px;
    }
    .main-container__description p {
      font-size: 32px;
      line-height: 40px;
    }
    .main-container__description h1{
      font-size: 96px;
    }
    .scroll-down{
      display: none;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .download-container__mobile-inner a{
      margin: 0px 15px;
    }
    .download-container__mobile .ttl{
      font-size: 16px;
      color:  #fff;
      opacity: .6;
      margin-bottom: 25px;
    }
    .download-container__mobile{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 65px 0px;
      border-bottom: 1px solid rgba(255,255,255,.05);
    }
    .main-video__container{
      right: -80%;
      padding-top: 200%;
      width: 200%;
      transform: translateY(-25%);
    }
    .main-container__description{
      padding: 0px 15px;
      text-align: center;
      bottom: 30px;
    }
    .main-container__description h1{
      margin-bottom: 10px;
    }
    .main-container__header{
      display: none;
    }
  }
</style>
