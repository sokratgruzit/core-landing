<template>
  <div class="statistic-container">
    <div class="container">
      <div class="left">
        <h3 class="font-51" data-aos="fade-up">
          Our Roadmap
        </h3>
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
      <div class="right" data-aos="fade-up">
        <swiper class="statisctic-slider" ref="statisctic-slider" :options="swiperOptions">
          <swiper-slide v-for="stat in statData" :key="stat.id">
            <div class="line"><span></span></div>
            <div class="statisctic-slider__name">
              <span v-html="stat.name"></span>
            </div>
            <div class="statisctic-slider__middle">
              <img :src="require(`@/assets/img/stat.png`)" alt="" class="statisctic-slider__image">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="chart-container">
              <div class="chart-container__left">
                <div class="lft-link">
                  <router-link to="/roadmap" class="chart__link">Full Roadmap</router-link>
                </div>
                <div class="btm-link">
                  <router-link to="/tokenomics" class="chart__link">Explore Tokenomics</router-link>
                </div>
                <div class="chart-container__inner">
                  <div class="chart__img">
                    <img :src="require(`@/assets/img/chart.png`)" alt="">
                  </div>
                  <img :src="require(`@/assets/img/gradientChart.png`)" alt="" class="chart__imgGr">
                  <div id="chart">
                    <apexchart type="radialBar" height="380" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
              <div class="chart-container__right">
                <div class="chart-container__description total">
                  <div class="text descr">Total Supply</div>
                  <div class="title descr">20,000,000,000 CMCX</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #0500FF"></div>
                  <div class="title descr">Reserve</div>
                  <div class="text descr">6,000,000,000 CMCX (30%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #504DFF"></div>
                  <div class="title descr">Seed Round (Private Founders)</div>
                  <div class="text descr">4,000,000,0000 CMCX (20%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #9B99FF"></div>
                  <div class="title descr">IEO</div>
                  <div class="text descr">4,000,000,0000 CMCX (20%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #FFBB95"></div>
                  <div class="title descr">Ecosystem Rewards</div>
                  <div class="text descr">2,000,000,0000 CMCX (10%)</div>
                </div>
              </div>
              <div class="chart-container__right">
                <div class="chart-container__description">
                  <div class="color" style="background: #FF8D4D"></div>
                  <div class="title descr">Marketing & Operations</div>
                  <div class="text descr">1,000,000,0000 CMCX (10%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #E2DD5D"></div>
                  <div class="title descr">Advisory Board</div>
                  <div class="text descr">600,000,0000 CMCX (3%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #4ECB6A"></div>
                  <div class="title descr">Strategic Acquisitions</div>
                  <div class="text descr">400,000,0000 CMCX (2%)</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #99FFB0"></div>
                  <div class="title descr">Team</div>
                  <div class="text descr">2,000,000,0000 CMCX (10%)</div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    statData: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        speed: 800,
        spaceBetween: 0,
        freeMode: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
      series: [30, 20, 20, 10, 10, 6, 4, 6],
      chartOptions: {
        chart: {
          type: 'radialBar'
        },
        colors: ['#0500FF', '#817EFF', '#D5D5FF', '#FFBB95', '#FF8D4D', '#E2DD5D', '#4ECB6A', '#99FFB0'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '0%'
            },
            track: {
              background: 'transparent',
              margin: 12
            },
            dataLabels: {
              show: false
            }
          }
        }
      }
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  .chart__link{
    position: relative;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .chart__link:after{
    position: absolute;
    bottom: -3px;
    width: 100%;
    height: 2px;
    content: '';
    background: #0500FF;
    left: 0px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .chart__link:hover:after{
    transform: scaleX(0);
  }
  .chart__link:hover{
    color: #ff7152;
  }
  .btm-link{
    position: absolute;
    bottom: 5px;
    left: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  .lft-link{
    position: absolute;
    top: 0px;
    left: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 2;
  }
  .chart-container__description.total{
    position: absolute;
    left: 0px;
    top: -20px;
    padding: 0px;
  }
  .chart-container__description.total div{
    font-size: 20px;
    line-height: 30px;
  }
  .container{
    flex-direction: column;
  }
  .chart-container__description{
    margin: 15px 0px;
    position: relative;
    padding: 0px 50px;
  }
  .chart-container__right{
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .statistic-container{
    padding-bottom: 160px;
  }
  .statisctic-slider .swiper-slide:nth-child(odd) .line span{
    background: rgb(155,153,255);
    background: linear-gradient(357deg, rgba(155,153,255,0) 0%, rgba(155,153,255,1) 100%);
  }
  .statisctic-slider .swiper-slide:nth-child(even) .line span{
    background: rgb(155,153,255);
    background: linear-gradient(357deg, rgba(155,153,255,1) 0%, rgba(155,153,255,0) 100%);
  }
  .line span{
    background: red;
    width: 1px;
    height: 85px;
    -webkit-box-shadow: 0px 0px 12px 0px rgba(155,153,255,1);
    -moz-box-shadow: 0px 0px 12px 0px rgba(155,153,255,1);
    box-shadow: 0px 0px 12px 0px rgba(155,153,255,1);
  }
  .line{
    position: absolute;
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
  }
  .statisctic-slider .swiper-slide:nth-child(odd) .statisctic-slider__name,.statisctic-slider .swiper-slide:nth-child(odd) .line{
    top: 0px;
  }
  .statisctic-slider .swiper-slide:nth-child(even) .statisctic-slider__name,.statisctic-slider .swiper-slide:nth-child(even) .line{
    bottom: 0px;
  }
  .statisctic-slider__name{
    position: absolute;
    width: 100%;
    left: 0px;
    text-align: center;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    z-index: 2;
  }
  .statisctic-slider__name span{
    color: rgba(255,255,255,.5);
    font-size: 13px;
  }
  .statisctic-slider__middle::after{
    content: '';
    background: #9B99FF;
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    height: 1px;
    z-index: 1;
  }
  .statisctic-slider__middle img{
    position: relative;
    z-index: 3;
  }
  .statisctic-slider__middle{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .statisctic-slider .swiper-slide{
    width: 160px;
    height: 370px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .statisctic-slider .swiper-slide:last-child{
    width: 1300px;
  }
  .left{
    display: flex;
    align-items: center;
    margin-bottom: 100px;
  }
  .right{
    width: 100%;
    position: relative;
  }
  .right:after{
    content: '';
    height: 100%;
    position: absolute;
    background: rgb(0,5,15);
    background: linear-gradient(270deg, rgba(0,5,15,0) 0%, rgba(0,5,15,1) 100%);
    left: 0px;
    width: 50px;
    top: 0px;
    z-index: 10;
    pointer-events: none;
  }
  .right:before{
    content: '';
    height: 100%;
    position: absolute;
    background: rgb(0,5,15);
    background: linear-gradient(270deg, rgba(0,5,15,1) 0%, rgba(0,5,15,0) 100%);
    right: 0px;
    width: 50px;
    top: 0px;
    z-index: 10;
    pointer-events: none;
  }
  .slide-nav{
    display: flex;
    margin-left: 40px;
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
  .chart-container{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .chart-container__left{
    position: relative;
    width: 660px;
    display: flex;
    justify-content: center;
  }
  #chart{
    width: 358px;
    position: relative;
    z-index: 3;
  }
  .chart-container__inner{
    position: relative;
    display: flex;
    width: fit-content;
    overflow: hidden;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
  }
  .chart__img{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    transform: scale(1.2);
  }
  .chart__img img{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    -webkit-animation:spin 50s linear infinite;
    -moz-animation:spin 50s linear infinite;
    animation:spin 50s linear infinite;
  }
  .chart__imgGr{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    z-index: 2;
  }
  .chart-container__description .color{
    height: 28px;
    width: 28px;
    position: absolute;
    top: -2px;
    left: 0px;
    border-radius: 50%;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
  }
  .chart-container__description .title{
    font-size: 15px;
    line-height: 24px;
    color: #fff;
    white-space: nowrap;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: translateY(0px);
  }
  .chart-container__description.total .text{
     color: #fff;
   }
  .chart-container__description.total .title{
    color: #ff7152;
  }
  .chart-container__description .text{
    font-size: 15px;
    line-height: 24px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    transform: translateY(0px);
    color: rgba(255,255,255,.5);
  }
  .chart-container__description:nth-child(2) .color,.chart-container__description:nth-child(2) .descr{
    transition-delay: .1s;
  }
  .chart-container__description:nth-child(3) .color,.chart-container__description:nth-child(3) .descr{
    transition-delay: .2s;
  }
  .chart-container__description:nth-child(4) .color,.chart-container__description:nth-child(4) .descr{
    transition-delay: .3s;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .container{
      display: flex;
      flex-direction: column;
    }
    .left{
      width: 100%;
      margin-bottom: 50px;
    }
    .right{
      width: 100%;
    }
    .statistic-container{
      padding-bottom: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
</style>
