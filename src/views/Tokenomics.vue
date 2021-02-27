<template>
  <div class="body-container">
    <TokenomicsMainContainer/>
    <TokenomicsChart/>
    <TokenomicsList/>
  </div>
</template>

<script>
import TokenomicsMainContainer from '@/components/TokenomicsMainContainer.vue'
import TokenomicsChart from '@/components/TokenomicsChart.vue'
import TokenomicsList from '@/components/TokenomicsList.vue'
export default {
  name: 'Tokenomics',
  components: {
    TokenomicsMainContainer,
    TokenomicsChart,
    TokenomicsList
  }
}
</script>
<style scoped>
  .body-container{
    padding-left: 210px;
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .body-container{
      padding-left: 180px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .body-container{
      padding-left: 0px;
    }
  }
</style>
