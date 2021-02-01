<template>
  <div class="container">
      <div class="text-container__inner">
        <div class="text-container__up" data-aos="fade-up">
          <span>CORE</span> — is Multi Chain PoS Network focused on Interoperability, Scalability and Usability. It utilizes AI Enabled Proof of Stake Algorithm, Multi Layered Consensus Model and Voting Based Governance.
        </div>
        <div class="text-container__bottom"  data-aos="fade-up">
          <div class="text-container__bottom-inner">
            It would attain higher level of Scalability using Advanced Sharding along with Pipelining and Chunking and Parallel Transaction Processing.
          </div>
          <div class="text-container__bottom-inner">
            These technologies have made it possible for the CORE network to be infinitely scalable and to achieve significantly higher throughput and efficiency.
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
  .text-container__bottom-inner{
    font-size: 24px;
    line-height: 36px;
    margin-top: 30px;
    opacity: .7;
  }
  .text-container__bottom{
    width: 100%;
    display: flex;
  }
  .text-container__inner{
    width: 69%;
    padding-top: 160px;
  }
  .text-container__up{
    font-size: 32px;
    line-height: 42px;
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
