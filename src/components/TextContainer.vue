<template>
  <div class="text-container">
    <img :src="require(`@/assets/img/textImg.jpg`)" alt="" class="text-container__image" data-aos="fade-up">
      <div class="text-container__inner">
        <div class="text-container__up" data-aos="fade-up">
          <span>CORE</span> — is Multi Chain PoS Network focused on Interoperability, Scalability and Usability. It utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance.
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
  }
  .text-container__image{
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .text-container__bottom-inner{
    font-size: 16px;
    line-height: 24px;
    margin-top: 30px;
    opacity: .7;
    text-align: center;
  }
  .text-container__bottom{
    width: 740px;
    display: flex;
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
    padding-bottom: 160px;
    z-index: 3;
    align-items: center;
  }
  .text-container__up{
    text-align: center;
    font-size: 28px;
    line-height: 40px;
    width: 740px;
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
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
