<template>
  <div class="about-financial pT-140">
    <div class="container">
      <div class="about-financial__header">
        <h3 class="font-51"><span>Financial</span> <span>Highlights</span></h3>
        <div class="about-financial__header-text-container">
          <p class="about-financial__header-text">
            NexBank provides up-to-date financial data for all our stakeholders. Below you will find NexBank's current financial highlights and ratings.
          </p>
          <div class="about-financial__header-title">Q3 2020 Highlights</div>
          <div class="about-financial__header-sub-title">Loan Portfolio (Gross)</div>
        </div>
      </div>
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
<style>
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
  .container{
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-sub-title{
    font-size: 20px;
    line-height: 30px;
    color: #FF7152;
  }
  .about-financial__header-title{
    font-size: 20px;
    line-height: 30px;
    margin-top: 60px;
  }
  h3 span{
    font-size: inherit;
  }
  h3 span:last-child{
    padding-left: 120px;
  }
  .about-financial__header{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  h3{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-text-container{
    width: 50%;
    padding-right: 300px;
    display: flex;
    flex-direction: column;
  }
  .about-financial__header-text{
    font-size: 15px;
    line-height: 24px;
    color: rgba(255,255,255,.7);
    margin-top: 20px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Iphone*/
  @media (max-width: 767px) {
  }
</style>
