<template>
  <div class="body-container">
    <TechnologyMainContainer/>
    <TechnologyTabs :itemData="$store.state.techTabs"/>
    <TechnologyIcons/>
    <TechnoTexts/>
  </div>
</template>

<script>
import TechnologyMainContainer from '@/components/TechnologyMainContainer.vue'
import TechnologyTabs from '@/components/TechnologyTabs.vue'
import TechnologyIcons from '@/components/TechnologyIcons.vue'
import TechnoTexts from '@/components/TechnoTexts.vue'
export default {
  name: 'About',
  components: {
    TechnologyMainContainer,
    TechnologyTabs,
    TechnologyIcons,
    TechnoTexts
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
