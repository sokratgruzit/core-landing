<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <div class="token-bg__outer">
        <img v-prlx="{ speed: 0.1 }" :src="require(`@/assets/img/tokenomics_bg.jpg`)" alt="" class="token-bg">
      </div>
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>Tokenomics</h1>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__description-inner">
          <div class="bottom__description">
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Name</div>
                <div class="bottom__description-text">CORE Multi-Chain — <br>
                  Cryptographic Object Resources Engine</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Decimals</div>
                <div class="bottom__description-text">18</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Native Crypto Symbol</div>
                <div class="bottom__description-text">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#FF7152"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42413 8.63933C7.98389 7.8985 8.71722 7.30665 9.55953 6.91592C10.4019 6.52519 11.3273 6.34756 12.2544 6.39867C13.1816 6.44977 14.0819 6.72805 14.8762 7.209C15.6704 7.68994 16.3343 8.3588 16.8092 9.15667L17.2194 8.92877L17.9031 8.52766C17.2898 7.49572 16.4186 6.64099 15.3752 6.04736C14.3318 5.45373 13.1519 5.1416 11.9514 5.1416C10.751 5.1416 9.57112 5.45373 8.52769 6.04736C7.48426 6.64099 6.61311 7.49572 5.99973 8.52766L5.66016 9.06095L6.20257 9.3823L8.30156 10.6289C7.95824 11.4924 7.93434 12.45 8.23416 13.3295C8.53399 14.209 9.13785 14.9526 9.9371 15.4266C10.7363 15.9005 11.6785 16.0737 12.594 15.9149C13.5096 15.756 14.3383 15.2757 14.9313 14.5603L16.4605 15.4719C15.9006 16.2134 15.1668 16.8057 14.3239 17.1965C13.4809 17.5873 12.5548 17.7646 11.6271 17.7128C10.6994 17.661 9.79871 17.3817 9.00451 16.8994C8.21032 16.4172 7.54702 15.7469 7.07316 14.9477L5.99062 15.5881C6.604 16.6201 7.47515 17.4748 8.51858 18.0684C9.562 18.662 10.7418 18.9742 11.9423 18.9742C13.1428 18.9742 14.3226 18.662 15.3661 18.0684C16.4095 17.4748 17.2806 16.6201 17.894 15.5881L18.2177 15.0457L17.6752 14.7244L15.9523 13.7011L14.4664 12.8442C14.2855 13.42 13.913 13.9166 13.4108 14.2514C12.9086 14.5863 12.307 14.7392 11.7059 14.6848C11.1048 14.6304 10.5404 14.3719 10.1065 13.9523C9.67257 13.5328 9.39531 12.9774 9.32076 12.3784C9.2462 11.7795 9.37884 11.173 9.69663 10.6599C10.0144 10.1468 10.4982 9.75781 11.0677 9.5577C11.6371 9.35758 12.2579 9.35834 12.8268 9.55985C13.3958 9.76136 13.8786 10.1515 14.1952 10.6654L15.2868 10.0364C14.9661 9.50448 14.5231 9.05682 13.9945 8.73063C13.4659 8.40445 12.8671 8.20916 12.2479 8.16102C11.6287 8.11287 11.0069 8.21325 10.4343 8.45381C9.86163 8.69438 9.35471 9.06817 8.95564 9.54411L7.42413 8.63933Z" fill="white"/>
                  </svg>
                  CMCX
                </div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Initial Price</div>
                <div class="bottom__description-text">0.005 USDT</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Consensus Protocol</div>
                <div class="bottom__description-text">Practical Proof of Stake</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Role of Token</div>
                <div class="bottom__description-text">Utility</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Total Supply (Genesis)</div>
                <div class="bottom__description-text">20,000,000,000 CMCX</div>
              </div>
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Ofiicial Website</div>
                <div class="bottom__description-text">coremultichain.com</div>
              </div>
            </div>
            <div class="bottom__description-floor">
              <div class="bottom__description-item">
                <div class="bottom__description-ttl">Pre-mined Reserve</div>
                <div class="bottom__description-text">6,000,000,000 CMCX</div>
              </div>
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
  .bottom__description-item:nth-child(2){
    padding-left: 100px;
  }
  .bottom__description-text{
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  .bottom__description-text svg{
    margin-right: 10px;
  }
  .bottom__description-ttl{
    font-size: 15px;
    color: #FF7152;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .bottom__description-item{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .bottom__description-floor{
    display: flex;
    margin-bottom: 30px;
  }
  .bottom__description{
    position: relative;
    z-index: 3;
    width: 650px;
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 50px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .bottom__description{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .2s;
  }
  .bottom__description-inner{
    height: 100%;
    width: calc(100% + 210px);
    display: flex;
    justify-content: center;
  }
  .token-bg{
    width: 100%;
    height: 120%;
  }
  .token-bg__outer{
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% - 200px);
    z-index: 1;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .token-bg__outer:after{
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
  .token-bg__outer:before{
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
  .animHead .token-bg__outer{
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
  .bottom{
    position: relative;
    padding-top: 230px;
    display: flex;
    width: 100%;
  }
  .main-container__header .left{
    font-size: 20px;
    line-height: 28px;
  }
  #main{
    position: relative;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.05);
    background: #00050F;
    z-index: 2;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    #main{
      min-height: 800px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .bottom__description-item:nth-child(2) {
      padding-left: 40px;
    }
    .bottom__description{
      width: 450px;
    }
    .main-container__description{
      padding-left: 25px;
    }
    .main-container__description h1{
      font-size: 50px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .bottom{
      padding-top: 100px;
    }
    .bottom__description-text,.bottom__description-ttl{
      font-size: 12px;
      line-height: 20px;
    }
    .bottom__description-item{
      width: 45%;
    }
    .bottom__description-floor {
      margin-bottom: 15px;
    }
    .main-container__description{
      padding-left: 0px;
    }
    .bottom__description{
      width: 100%;
      padding-left: 40px;
      margin-bottom: 20px;
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
    .token-bg__outer{
      width: 100%;
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
    .main-container__description{
      padding: 0px;
    }
    #main{
      min-height: 600px;
    }
  }
</style>
