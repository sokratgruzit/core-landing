<template>
  <div class="body-container">
    <CommunityMain/>
  </div>
</template>

<script>
import CommunityMain from '@/components/CommunityMain.vue'
export default {
  name: 'Community',
  components: {
    CommunityMain
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
