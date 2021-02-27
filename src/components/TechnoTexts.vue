<template>
  <div class="container">
    <div class="techno-text__container pT-160 pB-160">
      <h2 data-aos="fade-up" class="font-51">
        <span class="font-51">Other</span>
        <span class="font-51">Features</span>
      </h2>
    <div data-aos="fade-up" class="techno-text__inner">
      <h3 class="techno-text__title">
        <span>1.</span>CORE Bridge
      </h3>
      <div class="techno-text__double-inner">
        <div class="techno-text__double">
          <div class="techno-text__txt">CORE bridges allow resources, data, and information to be shared between multiple blockchains in different ecosystems, which is a limitation currently present in blockchain technology. This cross-chain communication is called interoperability.</div>
        </div>
        <div class="techno-text__double">
          <div class="techno-text__txt">CORE utilizes sophisticated technology into one streamlined, efficient, and high speed cross-chain communication protocol.</div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" class="techno-text__inner">
        <h3 class="techno-text__title">
          <span>2.</span>CORE Universal Block Explorer
        </h3>
        <div class="techno-text__double-inner">
          <div class="techno-text__double">
            <div class="techno-text__txt">CORE has a universal block Explorer that allows anyone to view blocks on any CORE-connected chain as well as all of the major public chains such as Bitcoin, Ethereum, etc.</div>
          </div>
          <div class="techno-text__double">
            <div class="techno-text__txt">CORE grants anyone a simple solution to search a multitude of blockchains.</div>
          </div>
        </div>
      </div>
    <div data-aos="fade-up" class="techno-text__inner wh__bg">
        <div class="techno-text__double-inner">
          <div class="techno-text__double col">
            <h3 class="techno-text__title">
              <span>3.</span>Transaction Privacy Protection Layer
            </h3>
            <div class="techno-text__txt">CORE transaction privacy protection layer (TPPL) adds an extra layer of security and privacy when transacting on its blockchain. This is a universal layer that is applied to every CORE-connected chain and can be applied to the major public blockchains.</div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="techno-text__inner">
        <div class="techno-text__double-inner col">
          <div class="techno-text__double">
            <h3 class="techno-text__title">
              <span>4.</span> Seamless Access to Off-Chain Data
            </h3>
            <div class="techno-text__txt">Oracles are an exciting innovation in the decentralized application space. They are a streamlined data sharing solution between the decentralized and physical world</div>
          </div>
        </div>
      </div>
    <div data-aos="fade-up" class="techno-text__inner">
        <div class="techno-text__double-inner">
          <div class="techno-text__txt">CORE provides an efficient and simple access point for developers to retrieve off-chain data, similar to Oracles. CORE's data solution enables decentralized-apps and smart contracts on the CORE chain  to use data from other CORE-linked chains and the the major blockchains.</div>
        </div>
      </div>
      <div data-aos="fade-up" class="techno-text__inner">
        <h3 class="techno-text__title">
          <span>5.</span>Universal blockchain Access API for Developers
        </h3>
        <div class="techno-text__double-inner">
          <div class="techno-text__txt">CORE's universal API is a cross-chain, enterprise-ready, development solution that allows developers to easily develop blockchain apps on both CORE-linked blockchains and the major blockchains.</div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    itemData: {
      type: Array
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped>
  .col.techno-text__double{
    flex-direction: column;
    width: 100%;
  }
  h2{
    flex-direction: column;
    display: flex;
    margin-bottom: 50px;
  }
  h2 span:last-child{
    padding-left: 120px;
  }
  .wh__bg:after{
    position: absolute;
    top: 0px;
    right: -80px;
    height: 100%;
    width: calc(100% + 160px);
    background: transparent;
    z-index: 1;
    content: '';
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .wh__bg:hover:after{
    background: #ffffff;
  }
  .wh__bg:hover .techno-text__txt{
    color: #00050F;
    opacity: .5;
  }
  .wh__bg:hover .techno-text__title{
    color: #00050F;
  }
  .techno-text__title span{
    font-size: inherit;
    color: #FF7152;
    margin-right: 5px;
  }
  .techno-text__title{
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 15px;
    position: relative;
    z-index: 3;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .techno-text__txt{
    padding-right: 120px;
    color: rgba(255,255,255,.5);
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .techno-text__double{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }
  .techno-text__double-inner{
    display: flex;
    position: relative;
    z-index: 2;
  }
  .techno-text__inner{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 60px 0px;
    position: relative;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .wh__bg:after{
      position: absolute;
      top: 0px;
      right: -40px;
      height: 100%;
      width: calc(100% + 80px);
      z-index: 1;
      content: '';
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
    h2 span:last-child {
      padding-left: 60px;
    }
    .techno-icons_item{
      padding-right: 30px;
    }
    .techno-text__txt {
      padding-right: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .techno-text__inner{
      padding: 30px 0px;
    }
    .wh__bg .techno-text__double:first-child{
      margin-bottom: 30px;
    }
    .techno-text__title{
      text-align: center;
    }
    .techno-text__txt{
      padding-right: 0px;
      text-align: center;
    }
    .techno-text__double{
      width: 100%;
    }
    .techno-text__double-inner{
      flex-direction: column;
    }
  }
</style>
