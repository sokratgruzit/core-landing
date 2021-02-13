<template>
  <div class="pT-160 pB-160">
    <div class="container lottie-container__outer">
      <h3 class="font-51" data-aos="fade-up">CORE solves today's hardest
        blockchain problems</h3>
      <div class="lottie-container" data-aos="fade-up">
        <div class="lottie-container__item" @mouseover="hover(1)">
          <lottie-animation
            ref="lottie1"
            :animationData="require(`@/assets/lottie-icons/scalability.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(1)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Scalability</div>
            <div class="txt">Here will be a brief description
              of the problem in a few lines</div>
          </div>
        </div>
        <!--      <div class="lottie-container__item" @mouseover="hover(2)">-->
        <!--        <lottie-animation-->
        <!--          ref="lottie2"-->
        <!--          :animationData="require(`@/assets/lottie-icons/user_experience.json`)"-->
        <!--          :loop="false"-->
        <!--          :autoPlay="false"-->
        <!--          @complete="leave(2)"-->
        <!--        />-->
        <!--        <div class="ttl">User Experience</div>-->
        <!--      </div>-->
        <div class="lottie-container__item" @mouseover="hover(3)">
          <lottie-animation
            ref="lottie3"
            :animationData="require(`@/assets/lottie-icons/usability.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(3)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Usability</div>
            <div class="txt">Here will be a brief description
              of the problem in a few lines</div>
          </div>
        </div>
        <div class="lottie-container__item" @mouseover="hover(4)">
          <lottie-animation
            ref="lottie4"
            :animationData="require(`@/assets/lottie-icons/interoperability.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(4)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Interoperability</div>
            <div class="txt">Here will be a brief description
              of the problem in a few lines</div>
          </div>
        </div>
        <div class="lottie-container__item" @mouseover="hover(5)">
          <lottie-animation
            ref="lottie5"
            :animationData="require(`@/assets/lottie-icons/security.json`)"
            :loop="false"
            :autoPlay="false"
            @complete="leave(5)"
          />
          <div class="lottie-container__item-description">
            <div class="ttl">Security</div>
            <div class="txt">Here will be a brief description
              of the problem in a few lines</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import LottieAnimation from 'lottie-web-vue' // import lottie-web-vue
export default {
  components: {
    LottieAnimation
  },
  data () {
    return {
    }
  },
  methods: {
    test () {
      console.log('hi')
    },
    hover (id) {
      if (id === 1) {
        this.$refs.lottie1.play()
      }
      if (id === 2) {
        this.$refs.lottie2.play()
      }
      if (id === 3) {
        this.$refs.lottie3.play()
      }
      if (id === 4) {
        this.$refs.lottie4.play()
      }
      if (id === 5) {
        this.$refs.lottie5.play()
      }
    },
    leave (id) {
      if (id === 1) {
        this.$refs.lottie1.stop()
      }
      if (id === 2) {
        this.$refs.lottie2.stop()
      }
      if (id === 3) {
        this.$refs.lottie3.stop()
      }
      if (id === 4) {
        this.$refs.lottie4.stop()
      }
      if (id === 5) {
        this.$refs.lottie5.stop()
      }
    }
  }
}
</script>
<style scoped>
  .lottie-container__item-description{
    margin-left: 40px;
  }
  .lottie-container__item{
    display: flex;
    padding-right: 250px;
    width: 100%;
    align-items: center;
    margin-bottom: 60px;
  }
  .lottie-container__item .txt{
    opacity: .7;
    font-size: 15px;
    line-height: 24px;
    margin-top: 5px;
    color: rgba(255,255,255,.7);
  }
  .lottie-container__item .ttl{
    font-size: 15px;
    line-height: 24px;
    color: #FF7152;
    transition: .6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  }
  .lottie-container__item:hover .ttl{
    color: #fff;
  }
  .lottie-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding-left: 60px;
  }
  .lottie-container__outer{
    display: flex;
  }
  h3{
    width: 30%;
  }
  h3 span{
    font-size: inherit;
    color: #FF7152;
  }
  /*Laptop 1440*/
  @media (max-width: 1900px){
    .lottie-container__item{
      padding-right: 0px;
    }
  }
  /*Ipad Pro 1024*/
  @media (max-width: 1365px){
    .lottie-container{
      flex-wrap: wrap;
    }
  }
  /*Ipad 768*/
  @media (max-width: 1023px){
    .lottie-container__item{
      width: 50%;
      margin-bottom: 30px;
    }
  }
  /*Mobile 320*/
  @media (max-width: 767px){
    .lottie-container__item .txt{
      font-size: 12px;
      line-height: 20px;
    }
    .lottie-container__item{
      padding-right: 15px;
    }
    h3{
      margin-top: 60px;
      width: 100%;
    }
    .lottie-container{
      padding-bottom: 60px;
    }
  }
</style>
