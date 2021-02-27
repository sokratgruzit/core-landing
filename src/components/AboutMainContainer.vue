<template>
  <div>
    <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
      <TopHead/>
      <img :src="require(`@/assets/img/about.png`)" alt="" class="about-bg">
      <div class="container">
        <div class="main-container__description">
          <div class="left">
            <h1>About</h1>
          </div>
          <div class="right">
            <p class="frst-txt">
              NexBank Capital, Inc. is a financial services company which delivers customized institutional, commercial, and mortgage banking services to clients nationwide.
            </p>
            <p class="scnd-txt">
              Our mission is to serve as a trusted partner to our clients by offering tailored, results- oriented solutions that meet their specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--     <div class="download-container__mobile">-->
    <!--       <div class="ttl">Download</div>-->
    <!--       <div class="download-container__mobile-inner">-->
    <!--         <a href="##">-->
    <!--           <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--             <path d="M26 47.9999C27.6655 47.9999 29.118 46.6003 29.118 44.9954V37.9787H31.2C32.4494 37.9787 33.282 37.1761 33.282 35.9725V15.9316H8.31787V35.9727C8.31787 37.1764 9.15067 37.9788 10.3999 37.9788H12.482V44.9956C12.482 46.6005 13.9342 48.0001 15.6001 48.0001C17.2655 48.0001 18.7179 46.6005 18.7179 44.9956V37.9788H22.882V44.9956C22.8819 46.6004 24.3344 47.9999 26 47.9999Z" fill="white"/>-->
    <!--             <path d="M38.4823 35.9727C40.1479 35.9727 41.6001 34.5733 41.6001 32.9682V18.9348C41.6001 17.3384 40.1479 15.9316 38.4823 15.9316C36.8166 15.9316 35.3643 17.3384 35.3643 18.9348V32.9682C35.3643 34.5731 36.8164 35.9727 38.4823 35.9727Z" fill="white"/>-->
    <!--             <path d="M3.11776 35.9727C4.78352 35.9727 6.23584 34.5733 6.23584 32.9682V18.9348C6.23584 17.3384 4.78368 15.9316 3.11776 15.9316C1.45216 15.9316 0 17.3384 0 18.9348V32.9682C0 34.5731 1.45216 35.9727 3.11776 35.9727Z" fill="white"/>-->
    <!--             <path d="M30.7835 0.302723C30.3672 -0.100908 29.7475 -0.100908 29.3313 0.302723L26.5389 2.98446L26.41 3.10844C24.7542 2.3095 22.8978 1.91052 20.8305 1.90667C20.8203 1.90667 20.8103 1.90635 20.8002 1.90635H20.7999C20.7894 1.90635 20.7798 1.90667 20.7693 1.90667C18.7021 1.91052 16.8457 2.3095 15.19 3.10844L15.0609 2.98446L12.2686 0.302723C11.852 -0.100908 11.2327 -0.100908 10.8164 0.302723C10.3999 0.704111 10.3999 1.29979 10.8164 1.70085L13.5176 4.30411C12.6473 4.86407 11.858 5.54928 11.1717 6.333C9.5285 8.20972 8.48044 10.6522 8.33632 13.2985C8.33499 13.3261 8.33217 13.3533 8.33084 13.3808C8.32203 13.561 8.31787 13.7422 8.31787 13.924H33.282C33.282 13.7422 33.2775 13.561 33.2691 13.3808C33.2677 13.3533 33.2649 13.3261 33.2632 13.2985C33.1195 10.6522 32.0711 8.20956 30.4279 6.33316C29.7419 5.54944 28.9523 4.86423 28.0819 4.30427L30.7835 1.70101C31.2 1.29979 31.2 0.704111 30.7835 0.302723ZM15.5961 10.4212C14.7347 10.4212 14.0364 9.74832 14.0364 8.91831C14.0364 8.08831 14.7347 7.41543 15.5961 7.41543C16.4575 7.41543 17.1558 8.08831 17.1558 8.91831C17.1558 9.74832 16.4575 10.4212 15.5961 10.4212ZM26.0038 10.4212C25.1424 10.4212 24.4441 9.74832 24.4441 8.91831C24.4441 8.08831 25.1424 7.41543 26.0038 7.41543C26.8652 7.41543 27.5635 8.08831 27.5635 8.91831C27.5635 9.74832 26.8652 10.4212 26.0038 10.4212Z" fill="white"/>-->
    <!--           </svg>-->
    <!--         </a>-->
    <!--         <a href="##">-->
    <!--           <svg width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--             <path d="M13.7617 48C6.50369 47.9589 0.5 33.3759 0.5 25.9491C0.5 13.8175 9.74623 11.1615 13.3097 11.1615C14.9155 11.1615 16.6303 11.7822 18.1427 12.3315C19.2004 12.7147 20.2942 13.1102 20.9026 13.1102C21.2667 13.1102 22.1248 12.7738 22.8824 12.4785C24.4981 11.8454 26.5086 11.0586 28.8498 11.0586C28.854 11.0586 28.8596 11.0586 28.8637 11.0586C30.6119 11.0586 35.9125 11.4362 39.0992 16.1466L39.8456 17.2507L38.7713 18.0486C37.2366 19.1884 34.4363 21.2676 34.4363 25.3861C34.4363 30.264 37.6077 32.14 39.1313 33.0422C39.8038 33.4405 40.5 33.8511 40.5 34.7492C40.5 35.3356 35.745 47.9273 28.84 47.9273C27.1504 47.9273 25.9561 47.4274 24.9026 46.9866C23.8367 46.5402 22.9172 46.1558 21.3978 46.1558C20.6276 46.1558 19.6537 46.5142 18.6226 46.8946C17.2136 47.4122 15.6188 48 13.8091 48H13.7617Z" fill="white"/>-->
    <!--             <path d="M29.5815 0C29.7613 6.38212 25.1241 10.8097 20.4924 10.5321C19.7292 5.43891 25.1236 0 29.5815 0Z" fill="white"/>-->
    <!--           </svg>-->
    <!--         </a>-->
    <!--       </div>-->
    <!--     </div>-->
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
  .about-bg{
    position: absolute;
    top: 0px;
    right: 0px;
    width: calc(100% + 210px);
    z-index: 1;
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .about-bg{
    opacity: 1;
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
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    padding-left: 80px;
    z-index: 5;
    display: flex;
  }
  .left{
    width: 50%;
    position: relative;
    z-index: 5;
  }
  .right{
    width: 50%;
    display: flex;
    flex-direction: column;
    padding-bottom: 160px;
    padding-right: 200px;
    position: relative;
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
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.05);
    background: #00050F;
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
      padding-bottom: 100px;
      padding-right: 75px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
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
      margin-bottom: 10px;
    }
    .main-container__header{
      display: none;
    }
    #main {
      min-height: 100vh;
    }
    .about-bg{
      width: 100%;
    }
  }
</style>
