<template>
  <div class="body-container">
    <StartContainer v-if="false"/>
    <MainContainer/>
    <TextContainer/>
    <Community :itemData="$store.state.community"/>
    <About/>
    <LottieContainer/>
    <Statistic :statData="$store.state.statistic"/>
    <Frameworks :itemData="$store.state.tabs"/>
    <Generation/>
    <Reviews/>
    <Developers/>
    <Faq :itemData="$store.state.faq"/>
    <CommunityPopup :itemData="$store.state.community"/>
  </div>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue'
import Community from '@/components/Community.vue'
import CommunityPopup from '@/components/CommunityPopup.vue'
import About from '@/components/About.vue'
import Faq from '@/components/Faq.vue'
import Reviews from '../components/Reviews'
import Statistic from '../components/Statistic'
import StartContainer from '../components/Start'
import LottieContainer from '../components/LottieContainer'
import TextContainer from '../components/TextContainer'
import Frameworks from '../components/Frameworks'
import Generation from '../components/Generation'
import Developers from '../components/Developers'

export default {
  name: 'Home',
  components: {
    Developers,
    Frameworks,
    Generation,
    TextContainer,
    LottieContainer,
    StartContainer,
    Statistic,
    Reviews,
    MainContainer,
    Community,
    CommunityPopup,
    Faq,
    About
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
