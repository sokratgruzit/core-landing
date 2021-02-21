<template>
  <div class="body-container">
    <RoadmapMain/>
  </div>
</template>

<script>
import RoadmapMain from '@/components/RoadmapMain.vue'
export default {
  name: 'About',
  components: {
    RoadmapMain
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
