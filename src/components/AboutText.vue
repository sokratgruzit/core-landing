<template>
  <div class="container">
    <div class="about-text__container pT-160 pB-160">
      <p class="about-text" data-aos="fade-up">NexBank’s commitment to client success began with a charter in 1922 and continues today. NexBank is proud to be nationally and regionally recognized
        for its accomplishments and success as a top performing bank amongst its peers.</p>
      <p class="about-text" data-aos="fade-up">NexBank operates in three divisions — Institutional Banking, Commercial Banking,
        and Mortgage Banking. It also offers Personal Banking and Wealth Management services to individuals throughout the U.S.</p>
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
<style>
  .about-text{
    font-size: 20px;
    line-height: 30px;
    color: rgba(255,255,255,.7);
  }
  .about-text:first-child{
    margin-bottom: 50px;
  }
  .about-text__container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 830px;
    margin: 0px auto;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
  }
  /*Ipad Pro */
  @media (max-width: 1300px){
    .about-text__container{
      width: 80%;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .about-text{
      font-size: 16px;
      line-height: 26px;
    }
    .about-text:first-child {
      margin-bottom: 30px;
    }
  }
  /*Iphone*/
  @media (max-width: 767px) {
  }
</style>
