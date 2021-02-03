<template>
  <div class="generation-outer">
    <img :src="require(`@/assets/img/generation.jpg`)" alt="" class="generation-outer__image">
    <div class="container">
      <div class="generation-container">
        <h2 class="generation-container__title font-72" data-aos="fade-up">We are a New Generation</h2>
        <div class="generation-container__inner" data-aos="fade-up">
          <div class="generation-container__item">
            <div class="generation-container__item-sub-title">Bitcoin</div>
            <div class="generation-container__item-title">Blockchain 1.0</div>
            <ul>
              <li>Protection from fraud</li>
              <li>Global Availability</li>
              <li>Cost effectiveness</li>
              <li>Crowdfunding</li>
              <li>Multi-user accounts</li>
              <li>Sustainability & Decentralization</li>
            </ul>
          </div>
          <div class="generation-container__item">
            <div class="generation-container__item-sub-title">CORE, Cardano, Cosmos, <br> Elrond & Polkadot</div>
            <div class="generation-container__item-title">Blockchain 3.0</div>
            <ul>
              <li>Protection from fraud</li>
              <li>Global Availability</li>
              <li>Cost effectiveness</li>
              <li>Crowdfunding</li>
              <li>Multi-user accounts</li>
              <li>Sustainability & Decentralization</li>
            </ul>
            <a href="##" class="generation-container__item-button">Learn More Now</a>
          </div>
          <div class="generation-container__item">
            <div class="generation-container__item-sub-title">Ethereum</div>
            <div class="generation-container__item-title">Blockchain 2.0</div>
            <ul>
              <li>Protection from fraud</li>
              <li>Global Availability</li>
              <li>Cost effectiveness</li>
              <li>Crowdfunding</li>
              <li>Multi-user accounts</li>
              <li>Sustainability & Decentralization</li>
            </ul>
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
    }
  },
  methods: {
  }
}
</script>
<style scoped>
  .generation-container__item-button:hover{
    background: rgba(255,255,255,.2);
  }
  .generation-container__item-button{
    background: rgba(255,255,255,.1);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    display: flex;
    margin-top: auto;
    justify-content: center;
    align-items: center;
    height: 52px;
    font-size: 16px;
  }
  .generation-outer__image{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .generation-outer{
    position: relative;
  }
  .generation-container{
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 160px;
    padding-bottom: 160px;
  }
  .generation-container__inner{
    height: 480px;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 80px;
  }
  .generation-container__item{
    width: 340px;
    border: 2px solid rgba(255,255,255,.1);
    margin: 0px 13px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #010918;
  }
  .generation-container__item:nth-child(1),.generation-container__item:nth-child(3){
    margin-top: 40px;
  }
  .generation-container__item:nth-child(2){
    border-color: #FF7152;
  }
  .generation-container__item-sub-title{
    font-size: 16px;
    line-height: 24px;
    opacity: .7;
  }
  .generation-container__item-title{
    font-size: 32px;
    line-height: 42px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
  li{
    padding-left: 25px;
    position: relative;
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 24px;
  }
  li:after{
    height: 8px;
    width: 8px;
    background: #0500FF;
    position: absolute;
    left: 0px;
    top: 8px;
    border-radius: 50%;
    content: '';
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
