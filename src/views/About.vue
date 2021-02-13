<template>
  <div class="body-container">
    <AboutMainContainer/>
    <AboutVideo/>
    <AboutText/>
    <AboutFinancial/>
    <AboutList/>
  </div>
</template>

<script>
import AboutMainContainer from '@/components/AboutMainContainer.vue'
import AboutVideo from '@/components/AboutVideo.vue'
import AboutText from '@/components/AboutText.vue'
import AboutFinancial from '@/components/AboutFinancial.vue'
import AboutList from '@/components/AboutList.vue'
export default {
  name: 'About',
  components: {
    AboutMainContainer,
    AboutVideo,
    AboutText,
    AboutFinancial,
    AboutList
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
