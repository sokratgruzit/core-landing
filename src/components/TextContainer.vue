<template>
  <div class="text-container">
    <img :src="require(`@/assets/img/textImg.jpg`)" alt="" class="text-container__image" data-aos="fade-up">
      <div class="text-container__inner">
        <div class="text-container__up" data-aos="fade-up">
         CORE— is Multi Chain PoS Network focused on Interoperability, Scalability and Usability. It utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance.
        </div>
        <div class="text-container__bottom"  data-aos="fade-up">
          <div class="text-container__bottom-inner">
            It would attain higher level of Scalability using Advanced Sharding along with Pipelining and Chunking and Parallel Transaction Processing. These technologies have made it possible for the CORE network to be infinitely scalable and to achieve significantly higher throughput and efficiency.
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
  .text-container{
    position: relative;
    padding-top: 68%;
  }
  .text-container__image{
    width: calc(100% + 210px);
    top: 0px;
    right: 0px;
    position: absolute;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
  .text-container__bottom-inner{
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    opacity: .5;
    text-align: left;
  }
  .text-container__bottom{
    width: 640px;
    text-align: left;
    display: flex;
    font-size: 15px;
    line-height: 24px;
  }
  .text-container__inner{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    padding-bottom: 240px;
    z-index: 3;
    align-items: center;
    padding-right: 210px;
  }
  .text-container__up{
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    width: 640px;
    text-align: left;
  }
  .text-container__up span{
    font-size: inherit;
    color: #ff7152;
  }
  /*Laptop*/
  @media (max-width: 1900px){
    .text-container__inner{
      width: 100%;
    }
  }
  /*Ipad 1024*/
  @media (max-width: 1365px){
    .text-container__inner{
      padding-bottom: 60px;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1024px){
    .text-container__up ,.text-container__bottom{
      font-size: 12px;
      line-height: 23px;
      width: 90%;
    }
    .text-container__bottom-inner{
      font-size: 12px;
      line-height: 23px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .text-container__image{
      width: 100%;
      object-fit: contain;
    }
    .text-container__up, .text-container__bottom {
      font-size: 10px;
      line-height: 20px;
      width: 90%;
    }
    .text-container__inner{
      padding-right: 0px;
    }
    .text-container{
      padding-top: 100%;
    }
    .text-container__up{
      font-size: 14px;
      line-height: 20px;
    }
    .text-container__bottom-inner {
      font-size: 12px;
      line-height: 20px;
    }
  }
</style>
