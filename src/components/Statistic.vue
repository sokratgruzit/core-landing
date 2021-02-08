<template>
  <div class="statistic-container">
    <div class="container">
      <div class="left">
        <h3 class="font-72" data-aos="fade-up">
          Our
          important statistics
        </h3>
        <div class="slide-nav" data-aos="fade-up">
          <div class="prev">
            <svg width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.6568 -6.86641e-06L27.1137 5.34645L14.8358 17.252L54 17.252L54 24.748L14.8358 24.748L27.1137 36.6535L21.6568 42L9.17939e-07 21L21.6568 -6.86641e-06Z" fill="#0500FF"/>
            </svg>
          </div>
          <div class="next">
            <svg width="54" height="42" viewBox="0 0 54 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.3432 -6.86641e-06L26.8863 5.34645L39.1642 17.252L-1.08177e-06 17.252L-7.54108e-07 24.748L39.1642 24.748L26.8863 36.6535L32.3432 42L54 21L32.3432 -6.86641e-06Z" fill="#0500FF"/>
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
                <div class="chart-container__inner">
                  <img :src="require(`@/assets/img/chart.png`)" alt="" class="chart__img">
                  <img :src="require(`@/assets/img/gradientChart.png`)" alt="" class="chart__imgGr">
                  <div id="chart">
                    <apexchart type="radialBar" height="380" :options="chartOptions" :series="series"></apexchart>
                  </div>
                </div>
              </div>
              <div class="chart-container__right">
                <div class="chart-container__description">
                  <div class="color" style="background: #0500FF"></div>
                  <div class="title descr">Sale</div>
                  <div class="text descr">3 Billion</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #504DFF"></div>
                  <div class="title descr">Reserve</div>
                  <div class="text descr">500 Million</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #9B99FF"></div>
                  <div class="title descr">Founders & Advisors</div>
                  <div class="text descr">340 Million</div>
                </div>
                <div class="chart-container__description">
                  <div class="color" style="background: #CFCEFF"></div>
                  <div class="title descr">Marketing</div>
                  <div class="text descr">900 Million</div>
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
        watchOverflow: true,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        }
      },
      series: [44, 55, 67, 83],
      chartOptions: {
        chart: {
          type: 'radialBar'
        },
        colors: ['#0500FF', '#504DFF', '#9B99FF', '#CFCEFF'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '50%'
            },
            track: {
              background: 'transparent',
              margin: 10
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
  .chart-container__description{
    margin: 15px 0px;
    position: relative;
    padding: 0px 50px;
  }
  .chart-container__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    white-space: nowrap;
    z-index: 2;
    overflow: hidden;
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
    width: 900px;
  }
  .left{
    width: 480px;
    display: flex;
    flex-direction: column;
  }
  .right{
    width: calc(100% - 480px);
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
    margin-top: 90px;
  }
  .slide-nav path{
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .slide-nav div:hover path{
    fill: #ff7152;
  }
  .prev{
    margin-right: 25px;
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
    font-size: 20px;
    color: #ff7152;
    white-space: nowrap;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: translateY(0px);
  }
  .chart-container__description .text{
    font-size: 20px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    transform: translateY(0px);
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
    .left{
      width: 380px;
    }
    .right {
      width: calc(100% - 380px);
    }
    .chart-container__left{
      width: 500px;
    }
    .statisctic-slider .swiper-slide:last-child{
      width: 750px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .slide-nav{
      margin-top: 50px;
    }
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
