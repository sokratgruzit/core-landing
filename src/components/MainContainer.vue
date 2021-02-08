<template>
  <div>
     <div id="main" class="outer" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
    <div class="main-video__container">
      <div class="overlay"></div>
      <img :src="require(`@/assets/img/gradient.png`)" alt="" class="gradient">
<!--      <video muted loop autoplay class="main-video">-->
<!--        <source :src="require(`@/assets/img/Main.mp4`)" type="video/mp4">-->
<!--&lt;!&ndash;        <source :src="require(`@/assets/img/Main.ogg`)" type="video/ogg; codecs=theora, vorbis">&ndash;&gt;-->
<!--      </video>-->
      <div class="main-video">
     <iframe src="https://iframe.videodelivery.net/1b63ec0c3bd09c163f83a515e248e7c0?muted=true&preload=true&loop=true&autoplay=true&controls=false" style="border: none; position: absolute; top: 0; height: 100%; width: 100%;"  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen="true"></iframe>
      </div>
    </div>
    <div class="container">
      <div class="main-container__header">
        <div class="left" @click="test">Decentralized <br> Blockchain Platform</div>
        <div class="follow-container">
          <div class="ttl">Follow us</div>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5488 20V10.8777H14.6096L15.0688 7.32156H11.5488V5.05147C11.5488 4.0222 11.8335 3.32076 13.3111 3.32076L15.1926 3.31999V0.13923C14.8673 0.0969453 13.7503 0 12.4503 0C9.73573 0 7.87727 1.65697 7.87727 4.69927V7.32156H4.80725V10.8777H7.87727V20H11.5488Z" fill="white"/>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2.79875C19.2563 3.125 18.4637 3.34125 17.6375 3.44625C18.4875 2.93875 19.1363 2.14125 19.4412 1.18C18.6488 1.6525 17.7738 1.98625 16.8412 2.1725C16.0887 1.37125 15.0162 0.875 13.8462 0.875C11.5763 0.875 9.74875 2.7175 9.74875 4.97625C9.74875 5.30125 9.77625 5.61375 9.84375 5.91125C6.435 5.745 3.41875 4.11125 1.3925 1.6225C1.03875 2.23625 0.83125 2.93875 0.83125 3.695C0.83125 5.115 1.5625 6.37375 2.6525 7.1025C1.99375 7.09 1.3475 6.89875 0.8 6.5975C0.8 6.61 0.8 6.62625 0.8 6.6425C0.8 8.635 2.22125 10.29 4.085 10.6712C3.75125 10.7625 3.3875 10.8062 3.01 10.8062C2.7475 10.8062 2.4825 10.7913 2.23375 10.7362C2.765 12.36 4.2725 13.5538 6.065 13.5925C4.67 14.6838 2.89875 15.3412 0.98125 15.3412C0.645 15.3412 0.3225 15.3263 0 15.285C1.81625 16.4563 3.96875 17.125 6.29 17.125C13.835 17.125 17.96 10.875 17.96 5.4575C17.96 5.27625 17.9538 5.10125 17.945 4.9275C18.7588 4.35 19.4425 3.62875 20 2.79875Z" fill="white"/>
            </svg>
          </a>
          <a href="##">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99875 0C4.4775 0 0 4.59056 0 10.2534C0 14.7827 2.865 18.6252 6.84 19.9822C7.34 20.0767 7.5225 19.7601 7.5225 19.4882C7.5225 19.2444 7.51375 18.5997 7.50875 17.7444C4.7275 18.3635 4.14 16.3695 4.14 16.3695C3.68625 15.1849 3.03 14.8695 3.03 14.8695C2.12125 14.2338 3.0975 14.2466 3.0975 14.2466C4.10125 14.3193 4.62875 15.3036 4.62875 15.3036C5.52125 16.8699 6.97 16.418 7.54 16.155C7.63 15.4925 7.88875 15.0406 8.175 14.784C5.955 14.5249 3.62 13.6453 3.62 9.71728C3.62 8.59773 4.01 7.68242 4.65 6.96499C4.54625 6.70584 4.20375 5.66288 4.7475 4.25227C4.7475 4.25227 5.5875 3.97653 7.4975 5.30289C8.295 5.07566 9.15 4.96204 10.0013 4.95821C10.85 4.96332 11.7062 5.07566 12.505 5.30417C14.4137 3.97781 15.2525 4.25355 15.2525 4.25355C15.7975 5.66544 15.455 6.70712 15.3525 6.96627C15.9937 7.6837 16.38 8.599 16.38 9.71856C16.38 13.6568 14.0425 14.5236 11.815 14.7776C12.1737 15.0942 12.4937 15.7197 12.4937 16.6759C12.4937 18.0469 12.4812 19.1524 12.4812 19.4882C12.4812 19.7626 12.6613 20.0818 13.1687 19.9809C17.1375 18.6227 20 14.7815 20 10.2534C20 4.59056 15.5225 0 9.99875 0Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="main-container__description">
        <h1>Core</h1>
        <p>
          A Virtual World <br>
          of Interconnected Blockchains
        </p>
      </div>
      <div class="scroll-down">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.809 16.6354L39.1666 16.675V33.7813L11.8836 6.49828L6.49829 11.8836L33.7813 39.1666L16.675 39.1666L16.6354 46.809H46.809V16.6354Z" fill="#0500FF"/>
        </svg>
      </div>
    </div>
  </div>
     <div class="download-container__mobile">
       <div class="ttl">Download</div>
       <div class="download-container__mobile-inner">
         <a href="##">
           <svg width="42" height="48" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M26 47.9999C27.6655 47.9999 29.118 46.6003 29.118 44.9954V37.9787H31.2C32.4494 37.9787 33.282 37.1761 33.282 35.9725V15.9316H8.31787V35.9727C8.31787 37.1764 9.15067 37.9788 10.3999 37.9788H12.482V44.9956C12.482 46.6005 13.9342 48.0001 15.6001 48.0001C17.2655 48.0001 18.7179 46.6005 18.7179 44.9956V37.9788H22.882V44.9956C22.8819 46.6004 24.3344 47.9999 26 47.9999Z" fill="white"/>
             <path d="M38.4823 35.9727C40.1479 35.9727 41.6001 34.5733 41.6001 32.9682V18.9348C41.6001 17.3384 40.1479 15.9316 38.4823 15.9316C36.8166 15.9316 35.3643 17.3384 35.3643 18.9348V32.9682C35.3643 34.5731 36.8164 35.9727 38.4823 35.9727Z" fill="white"/>
             <path d="M3.11776 35.9727C4.78352 35.9727 6.23584 34.5733 6.23584 32.9682V18.9348C6.23584 17.3384 4.78368 15.9316 3.11776 15.9316C1.45216 15.9316 0 17.3384 0 18.9348V32.9682C0 34.5731 1.45216 35.9727 3.11776 35.9727Z" fill="white"/>
             <path d="M30.7835 0.302723C30.3672 -0.100908 29.7475 -0.100908 29.3313 0.302723L26.5389 2.98446L26.41 3.10844C24.7542 2.3095 22.8978 1.91052 20.8305 1.90667C20.8203 1.90667 20.8103 1.90635 20.8002 1.90635H20.7999C20.7894 1.90635 20.7798 1.90667 20.7693 1.90667C18.7021 1.91052 16.8457 2.3095 15.19 3.10844L15.0609 2.98446L12.2686 0.302723C11.852 -0.100908 11.2327 -0.100908 10.8164 0.302723C10.3999 0.704111 10.3999 1.29979 10.8164 1.70085L13.5176 4.30411C12.6473 4.86407 11.858 5.54928 11.1717 6.333C9.5285 8.20972 8.48044 10.6522 8.33632 13.2985C8.33499 13.3261 8.33217 13.3533 8.33084 13.3808C8.32203 13.561 8.31787 13.7422 8.31787 13.924H33.282C33.282 13.7422 33.2775 13.561 33.2691 13.3808C33.2677 13.3533 33.2649 13.3261 33.2632 13.2985C33.1195 10.6522 32.0711 8.20956 30.4279 6.33316C29.7419 5.54944 28.9523 4.86423 28.0819 4.30427L30.7835 1.70101C31.2 1.29979 31.2 0.704111 30.7835 0.302723ZM15.5961 10.4212C14.7347 10.4212 14.0364 9.74832 14.0364 8.91831C14.0364 8.08831 14.7347 7.41543 15.5961 7.41543C16.4575 7.41543 17.1558 8.08831 17.1558 8.91831C17.1558 9.74832 16.4575 10.4212 15.5961 10.4212ZM26.0038 10.4212C25.1424 10.4212 24.4441 9.74832 24.4441 8.91831C24.4441 8.08831 25.1424 7.41543 26.0038 7.41543C26.8652 7.41543 27.5635 8.08831 27.5635 8.91831C27.5635 9.74832 26.8652 10.4212 26.0038 10.4212Z" fill="white"/>
           </svg>
         </a>
         <a href="##">
           <svg width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.7617 48C6.50369 47.9589 0.5 33.3759 0.5 25.9491C0.5 13.8175 9.74623 11.1615 13.3097 11.1615C14.9155 11.1615 16.6303 11.7822 18.1427 12.3315C19.2004 12.7147 20.2942 13.1102 20.9026 13.1102C21.2667 13.1102 22.1248 12.7738 22.8824 12.4785C24.4981 11.8454 26.5086 11.0586 28.8498 11.0586C28.854 11.0586 28.8596 11.0586 28.8637 11.0586C30.6119 11.0586 35.9125 11.4362 39.0992 16.1466L39.8456 17.2507L38.7713 18.0486C37.2366 19.1884 34.4363 21.2676 34.4363 25.3861C34.4363 30.264 37.6077 32.14 39.1313 33.0422C39.8038 33.4405 40.5 33.8511 40.5 34.7492C40.5 35.3356 35.745 47.9273 28.84 47.9273C27.1504 47.9273 25.9561 47.4274 24.9026 46.9866C23.8367 46.5402 22.9172 46.1558 21.3978 46.1558C20.6276 46.1558 19.6537 46.5142 18.6226 46.8946C17.2136 47.4122 15.6188 48 13.8091 48H13.7617Z" fill="white"/>
             <path d="M29.5815 0C29.7613 6.38212 25.1241 10.8097 20.4924 10.5321C19.7292 5.43891 25.1236 0 29.5815 0Z" fill="white"/>
           </svg>
         </a>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'MainContainer',
  data () {
    return {
      firstAnimation: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.firstAnimation = true
    }, 1200)
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
    right: -15%;
    padding-top: 75%;
    width: 75%;
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
    transition-delay: .4s;
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
    font-size: 72px;
    line-height: 80px;
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
    font-size: 260px;
    transform: translateY(10px);
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    text-transform: uppercase;
  }
  .animHead h1{
    transform: translateY(0px);
    opacity: 1;
    transition-delay: .5s;
  }
  .main-container__description{
    position: absolute;
    left: 0px;
    bottom: 85px;
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
  .follow-container{
    display: flex;
    align-items: center;
  }
  #main{
    position: relative;
    height: 100vh;
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,.05);
    background: #00050F;
    overflow: hidden;
  }
  .main-container__header{
    position: relative;
    z-index: 20;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 75px;
    opacity: 0;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .animHead .main-container__header{
    opacity: 1;
    transition-delay: .4s;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .main-video__container {
      right: -15%;
      padding-top: 75%;
      width: 75%;
    }
    .main-container__description h1 {
      font-size: 210px;
    }
    .main-container__description p{
      font-size: 46px;
      line-height: 54px;
    }
    .main-container__description{
      bottom: 30px;
      padding-left: 40px;
    }
    .main-container__header{
      margin-top: 30px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){}
  /*Ipad 768*/
  @media (max-width: 1023px){
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
    #main{
      border-bottom: 0px;
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
    }
    .main-container__description h1{
      margin-bottom: 10px;
    }
  }
</style>
