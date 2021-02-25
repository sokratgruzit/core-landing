<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="main-bg">
        <div class="main-bg__inner">
          <img :src="require(`@/assets/img/techBgMain.jpg`)" alt="">
        </div>
      </div>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>Technology</h1>
          </div>
        </div>
      </div>
      <div class="container" data-aos="fade-up">
        <div class="techno_description pB-160">
          <div class="techno_description-left">
            CORE is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its core, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and voting-based governance.
          </div>
          <div class="techno_description-right">
            It is able to attain higher levels of scalability using advanced sharding, along with pipelining, chunking and parallel transaction processing.
            <br>
            <br>
            These technologies have made it possible for the CORE network to be infinitely scalable and to achieve significantly higher throughput and efficiency. CORE is a true multi-chain communication solution that enables protocols such as cross-chain registries and cross-chain computation.
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
  .main-bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 108%;
    padding-top: 108%;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 0;
  }
  .animHead .main-bg{
    opacity: 1;
    transition-delay: .6s;
  }
  .main-bg img{
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 0px;
    left: 0px;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 50s linear infinite;
    animation:spin 50s linear infinite;
  }
  .main-bg__inner{
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 0px;
    transform: translateX(35%) translateY(-55%);
    left: 0px;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  .techno_description-left{
    width: 50%;
    padding-right: 100px;
    font-size: 20px;
    line-height: 30px;
  }
  .techno_description-right{
    width: 50%;
    padding-right: 100px;
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
  }
  .techno_description{
    display: flex;
    width: 100%;
    margin-top: 100px;
  }
  .animHead .token-bg{
    opacity: 1;
    transform: translateY(0px);
  }
  .container{
    position: relative;
    z-index: 20;
    height: 100%;
  }
  .main-video iframe{
    transform: translateY(-40%);
  }
  .main-container__description p{
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .main-container__description .frst-txt{
    color: rgba(255,255,255,.7);
    font-size: 15px;
    line-height: 24px;
    margin-top: auto;
  }
  .main-container__description .scnd-txt{
    color: rgba(255,255,255,1);
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  .animHead p{
    transform: translateY(0px);
    opacity: .8;
    transition-delay: .6s;
  }
  .main-container__description h1{
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
  }
  .left{
    width: 50%;
    position: relative;
    z-index: 5;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  #main{
    position: relative;
    width: 100%;
    background: #00050F;
    z-index: 2;
    overflow: hidden;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    #main{
      min-height: 800px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .main-container__description{
      padding-left: 25px;
    }
    .main-container__description h1{
      font-size: 50px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .techno_description-left,.techno_description-right{
      padding-right: 0px;
      width: 100%;
      margin-top: 50px;
    }
    .techno_description{
      flex-direction: column;
    }
    .main-container__description{
      padding-left: 0px;
    }
    .main-container__description .frst-txt{
      font-size: 12px;
      line-height: 22px;
    }
    .main-container__description .scnd-txt{
      font-size: 16px;
      line-height: 26px;
      margin-top: 30px;
    }
    .right {
      padding-bottom: 60px;
      padding-right: 30px;
    }
    .main-video__container{
      right: -38%;
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
    .scroll-down{
      display: none;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .right{
      width: 100%;
      padding-right: 0px;
      margin-top: auto;
    }
    .left{
      width: 100%;
    }
    .main-container__description{
      flex-direction: column;
    }
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
      right: -100%;
      padding-top: 200%;
      width: 200%;
      transform: translateY(-25%);
    }
    .main-container__description{
      padding: 0px 15px;
      text-align: center;
      bottom: 90px;
    }
    .main-container__description h1{
      margin-top: 115px;
      margin-bottom: 50px;
      text-align: left;
    }
    .main-container__header{
      display: none;
    }
    .token-bg{
      height: 100%;
      object-fit: cover;
    }
    .bottom{
      padding-top: 90%;
    }
    .main-container__description{
      padding: 0px;
    }
    #main{
      min-height: 600px;
    }
    .main-bg{
      width: 150%;
      padding-top: 150%;
    }
    .main-bg__inner{
      transform: translateX(40%) translateY(-47%);
    }
  }
</style>
