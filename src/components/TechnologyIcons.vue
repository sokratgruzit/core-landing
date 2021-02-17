<template>
  <div class="techno-icons__container container pT-160">
    <h3 class="font-51">
      <span class="font-51">All-day power</span>
      <span class="font-51">has outdone itself</span>
    </h3>
    <div class="techno-icons__inner">
      <div class="techno-text">
        Galaxy S21 Ultra 5G's Intelligent Battery outlasts the day—even on 5G. Maxing out at a massive 5000mAh, it combines with the new power-efficient display and processor to live on beyond the 24-hour mark.
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
  .techno-icons__inner{
    display: flex;
    justify-content: center;
    padding-right: 105px;
    margin-top: 100px;
  }
  .techno-text{
    font-size: 20px;
    line-height: 30px;
    width: 640px;
    margin-bottom: 100px;
  }
  .techno-icons__container{
    display: flex;
    flex-direction: column;
  }
  h3{
    flex-direction: column;
    display: flex;
  }
  h3 span:last-child{
    padding-left: 120px;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1300px){
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
  }
  /*Mobile 320*/
  @media (max-width: 767px){
  }
</style>
