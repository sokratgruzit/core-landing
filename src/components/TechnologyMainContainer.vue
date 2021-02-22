<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
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
            Hypercube is a multi-chain PoS Network focused on Interoperability, Scalability and Usability. At its core, it utilizes an AI-enabled Proof of Stake algorithm, multi-layered consensus model and voting-based governance.
          </div>
          <div class="techno_description-right">
            It is able to attain higher levels of scalability using advanced sharding, along with pipelining, chunking and parallel transaction processing.
            <br>
            <br>
            These technologies have made it possible for the Hypercube network to be infinitely scalable and to achieve significantly higher throughput and efficiency. Hypercube is a true multi-chain communication solution that enables protocols such as cross-chain registries and cross-chain computation.
          </div>
        </div>
      </div>
      <div class="container" data-aos="fade-up">
        <div class="techno_description-bottom pB-160 pT-160">
          <h2 class="font-51">The CXRE Token</h2>
          <div class="techno_description-bottom-inner">
            <div class="techno_description-bottom-text">
              The CRXE token is native to the Hypercube platform and allows users to transact with other users on the blockchain, as well as pay for all of the utility fees in the ecosystem. It can be used for governance, staking, transactions, smart contracts and validator rewards on the platform.
            </div>
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
  .techno_description-bottom-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.5);
    width: 640px;
  }
  .techno_description-bottom-inner{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-right: 105px;
    margin-top: 60px;
  }
  .techno_description-bottom{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
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
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-container__header{
      margin-top: 30px;
    }
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
    .right{
      padding-bottom: 60px;
      padding-right: 75px;
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
    .bottom__description-text, .bottom__description-ttl{
      font-size: 10px;
      line-height: 15px;
    }
    .bottom__description-floor {
      margin-bottom: 10px;
    }
    .bottom__description-inner{
      width: 100%;
    }
    .bottom__description{
      padding-left: 15px;
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
    .techno_description-bottom-inner{
      padding-right: 0px;
    }
  }
</style>
