<template>
  <div class="use-cases__container">
    <div class="use-cases__bg"></div>
      <div class="container">
        <div class="use-cases__inner">
        <div class="left" data-aos="fade-up">
          <h3>Use Cases</h3>
        </div>
        <div class="use-cases__slider-container">
          <div class="use-cases__slider-title">
            Apart from a new form of digital money, blockchain technology can be used for a multitude of applications. It can be used to keep record of any type of value that can be represented digitally, and serves as a decentralised database of records that keeps track of all the value transactions between the users on a blockchain network. Let's take a look at some of the use cases of blockchain technology.
          </div>
          <div class="use-cases__slider-outer">
            <swiper class="use-cases__slider" ref="use-cases__slider" :options="swiperOptions">
              <swiper-slide v-for="item in itemData" :key="item.id">
                <div class="use-cases__slider-item">
                  <div class="use-cases__slider-item-title">{{item.title}}</div>
                  <div class="use-cases__slider-text">{{item.text}}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="slide-nav" data-aos="fade-up">
            <div class="prev">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.24 -6.73927e-06L19.08 3.81889L10.44 12.3228L38 12.3228L38 17.6772L10.44 17.6772L19.08 26.1811L15.24 30L6.55671e-07 15L15.24 -6.73927e-06Z" fill="#0500FF"/>
              </svg>
            </div>
            <div class="next">
              <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.76 -6.73927e-06L18.92 3.81889L27.56 12.3228L-7.72693e-07 12.3228L-5.38648e-07 17.6772L27.56 17.6772L18.92 26.1811L22.76 30L38 15L22.76 -6.73927e-06Z" fill="#0500FF"/>
              </svg>
            </div>
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
      swiperOptions: {
        slidesPerView: 'auto',
        speed: 800,
        spaceBetween: 0,
        watchOverflow: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .use-cases__slider-item{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 80px;
  }
  .use-cases__slider-text{
    margin-bottom: 70px;
    margin-top: 15px;
    color: rgba(255,255,255,.5);
    font-size: 15px;
    line-height: 24px;
  }
  .use-cases__slider-item-title{
    margin-top: auto;
    color: #FF7152;
    font-size: 15px;
    line-height: 24px;
  }
  .use-cases__slider-container{
    width: 55%;
    display: flex;
    flex-direction: column;
  }
  .use-cases__inner{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .use-cases__container{
    position: relative;
  }
  .use-cases__slider-title{
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  .use-cases__bg{
    position: absolute;
    top: 0px;
    right: 0px;
    background: #010918;
    width: calc(100% + 210px);
    height: 100%;
  }
  h3{
    font-size: 140px;
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    white-space: nowrap;
    -webkit-text-stroke: .8px rgba(255, 255, 255, .2);
    color: transparent;
    text-transform: uppercase;
    transform: rotate(180deg);
  }
  .slide-nav{
    display: flex;
    margin-bottom: 60px;
  }
  .slide-nav path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .slide-nav div:hover path{
    fill: #ff7152;
  }
  .slide-nav div:hover svg{
    fill: #ff7152!important;
  }
  .slide-nav div:not(.swiper-button-disabled) svg{
    fill: #0500FF;
  }
  .prev{
    margin-right: 15px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .prev:hover{
    transform: translateX(-10px);
  }
  .next{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    cursor: pointer;
  }
  .next:hover{
    transform: translateX(10px);
  }
  .swiper-button-disabled{
    pointer-events: none;
    opacity: .5;
  }
  .use-cases__slider-outer{
    height: 100%;
    display: flex;
    border-top: 1px solid rgba(255,255,255,.05);
    padding-top: 40px;
    margin-top: 40px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .use-cases__slider-item{
      padding-right: 0px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .use-cases__slider-outer{
      height: 400px;
    }
    .slide-nav {
      margin-bottom: 30px;
      margin-top: 20px;
    }
    .use-cases__slider-container {
      width: calc(100% - 120px);
    }
    .use-cases__slider-text {
      margin-bottom: 40px;
      margin-top: 15px;
      font-size: 12px;
      line-height: 20px;
      padding-right: 10px;
    }
    .use-cases__slider-outer{
      padding-top: 20px;
      margin-top: 20px;
    }
    .use-cases__slider-title{
      margin-top: 15px;
      font-size: 12px;
      line-height: 20px;
    }
    h3{
      font-size: 80px;
    }
  }
</style>
