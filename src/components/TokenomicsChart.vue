<template>
  <div class="takenomics-chart pT-160 pB-160">
    <div class="container">
      <div data-aos="fade-up" class="about-financial__header">
        <h3 class="font-51"><span>Token</span> <span>Distribution</span></h3>
        <div class="about-financial__header-text-container">
          <div class="about-financial__header-title">Total Supply</div>
          <div class="about-financial__header-sub-title">20,000,000,000 CMCX</div>
        </div>
      </div>
      <div class="chart-container" data-aos="fade-up">
        <div class="chart-container__left">
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
          <div class="chart-container__description">
            <div class="color" style="border-color: #0500FF"></div>
            <div class="title descr">Reserve</div>
            <div class="text descr">6,000,000,000 CMCX (30%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #817EFF"></div>
            <div class="title descr">Seed Round (Private Founders)</div>
            <div class="text descr">4,000,000,0000 CMCX (20%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #D5D5FF"></div>
            <div class="title descr">IEO</div>
            <div class="text descr">4,000,000,0000 CMCX (20%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #FFBB95"></div>
            <div class="title descr">Ecosystem Rewards</div>
            <div class="text descr">2,000,000,0000 CMCX (10%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #FF8D4D"></div>
            <div class="title descr">Marketing & Operations</div>
            <div class="text descr">1,000,000,0000 CMCX (10%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #E2DD5D"></div>
            <div class="title descr">Advisory Board</div>
            <div class="text descr">600,000,0000 CMCX (3%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #4ECB6A"></div>
            <div class="title descr">Strategic Acquisitions</div>
            <div class="text descr">400,000,0000 CMCX (2%)</div>
          </div>
          <div class="chart-container__description">
            <div class="color" style="border-color: #99FFB0"></div>
            <div class="title descr">Team</div>
            <div class="text descr">2,000,000,0000 CMCX (10%)</div>
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
  .takenomics-chart{
    display: flex;
  }
  .column-chart__footer-item span{
    height: 4px;
    width: 25px;
    border-radius: 10px;
    display: flex;
    margin-right: 30px;
  }
  .chart-container__description{
    margin: 15px 0px;
    position: relative;
    padding: 0px 40px;
  }
  .chart-container__right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  .chart-container{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 30px;
  }
  .chart-container__left{
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
    margin-top: 50px;
  }
  #chart{
    width: 380px;
    position: relative;
    z-index: 3;
  }
  .chart-container__inner{
    position: relative;
    display: flex;
    width: fit-content;
    height: fit-content;
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
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
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
    height: 20px;
    width: 20px;
    position: absolute;
    top: 2px;
    left: 0px;
    border-radius: 50%;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    border: 4px solid;
  }
  .chart-container__description .title{
    font-size: 15px;
    white-space: nowrap;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: translateY(0px);
  }
  .chart-container__description .text{
    font-size: 15px;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    opacity: 1;
    transform: scale(1);
    transform: translateY(0px);
    color: rgba(255,255,255,.7);
    line-height: 24px;
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
    .about-financial__header-text-container{
      padding-right: 120px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    .chart-container__left{
      padding-right: 40px;
    }
    h3 span:last-child {
      padding-left: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .chart-container{
      flex-direction: column;
    }
    h3 span:last-child {
      padding-left: 60px;
    }
    .about-financial__header-text-container {
      padding-right: 25px;
    }
    .chart-container__left{
      padding-right: 0px;
      width: 100%;
      justify-content: center;
    }
    .chart-container__right{
      margin-left: auto;
      margin-right: auto;
    }
    .chart-container__description {
      margin: 5px 0px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
    .column-chart__footer-item{
      font-size: 12px;
      margin-right: 0px;
    }
    .column-chart__footer-item span{
      margin-right: 10px;
    }
    .column-chart__footer-item:first-child{
      margin-bottom: 5px;
    }
    .column-chart__footer{
      flex-direction: column;
    }
    .about-financial__header{
      flex-direction: column;
    }
    .about-financial__header-text-container{
      width: 100%;
    }
    .chart-container__right{
      width: 100%;
    }
    .column-chart-container__inner{
      width: 100%;
    }
  }
</style>
